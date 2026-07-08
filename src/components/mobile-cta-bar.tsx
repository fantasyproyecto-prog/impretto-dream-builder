import { Phone } from "lucide-react";

const PHONE_HREF = "tel:+15550142231";

/**
 * Frosted-glass sticky bottom action bar. Mobile-only (< md).
 * Sits above the iOS home indicator via safe-area-inset-bottom.
 */
export function MobileCtaBar({ ctaLabel = "Get Free Estimate" }: { ctaLabel?: string } = {}) {
  return (
    <>
      {/* Spacer so page content isn't hidden behind the bar on mobile. */}
      <div
        aria-hidden
        className="md:hidden"
        style={{ height: "calc(72px + env(safe-area-inset-bottom))" }}
      />
      <div
        className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-white/70 backdrop-blur-xl"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom) + 0.5rem)",
          paddingTop: "0.5rem",
          paddingLeft: "calc(env(safe-area-inset-left) + 0.75rem)",
          paddingRight: "calc(env(safe-area-inset-right) + 0.75rem)",
          boxShadow: "0 -10px 30px -12px color-mix(in oklab, var(--ink) 22%, transparent)",
        }}
      >
        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            aria-label="Call Impretto Home"
            className="inline-flex h-12 min-w-[48px] items-center justify-center rounded-xl border border-ink/15 bg-white text-ink shadow-sm active:scale-[0.98] transition"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="#contact"
            className="btn-brass flex-1 text-base"
            style={{ padding: "0.85rem 1rem", minHeight: 48 }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </>
  );
}
