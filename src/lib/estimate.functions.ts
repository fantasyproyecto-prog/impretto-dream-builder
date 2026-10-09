import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^[+()\d\s\-.]{10,25}$/),
  zip: z.string().trim().regex(/^\d{5}$/),
  scope: z.string().trim().min(1).max(100),
  timeline: z.string().trim().min(1).max(100),
});

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const DEFAULT_FROM = "Impretto Home <onboarding@resend.dev>";

/** Accepts "you@domain.com" or "Name <you@domain.com>"; anything else falls back. */
export function resolveFrom(raw: string | undefined): string {
  const v = (raw ?? "").trim().replace(/^["']|["']$/g, "");
  if (!v) return DEFAULT_FROM;
  if (/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(v)) return `Impretto Home <${v}>`;
  if (/^[^<>]+<[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+>$/.test(v)) return v;
  return DEFAULT_FROM;
}

export const sendEstimate = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"]?.trim();
    if (!apiKey) {
      console.error("[estimate] RESEND_API_KEY is not configured");
      return { ok: false as const, reason: "Email service is not configured (missing RESEND_API_KEY)." };
    }
    const from = resolveFrom(process.env["RESEND_FROM"]);
    const rows = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["ZIP", data.zip],
      ["Scope", data.scope],
      ["Timeline", data.timeline],
    ]
      .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#555">${k}</td><td style="padding:6px 12px"><b>${esc(v)}</b></td></tr>`)
      .join("");

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: ["Impretto.llc@gmail.com"],
          subject: `New Free Estimate Request — ${data.name} (${data.zip})`,
          html: `<h2>New Free Estimate Request</h2><table>${rows}</table>`,
        }),
      });
      const text = await res.text();
      if (!res.ok) {
        let message = text;
        try {
          message = (JSON.parse(text) as { message?: string }).message ?? text;
        } catch {}
        console.error(`[estimate] Resend failed [${res.status}] from="${from}": ${text}`);
        return { ok: false as const, reason: `Resend ${res.status}: ${message}`.slice(0, 300) };
      }
      console.log(`[estimate] Email sent from="${from}": ${text}`);
      return { ok: true as const };
    } catch (err) {
      console.error("[estimate] Network error calling Resend", err);
      return { ok: false as const, reason: "Could not reach the email service." };
    }
  });
