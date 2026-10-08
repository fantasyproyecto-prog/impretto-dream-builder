import { createFileRoute } from "@tanstack/react-router";
import { sendEstimate } from "@/lib/estimate.functions";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  BadgeCheck,
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
          "Bathroom Remodeling Wesley Chapel & Tampa | Impretto Home",
      },
      {
        name: "description",
        content:
          "Premium bathroom remodeling in Wesley Chapel, Tampa, New Tampa & Lutz. Tub-to-shower conversions, walk-in showers, and full remodels managed start to finish.",
      },
      {
        property: "og:title",
        content: "Bathroom Remodeling Wesley Chapel & Tampa | Impretto Home",
      },
      {
        property: "og:description",
        content:
          "Thoughtful design, quality craftsmanship, and a stress-free remodeling experience across Tampa Bay, Florida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Bathroom Remodeling Wesley Chapel, Bathroom Remodeling Tampa, Bathroom Remodeling New Tampa, Bathroom Remodeling Lutz, Tub-to-Shower Conversion Wesley Chapel, Tampa Bay Bathroom Remodeling",
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
            "Premium bathroom remodeling serving Wesley Chapel & Tampa Bay, Florida.",
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
          <TrustStrip />
          <WhyUs />
          <Services />
          <Portfolio />
          <ProjectsCarousel />
          <CinematicScrub />
          <Process />
          <Standards />
          <FinalCTA />
        </main>
        <Footer />
        <TranslatedMobileCtaBar />
      </div>
    </I18nProvider>
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
    { href: "#services", label: t.nav.services },
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
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div className="container-lux flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="flex items-center gap-2 group" aria-label={t.nav.homeAria}>
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-lg">
            i
          </span>
          <span className="font-display text-xl tracking-tight">
            Impretto <span className="text-accent">Home</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label={t.nav.primary}>
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

        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline-ink text-sm">
            <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
          </a>
          <a href="#contact" className="btn-brass text-sm">
            {t.nav.freeEstimate}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
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
        <div className="md:hidden border-t border-border bg-background">
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
  const badgeIcons = [Ruler, ClipboardList, ShieldCheck];
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-lux grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="animate-fade-up">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            {t.hero.h1a}{" "}
            <em className="not-italic text-accent font-semibold">{t.hero.h1b}</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t.hero.lede}
          </p>

          <ul className="mt-8 grid sm:grid-cols-3 gap-4 max-w-xl">
            {t.hero.badges.map((label, i) => {
              const Icon = badgeIcons[i];
              return (
                <li key={label} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={heroBathroom}
              alt={t.hero.heroAlt}
              width={1600}
              height={1200}
              className="h-[380px] sm:h-[560px] w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <QuoteForm />
        </div>
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
      const res = await sendEstimate({ data: { name, phone, zip, scope, timeline } });
      if (res.ok) setState({ submitted: true, errors: {} });
      else setSendError(true);
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
          <a href="#contact" className="btn-outline-ink self-start md:self-auto">
            {t.services.discuss}
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {t.services.items.map((s, i) => {
            const featured = i === 0;
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
                <div className="mt-8 flex items-center gap-2 text-sm text-accent">
                  <span>{t.services.explore}</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </div>
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
            {t.process.h2a} <em className="not-italic text-accent">{t.process.h2b}</em>
          </h2>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl text-accent leading-none">
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

function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-28 bg-secondary/60 border-y border-border">
      <div className="container-lux text-center max-w-3xl">
        <span className="eyebrow justify-center">{t.finalCta.eyebrow}</span>
        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
          {t.finalCta.h2a} <em className="not-italic text-accent">{t.finalCta.h2b}</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">{t.finalCta.lede}</p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="btn-brass">
            {t.finalCta.claim}
          </a>
          <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline-ink">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const { t } = useI18n();
  const NAV = [
    { href: "#services", label: t.nav.services },
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
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-accent text-primary-foreground font-display text-lg">
              i
            </span>
            <span className="font-display text-xl">Impretto Home</span>
          </div>
          <p className="mt-5 text-primary-foreground/70 max-w-sm leading-relaxed">
            {t.footer.tagline}
          </p>
          <div className="mt-6 space-y-1.5 text-sm text-primary-foreground/80">
            <p>
              <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {PHONE_DISPLAY}
              </a>{" "}
              ·{" "}
              <a
                href="mailto:hello@imprettohome.com"
                className="hover:text-accent transition-colors"
              >
                hello@imprettohome.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">{t.footer.navigate}</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-accent transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">{t.footer.areas}</h3>
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
          <a href="#" className="hover:text-accent transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            {t.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
