<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Vercel builds use the nitro "vercel" preset (set in vite.config.ts when VERCEL env is present) — otherwise server functions are missing on Vercel and the site deploys as static files only.
- Estimate notification HTML lives in a pure renderer separate from the sending function, with centralized email palette values and inline table styling for email-client compatibility.
- Website brand assets use shared BrandLogo and CDN pointers; legacy CSS color aliases map to the current palette so legal pages inherit branding without altering legal copy.
- The painting hero adapts the existing estimate form through scoped CSS rather than editing its submission implementation, preserving the email flow during visual updates.
