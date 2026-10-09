export type EstimateDetails = {
  name: string;
  phone: string;
  zip: string;
  scope: string;
  timeline: string;
};

const palette = {
  green: "#1F6F4A",
  darkGreen: "#123D2A",
  background: "#F7F8F7",
  surface: "#FFFFFF",
  text: "#0B0C0B",
  muted: "#676E6A",
  border: "#E9ECEA",
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    return entities[character] ?? character;
  });

/** Inline styles and presentation tables preserve the layout in email clients. */
export function renderEstimateEmail(data: EstimateDetails): string {
  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["ZIP", data.zip],
    ["Scope", data.scope],
    ["Timeline", data.timeline],
  ].map(([label, value], index) => `
    <tr>
      <td class="detail-label" width="110" valign="top" style="padding:18px 20px;font-size:14px;line-height:22px;font-weight:700;color:${palette.muted};${index ? `border-top:1px solid ${palette.border};` : ""}">${label}</td>
      <td class="detail-value" valign="top" style="padding:18px 20px 18px 0;font-size:16px;line-height:24px;color:${palette.text};overflow-wrap:anywhere;word-break:break-word;${index ? `border-top:1px solid ${palette.border};` : ""}">${escapeHtml(value)}</td>
    </tr>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>New Free Estimate Request | Impretto Home</title>
  <style>
    @media only screen and (max-width:600px) {
      .outer { padding:16px 8px !important; }
      .header { padding:28px 20px !important; }
      .content { padding:28px 20px !important; }
      .headline { font-size:25px !important; line-height:33px !important; }
      .detail-label { width:80px !important; padding:16px 12px !important; }
      .detail-value { padding:16px 12px 16px 0 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;width:100%;background-color:${palette.background};font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">A new bathroom remodeling estimate request is ready for your review.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${palette.background};">
    <tr><td class="outer" align="center" style="padding:40px 16px;">
      <!--[if mso]><table role="presentation" width="600" cellspacing="0" cellpadding="0"><tr><td><![endif]-->
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:${palette.surface};border:1px solid ${palette.border};border-radius:8px;overflow:hidden;">
        <tr><td class="header" style="padding:32px 36px;background-color:${palette.darkGreen};border-bottom:4px solid ${palette.green};">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>
            <!-- Reserved brand mark area: replace the monogram with an absolute HTTPS logo image when available. -->
            <td width="44" height="44" align="center" style="background-color:${palette.green};border-radius:6px;color:${palette.surface};font-size:28px;font-weight:700;line-height:44px;">i</td>
            <td style="padding-left:14px;color:${palette.surface};font-size:24px;line-height:30px;font-weight:700;">Impretto Home</td>
          </tr></table>
        </td></tr>
        <tr><td class="content" style="padding:36px;">
          <p style="margin:0 0 12px;color:${palette.green};font-size:12px;line-height:18px;font-weight:700;">NEW INQUIRY</p>
          <h1 class="headline" style="margin:0 0 14px;color:${palette.text};font-size:30px;line-height:38px;font-weight:700;">Free Estimate Request</h1>
          <p style="margin:0 0 28px;color:${palette.muted};font-size:16px;line-height:25px;">A homeowner has requested a bathroom remodeling estimate. Their project details are below.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;background-color:${palette.background};border:1px solid ${palette.border};border-radius:8px;">${rows}</table>
          <p style="margin:24px 0 0;color:${palette.muted};font-size:14px;line-height:22px;">Contact the homeowner using the phone number above to discuss their project.</p>
        </td></tr>
        <tr><td style="padding:22px 24px;border-top:1px solid ${palette.border};text-align:center;">
          <p style="margin:0;color:${palette.darkGreen};font-size:13px;line-height:21px;font-weight:700;">Impretto Home</p>
          <p style="margin:4px 0 0;color:${palette.muted};font-size:12px;line-height:20px;">Bathroom Remodeling · Wesley Chapel &amp; Tampa Bay</p>
        </td></tr>
      </table>
      <!--[if mso]></td></tr></table><![endif]-->
    </td></tr>
  </table>
</body>
</html>`;
}