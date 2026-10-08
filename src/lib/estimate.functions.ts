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

export const sendEstimate = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return { ok: false as const };
    }
    // Optional: set RESEND_FROM to an address on your verified domain.
    const from = process.env["RESEND_FROM"] || "Impretto Home <onboarding@resend.dev>";
    const rows = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["ZIP", data.zip],
      ["Scope", data.scope],
      ["Timeline", data.timeline],
    ]
      .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#555">${k}</td><td style="padding:6px 12px"><b>${esc(v)}</b></td></tr>`)
      .join("");

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
    if (!res.ok) {
      console.error(`Resend failed [${res.status}]: ${await res.text()}`);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
