import { BrandLogo, brandAssetUrl } from "@/components/brand-logo";
import residentialFinish from "@/assets/painting/residential-finish.jpg.asset.json";
import residentialExterior from "@/assets/painting/residential-exterior.jpg.asset.json";
import condominiumExterior from "@/assets/painting/condominium-exterior.jpg.asset.json";
import exteriorTeam from "@/assets/painting/exterior-team.jpg.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import { sendEstimate } from "@/lib/estimate.functions";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BadgeCheck,
  Building2,
  Droplets,
  Paintbrush,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const p63 = { url: "/images/p63.jpeg" };
const p60 = { url: "/images/p60.jpeg" };
const p54 = { url: "/images/p54.jpeg" };
const p49 = { url: "/images/p49.jpeg" };
const p47 = { url: "/images/p47.jpeg" };
const p46 = { url: "/images/p46.jpeg" };
const p14 = { url: "/images/p14.jpeg" };
const p23 = { url: "/images/p23.jpeg" };
const p26 = { url: "/images/p26.jpeg" };
const p33 = { url: "/images/p33.jpeg" };

const heroBathroom = p63.url;
const heroPainting = brandAssetUrl(residentialFinish.url);
const RESIDENTIAL = [condominiumExterior, exteriorTeam, residentialFinish, residentialExterior].map((asset) => brandAssetUrl(asset.url));
const PAINT = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/paint-${n}.jpeg`);
const project1 = p60.url;
const project2 = p54.url;
const project3 = p49.url;
const beforeImg = p46.url;
const afterImg = p47.url;
import { CinematicScrub } from "@/components/cinematic-scrub";
import { SmoothScroll } from "@/components/smooth-scroll";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { I18nProvider, LangToggle, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Painting Contractors Wesley Chapel & Tampa | Impretto Home",
      },
      {
        name: "description",
        content:
          "Residential & commercial interior and exterior painting, pressure washing, and surface prep in Wesley Chapel, Tampa & Tampa Bay. Plus premium bathroom remodeling.",
      },
      {
        property: "og:title",
        content: "Painting Contractors Wesley Chapel & Tampa | Impretto Home",
      },
      {
        property: "og:description",
        content:
          "Interior & exterior painting, pressure washing, and surface preparation built for Florida's climate across Tampa Bay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroPainting },
      { name: "twitter:image", content: heroPainting },
      {
        name: "keywords",
        content:
          "Painting Contractor Wesley Chapel, Exterior Painting Tampa, Interior Painting Tampa Bay, Pressure Washing Wesley Chapel, Commercial Painting Tampa, Bathroom Remodeling Wesley Chapel, Bathroom Remodeling Tampa, Bathroom Remodeling New Tampa, Bathroom Remodeling Lutz, Tub-to-Shower Conversion Wesley Chapel, Tampa Bay Bathroom Remodeling",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Impretto Home",
          description:
            "Residential & commercial painting and premium bathroom remodeling serving Wesley Chapel & Tampa Bay, Florida.",
          telephone: "+1-813-415-6599",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Wesley Chapel",
            addressRegion: "FL",
            addressCountry: "US",
          },
          areaServed: [
            "Wesley Chapel",
            "Tampa",
            "New Tampa",
            "Lutz",
            "Land O' Lakes",
            "Tampa Bay",
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

const PHONE_DISPLAY = "(813) 415-6599";
const PHONE_HREF = "https://wa.me/18134156599";

function LandingPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SmoothScroll />
        <Header />
        <main>
          <Hero />
          <PaintingSection />
          <TrustStrip />
          <Standards />
          <RemodelDivider />
          <WhyUs />
          <Services />
          <Portfolio />
          <ProjectsCarousel />
          <CinematicScrub />
          <Process />
          <RemodelNote />
        </main>
        <Footer />
        <TranslatedMobileCtaBar />
      </div>
    </I18nProvider>
  );
}

/* ---------------- Painting (primary) ---------------- */

function PaintingSection() {
  const { t } = useI18n();
  const p = t.painting;
  const icons = [Paintbrush, Droplets, Building2];
  const groups = [
    { label: p.before, body: p.beforeBody, idx: [0, 1] },
    { label: p.progress, body: p.progressBody, idx: [2, 3, 4, 5, 6] },
    { label: p.after, body: p.afterBody, idx: [7] },
  ];
  return (
    <section id="painting" className="py-20 lg:py-28 bg-card">
      <div className="container-lux">
        <span className="eyebrow">{p.eyebrow}</span>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl text-balance">{p.title}</h2>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.lede}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {p.services.map((s, i) => {
            const Icon = icons[i] ?? Paintbrush;
            return (
              <article key={s.title} className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)]">
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl">{p.residential}</h3>
          <p className="mt-2 text-muted-foreground">{p.residentialBody}</p>
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {RESIDENTIAL.map((src, i) => <img key={src} src={src} alt={p.residentialAlts[i] ?? ""} width={768} height={768} loading="lazy" className="aspect-square w-full rounded-lg object-cover" />)}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{p.imageNote}</p>
        </div>
        <div className="mt-16 space-y-12">
          {groups.map((g, gi) => (
            <div key={g.label}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-sm text-accent">0{gi + 1}</span>
                <h3 className="text-2xl">{g.label}</h3>
                <span className="text-sm text-muted-foreground">— {g.body}</span>
              </div>
              <div
                className={`mt-5 grid gap-4 ${
                  g.idx.length === 1 ? "grid-cols-1 sm:grid-cols-2" : g.idx.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                }`}
              >
                {g.idx.map((n) => (
                  <img
                    key={n}
                    src={PAINT[n]}
                    alt={p.alts[n] ?? ""}
                    loading="lazy"
                    width={1200}
                    height={1600}
                    className="aspect-[3/4] w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a href="#top" className="btn-brass">{p.cta}</a>
        </div>
      </div>
    </section>
  );
}

function RemodelDivider() {
  const { t } = useI18n();
  return (
    <section id="remodeling" className="pt-20 lg:pt-28 border-t border-border">
      <div className="container-lux text-center">
        <span className="eyebrow">{t.remodel.eyebrow}</span>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl text-balance">{t.remodel.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t.remodel.lede}</p>
      </div>
    </section>
  );
}

/* ---------------- Selected work (infinite marquee) ---------------- */

function ProjectsCarousel() {
  const { t } = useI18n();
  const projects = [
    { src: p14.url, title: "Warm Marble Retreat" },
    { src: p23.url, title: "Freestanding Tub Suite" },
    { src: p26.url, title: "Calacatta Wet Room" },
    { src: p33.url, title: "Double Vanity Master" },
    { src: p49.url, title: "Detail: Stone & Fixtures" },
  ];
  const loop = [...projects, ...projects];
  return (
    <section className="py-24 lg:py-32 bg-secondary/40 border-y border-border overflow-hidden">
      <div className="container-lux max-w-3xl">
        <span className="eyebrow">{t.verified.eyebrow}</span>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
          {t.verified.h2}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">{t.verified.lede}</p>
      </div>

      <div
        className="mt-14 relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex gap-6 w-max"
          style={{ animation: "marquee 48s linear infinite" }}
        >
          {loop.map((p, i) => (
            <figure
              key={i}
              className="relative w-[320px] sm:w-[420px] shrink-0 rounded-2xl overflow-hidden bg-card shadow-sm"
            >
              <img
                src={p.src}
                alt={`${p.title} — Impretto Home bathroom remodeling project`}
                loading="lazy"
                className="h-[380px] w-full object-cover"
              />
              <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-ink/75 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-cream">
                {t.verified.badge}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground bg-gradient-to-t from-ink/85 via-ink/30 to-transparent">
                <div className="font-display text-lg leading-tight">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function TranslatedMobileCtaBar() {
  const { t } = useI18n();
  return <MobileCtaBar ctaLabel={t.nav.getFreeEstimate} />;
}

/* ---------------- Header ---------------- */

function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV = [
    { href: "#painting", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#standards", label: t.nav.standards },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-card border-b border-border"
      }`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div className="container-lux flex items-center justify-between gap-4 py-2">
        <a href="#top" className="flex items-center gap-2 group" aria-label={t.nav.homeAria}>
          <BrandLogo />
        </a>

        <nav className="hidden xl:flex items-center gap-5" aria-label={t.nav.primary}>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-8"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <LangToggle />
          <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline-ink text-sm">
            <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
          </a>
          <a href="#contact" className="btn-brass text-sm">
            {t.nav.freeEstimate}
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            className="p-2 -mr-2 text-foreground"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-card">
          <nav className="container-lux flex flex-col py-4" aria-label={t.nav.mobile}>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/90 border-b border-border/60"
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline-ink flex-1 text-sm">
                <Phone className="h-4 w-4" /> {t.nav.call}
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-brass flex-1 text-sm">
                {t.nav.freeEstimate}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="painting-hero relative isolate overflow-hidden border-b border-border">
      <img src={heroPainting} alt={t.painting.residentialAlts[2]} width={768} height={768} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="painting-hero-wash absolute inset-0 -z-10" aria-hidden />
      <div className="container-lux grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-12">
        <div className="min-w-0 animate-fade-up">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl leading-[1.1] text-balance sm:text-5xl">{t.hero.h1a}<span className="mt-3 block text-2xl text-accent sm:text-3xl">{t.hero.h1b}</span></h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t.hero.lede}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {t.hero.badges.map((label) => <li key={label} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />{label}</li>)}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <img src={heroPainting} alt={t.painting.residentialAlts[2]} width={768} height={768} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <img src="/images/paint-8.jpeg" alt={t.hero.heroAlt} width={1200} height={1600} className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </div>
        <div className="min-w-0 self-start"><QuoteForm /></div>
      </div>
    </section>
  );
}

type QuoteErrors = Partial<Record<"name" | "phone" | "zip" | "scope" | "timeline", string>>;

function QuoteForm() {
  const { t, lang } = useI18n();
  const [state, setState] = useState<{ submitted: boolean; errors: QuoteErrors }>({
    submitted: false,
    errors: {},
  });
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const zip = String(fd.get("zip") ?? "").trim();
    const scope = String(fd.get("scope") ?? "").trim();
    const timeline = String(fd.get("timeline") ?? "").trim();
    const website = String(fd.get("website") ?? "");

    const errors: QuoteErrors = {};
    if (name.length < 2) errors.name = t.quote.errName;
    if (!/^[+()\d\s\-.]{10,}$/.test(phone)) errors.phone = t.quote.errPhone;
    if (!/^\d{5}$/.test(zip)) errors.zip = t.quote.errZip;
    if (!scope) errors.scope = t.quote.errScope;
    if (!timeline) errors.timeline = t.quote.errTimeline;

    if (Object.keys(errors).length) {
      setState({ submitted: false, errors });
      return;
    }
    setSending(true);
    setSendError(false);
    try {
      const res = await sendEstimate({ data: { name, phone, zip, scope, timeline, website } });
      if (res.ok) setState({ submitted: true, errors: {} });
      else {
        console.warn("[estimate] send failed:", res.reason);
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      id="contact"
      onSubmit={onSubmit}
      noValidate
      className="relative lg:absolute lg:-bottom-10 lg:-left-10 lg:right-6 mt-6 lg:mt-0 bg-card text-card-foreground rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-elegant)] border border-border"
      aria-label={t.quote.ariaLabel}
    >
      {/* Honeypot: off-screen field only bots reach. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden />
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {t.quote.eyebrow}
        </p>
      </div>
      <h2 className="font-display text-2xl mt-2">{t.quote.title}</h2>

      {state.submitted ? (
        <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-5 text-sm">
          <p className="font-medium text-foreground">{t.quote.thanks}</p>
          <p className="mt-1 text-muted-foreground">{t.quote.thanksBody}</p>
        </div>
      ) : (
        <div className="mt-5 grid gap-4">
          <Field
            id="name"
            name="name"
            label={t.quote.name}
            autoComplete="name"
            error={state.errors.name}
          />
          <div className="grid grid-cols-[1.4fr_1fr] gap-4">
            <Field
              id="phone"
              name="phone"
              type="tel"
              label={t.quote.phone}
              autoComplete="tel"
              error={state.errors.phone}
            />
            <Field
              id="zip"
              name="zip"
              label={t.quote.zip}
              inputMode="numeric"
              maxLength={5}
              autoComplete="postal-code"
              error={state.errors.zip}
            />
          </div>
          <SelectField
            id="scope"
            name="scope"
            label={t.quote.scope}
            placeholder={t.quote.select}
            options={t.quote.scopeOptions}
            error={state.errors.scope}
          />
          <SelectField
            id="timeline"
            name="timeline"
            label={t.quote.timeline}
            placeholder={t.quote.select}
            options={t.quote.timelineOptions}
            error={state.errors.timeline}
          />
          {sendError && (
            <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive">
              {lang === "es"
                ? "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp al +1 (813) 415-6599."
                : "We couldn't send your request. Please try again or message us on WhatsApp at +1 (813) 415-6599."}
            </p>
          )}
          <button type="submit" disabled={sending} className="btn-brass w-full mt-1 disabled:opacity-60">
            {sending ? (lang === "es" ? "Enviando…" : "Sending…") : t.quote.submit}
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            {t.quote.privacy}
          </p>
        </div>
      )}
    </form>
  );
}

const fieldClass = (error?: string) =>
  `w-full rounded-md border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 ${
    error ? "border-destructive" : "border-input"
  }`;

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={fieldClass(error)}
        {...rest}
      />
      {error && (
        <p id={`${id}-err`} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  placeholder,
  options,
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-muted-foreground mb-1.5">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={fieldClass(error)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-err`} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------------- Service areas strip ---------------- */

function TrustStrip() {
  const { t } = useI18n();
  return (
    <section aria-label={t.trust.aria} className="border-y border-border bg-secondary/60">
      <div className="container-lux py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {t.trust.items.map((i) => (
          <span key={i} className="whitespace-nowrap">
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */

function WhyUs() {
  const { t } = useI18n();
  const icons = [ShieldCheck, ClipboardList, Ruler];
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.whyUs.eyebrow}</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            {t.whyUs.h2a} <em className="not-italic text-accent">{t.whyUs.h2b}</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.whyUs.lede}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.whyUs.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <article
                key={it.title}
                className="group relative rounded-2xl bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.25} aria-hidden />
                <h3 className="mt-8 font-display text-2xl">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.body}</p>
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Standards ---------------- */

function Standards() {
  const { t } = useI18n();
  return (
    <section id="standards" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.standards.eyebrow}</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            {t.standards.h2}
          </h2>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.standards.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-card p-6 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
              <span className="font-display text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50 border-y border-border">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl text-balance leading-[1.1]">
              {t.services.h2}
            </h2>
          </div>

        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {t.services.items.map((s, i) => {
            const featured = false;
            return (
              <article
                key={s.title}
                className={`group relative rounded-2xl p-10 overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] ${
                  featured
                    ? "sm:col-span-2 bg-primary text-primary-foreground"
                    : "bg-card"
                }`}
              >
                <span
                  className={`absolute top-8 right-8 font-display text-sm tracking-tight ${
                    featured ? "text-accent" : "text-accent"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {featured && (
                  <span className="inline-flex items-center rounded-full border border-accent/50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">
                    {t.services.featured}
                  </span>
                )}
                <h3
                  className={`font-display text-2xl md:text-3xl max-w-sm ${featured ? "mt-5" : ""}`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-4 leading-relaxed max-w-md ${
                    featured ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {s.body}
                </p>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */

function Portfolio() {
  const { t } = useI18n();
  const gallery = [
    {
      src: project1,
      alt: "Master bathroom renovation with marble walk-in shower and rainfall showerhead",
    },
    {
      src: project2,
      alt: "Custom vanity with premium materials and precision tile installation",
    },
    {
      src: project3,
      alt: "Design detail: natural stone surface with modern fixtures",
    },
  ];
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.portfolio.eyebrow}</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            {t.portfolio.h2}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.portfolio.lede}</p>
        </div>

        <BeforeAfter />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {gallery.map((p, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl">
              <img
                src={p.src}
                alt={p.alt}
                width={1200}
                height={1200}
                loading="lazy"
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm text-primary-foreground bg-gradient-to-t from-ink/80 via-ink/30 to-transparent">
                {t.portfolio.captions[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const { t } = useI18n();
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const activePointer = useRef<number | null>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    activePointer.current = e.pointerId;
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    move(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || activePointer.current !== e.pointerId) return;
    move(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    activePointer.current = null;
    try {
      (e.currentTarget as Element).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <div
      ref={ref}
      className="mt-14 relative aspect-[16/10] w-full overflow-hidden rounded-2xl select-none shadow-[var(--shadow-elegant)] touch-pan-y"
      aria-label={t.portfolio.sliderAria}
    >
      <img
        src={afterImg}
        alt="After: bright marble bathroom with modern fixtures"
        width={1400}
        height={1000}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeImg}
          alt="Before: dated bathroom prior to remodeling"
          width={1400}
          height={1000}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / Math.max(pos, 0.0001)) * 100}%`, maxWidth: "none" }}
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-[0.22em] bg-ink/70 text-cream rounded">
          {t.portfolio.before}
        </span>
      </div>
      <span className="absolute top-4 right-4 px-3 py-1 text-xs uppercase tracking-[0.22em] bg-cream/80 text-ink rounded">
        {t.portfolio.after}
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label={t.portfolio.handleAria}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 flex items-center justify-center cursor-ew-resize touch-none focus:outline-none"
        style={{
          left: `calc(${pos}% - 22px)`,
          width: 44,
        }}
      >
        <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-cream" />
        <div className="pointer-events-none grid h-11 w-11 place-items-center rounded-full bg-cream text-ink shadow-lg ring-2 ring-ink/5">
          <span className="text-lg" aria-hidden>⇆</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const { t } = useI18n();
  const icons = [Ruler, Sparkles, ClipboardList, Hammer, BadgeCheck];
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
            {t.process.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            {t.process.h2a} <em className="not-italic text-on-dark-accent">{t.process.h2b}</em>
          </h2>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl text-on-dark-accent leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 text-primary-foreground/70" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-primary-foreground/70 leading-relaxed max-w-sm">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function RemodelNote() {
  const { t } = useI18n();
  return <section className="border-y border-border bg-secondary py-8"><div className="container-lux"><p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{t.remodel.licensing}</p></div></section>;
}

/* ---------------- Footer ---------------- */

function Footer() {
  const { t } = useI18n();
  const NAV = [
    { href: "#painting", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#standards", label: t.nav.standards },
    { href: "#contact", label: t.nav.contact },
  ];
  const areas = [
    "Wesley Chapel",
    "Tampa",
    "New Tampa",
    "Lutz",
    "Land O' Lakes",
    "Odessa",
    "Zephyrhills",
    "Trinity",
    "Carrollwood",
    "Pasco County",
    "Hillsborough County",
    "Tampa Bay",
  ];
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container-lux grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <a href="#top" aria-label={t.nav.homeAria} className="inline-flex rounded-lg bg-card px-5 py-3"><BrandLogo /></a>
          <p className="mt-5 text-primary-foreground/70 max-w-sm leading-relaxed">
            {t.footer.tagline}
          </p>
          <div className="mt-6 space-y-1.5 text-sm text-primary-foreground/80">
            <p>
              <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-on-dark-accent transition-colors">
                {PHONE_DISPLAY}
              </a>{" "}
              ·{" "}
              <a
                href="mailto:Impretto.llc@gmail.com"
                className="hover:text-on-dark-accent transition-colors"
              >
                Impretto.llc@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-on-dark-accent">{t.footer.navigate}</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-on-dark-accent transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-on-dark-accent">{t.footer.areas}</h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-primary-foreground/80">
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-lux mt-16 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Impretto Home. {t.footer.rights}</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-on-dark-accent transition-colors">
            {t.footer.privacy}
          </Link>
          <Link to="/terms" className="hover:text-on-dark-accent transition-colors">
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
