import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Hammer,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import heroBathroom from "@/assets/hero-bathroom.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { CinematicScrub } from "@/components/cinematic-scrub";
import { SmoothScroll } from "@/components/smooth-scroll";
import { MobileCtaBar } from "@/components/mobile-cta-bar";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "keywords",
        content:
          "luxury bathroom remodeling, master bathroom renovation, custom shower conversion, bathroom contractor, accessible bathroom upgrades",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Impretto Home",
          image: "/impretto-og.jpg",
          telephone: "+1-555-014-2231",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "128 Cedar Grove Ave",
            addressLocality: "Westfield",
            addressRegion: "NJ",
            postalCode: "07090",
            addressCountry: "US",
          },
          areaServed: [
            "Westfield",
            "Summit",
            "Chatham",
            "Short Hills",
            "Morristown",
            "Union County",
            "Essex County",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "184",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const PHONE_DISPLAY = "(555) 014-2231";
const PHONE_HREF = "tel:+15550142231";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhyUs />
        <Services />
        <Portfolio />
        <CinematicScrub />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    >
      <div className="container-lux flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Impretto Home home">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-lg">
            i
          </span>
          <span className="font-display text-xl tracking-tight">
            Impretto <span className="text-accent">Home</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
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
          <a href={PHONE_HREF} className="btn-outline-ink text-sm">
            <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
          </a>
          <a href="#contact" className="btn-brass text-sm">
            Free Estimate
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-lux flex flex-col py-4" aria-label="Mobile">
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
              <a href={PHONE_HREF} className="btn-outline-ink flex-1 text-sm">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-brass flex-1 text-sm">
                Free Estimate
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
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-lux grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="animate-fade-up">
          <span className="eyebrow">Luxury Bathroom Remodeling</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Transform Your Space:{" "}
            <em className="not-italic text-accent font-normal">Luxury bathroom remodeling</em>{" "}
            in the greater metro area.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We bring elegance, functionality, and stress-free renovations to your home.
            Licensed, insured, and built to last — with transparent pricing from day one.
          </p>

          <ul className="mt-8 grid sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: Award, label: "10+ Years Experience" },
              { icon: BadgeCheck, label: "100% Satisfaction" },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm text-foreground/80">
                <b.icon className="h-5 w-5 text-accent" aria-hidden />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={heroBathroom}
              alt="Luxury master bathroom with freestanding matte black tub, warm marble tile, and brushed brass fixtures by Impretto Home"
              width={1600}
              height={1200}
              className="h-[380px] sm:h-[460px] w-full object-cover"
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

function QuoteForm() {
  const [state, setState] = useState<{
    submitted: boolean;
    errors: Partial<Record<"name" | "phone" | "zip", string>>;
  }>({ submitted: false, errors: {} });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const zip = String(fd.get("zip") ?? "").trim();

    const errors: typeof state.errors = {};
    if (name.length < 2) errors.name = "Please enter your full name.";
    if (!/^[+()\d\s\-.]{10,}$/.test(phone)) errors.phone = "Enter a valid phone number.";
    if (!/^\d{5}$/.test(zip)) errors.zip = "Enter a 5-digit ZIP code.";

    if (Object.keys(errors).length) {
      setState({ submitted: false, errors });
      return;
    }
    setState({ submitted: true, errors: {} });
  }

  return (
    <form
      id="contact"
      onSubmit={onSubmit}
      noValidate
      className="relative lg:absolute lg:-bottom-14 lg:-left-10 lg:right-6 mt-6 lg:mt-0 bg-card text-card-foreground rounded-2xl p-6 sm:p-7 shadow-[var(--shadow-elegant)] border border-border"
      aria-label="Free estimate request"
    >
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-accent" aria-hidden />
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          3-Step Free Estimate
        </p>
      </div>
      <h2 className="font-display text-2xl mt-2">Get your complimentary quote</h2>

      {state.submitted ? (
        <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-5 text-sm">
          <p className="font-medium text-foreground">Thanks — request received.</p>
          <p className="mt-1 text-muted-foreground">
            A design consultant will reach out within one business day.
          </p>
        </div>
      ) : (
        <div className="mt-5 grid gap-4">
          <Field
            id="name"
            name="name"
            label="Full name"
            autoComplete="name"
            error={state.errors.name}
          />
          <div className="grid grid-cols-[1.4fr_1fr] gap-4">
            <Field
              id="phone"
              name="phone"
              type="tel"
              label="Phone number"
              autoComplete="tel"
              error={state.errors.phone}
            />
            <Field
              id="zip"
              name="zip"
              label="ZIP code"
              inputMode="numeric"
              maxLength={5}
              autoComplete="postal-code"
              error={state.errors.zip}
            />
          </div>
          <button type="submit" className="btn-brass w-full mt-1">
            Get My Free Quote
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            No obligation. We respect your privacy — your info is never sold.
          </p>
        </div>
      )}
    </form>
  );
}

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
        className={`w-full rounded-md border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 ${
          error ? "border-destructive" : "border-input"
        }`}
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

/* ---------------- Trust strip ---------------- */

function TrustStrip() {
  const items = [
    "NKBA Member",
    "EPA Lead-Safe Certified",
    "Houzz Best of Service",
    "BBB A+ Accredited",
    "Fully Licensed & Insured",
  ];
  return (
    <section aria-label="Certifications" className="border-y border-border bg-secondary/60">
      <div className="container-lux py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((i) => (
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
  const items = [
    {
      icon: Ruler,
      title: "Custom Design",
      body: "Every layout is drafted around how you actually live — from vanity heights to shower niches, no template floor plans.",
    },
    {
      icon: Sparkles,
      title: "Premium Materials",
      body: "Natural stone, solid hardwood, and specified-grade fixtures from vendors we've trusted for a decade.",
    },
    {
      icon: CheckCircle2,
      title: "On-Time Completion",
      body: "Fixed schedules, daily site cleanup, and one dedicated project manager from tear-out to final walkthrough.",
    },
  ];
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Choose Impretto</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            Detail-obsessed craft. <em className="not-italic text-accent">Zero surprises.</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Our clients tell us the difference is what happens between the demo and the reveal:
            transparent pricing, clean job sites, and finishes that hold up for decades.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative rounded-2xl bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <it.icon className="h-6 w-6 text-accent" strokeWidth={1.25} aria-hidden />
              <h3 className="mt-8 font-display text-2xl">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.body}</p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const items = [
    {
      title: "Master Bathroom Renovations",
      body: "Full-scope master suite transformations with wet rooms, freestanding tubs, and heated floors.",
    },
    {
      title: "Custom Shower Conversions",
      body: "Tub-to-shower conversions, curbless walk-ins, and steam showers with frameless glass enclosures.",
    },
    {
      title: "Modern Vanity & Tile Installations",
      body: "Custom cabinetry, natural stone counters, and precision tile work laid by in-house craftsmen.",
    },
    {
      title: "Accessible Bathroom Upgrades",
      body: "ADA-friendly layouts, comfort-height fixtures, and elegant grab bars that never look clinical.",
    },
  ];
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50 border-y border-border">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Core Services</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl text-balance leading-[1.1]">
              Bathroom remodeling, engineered for how you live.
            </h2>
          </div>
          <a href="#contact" className="btn-outline-ink self-start md:self-auto">
            Discuss your project
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-2xl bg-card p-10 overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            >
              <span className="absolute top-8 right-8 font-display text-sm tracking-tight text-accent">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl max-w-sm">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">{s.body}</p>
              <div className="mt-8 flex items-center gap-2 text-sm text-accent">
                <span>Explore this service</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio (before/after + gallery) ---------------- */

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow">Visual Proof</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            Dramatic transformations, calm process.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Drag the divider to reveal a recent renovation in Westfield, NJ — a dated 1990s
            hall bath rebuilt as a warm, minimalist retreat.
          </p>
        </div>

        <BeforeAfter />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            {
              src: project1,
              caption: "Marble walk-in shower · Summit, NJ",
              alt: "Custom marble walk-in shower with brushed brass rainfall showerhead",
            },
            {
              src: project2,
              caption: "Double vanity retreat · Chatham, NJ",
              alt: "White oak double vanity with round backlit mirrors and matte black faucets",
            },
            {
              src: project3,
              caption: "Moody powder room · Short Hills, NJ",
              alt: "Charcoal powder room with terrazzo floor, brass sconces, and stone vessel sink",
            },
          ].map((p) => (
            <figure key={p.caption} className="group relative overflow-hidden rounded-2xl">
              <img
                src={p.src}
                alt={p.alt}
                width={1200}
                height={1200}
                loading="lazy"
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm text-primary-foreground bg-gradient-to-t from-ink/80 via-ink/30 to-transparent">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      move(x);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="mt-14 relative aspect-[16/10] w-full overflow-hidden rounded-2xl select-none shadow-[var(--shadow-elegant)]"
      aria-label="Before and after remodel comparison. Use slider to reveal."
    >
      <img
        src={afterImg}
        alt="After: bright marble bathroom with freestanding tub and brass fixtures"
        width={1400}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeImg}
          alt="Before: dated 1990s bathroom with beige tile and old vanity"
          width={1400}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-[0.22em] bg-ink/70 text-cream rounded">
          Before
        </span>
      </div>
      <span className="absolute top-4 right-4 px-3 py-1 text-xs uppercase tracking-[0.22em] bg-cream/80 text-ink rounded">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before/after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      />

      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="h-full w-0.5 bg-cream" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-11 w-11 place-items-center rounded-full bg-cream text-ink shadow-lg">
          <span className="text-lg" aria-hidden>
            ⇆
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Free In-Home Consultation & Design",
      body: "We measure your space, listen to how you use it, and sketch a design direction on the spot.",
    },
    {
      icon: Ruler,
      title: "Transparent Proposal & Material Selection",
      body: "A line-item proposal — no markups hidden in labor — plus a guided visit to our material library.",
    },
    {
      icon: Hammer,
      title: "Precision Craftsmanship & Clean Delivery",
      body: "Daily site protection, weekly walk-throughs, and a punch-list resolved before final invoice.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
            Our Proven 3-Step Process
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            From first sketch to final reveal — <em className="not-italic text-accent">calm and considered.</em>
          </h2>
        </div>

        <ol className="mt-16 grid md:grid-cols-3 gap-10 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl text-accent leading-none">
                  0{i + 1}
                </span>
                <s.icon className="h-6 w-6 text-primary-foreground/70" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed max-w-sm">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const reviews = [
    {
      name: "Sarah",
      city: "Westfield, NJ",
      quote:
        "The Impretto team was in constant communication — from the first design meeting to the final polish. Our master bath finally feels like the hotel we always wanted at home.",
    },
    {
      name: "Michael",
      city: "Summit, NJ",
      quote:
        "Every day the site was spotless. Every invoice matched the proposal. The tile work in our shower is honestly better than what I saw in a design magazine.",
    },
    {
      name: "Priya",
      city: "Chatham, NJ",
      quote:
        "We converted a cramped hall bath into a beautiful accessible space for my mother. It's elegant, safe, and — most importantly — it feels like her.",
    },
  ];
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="max-w-2xl">
          <span className="eyebrow">Homeowner Reviews</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            Rated 4.9 by neighbors across New Jersey.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl bg-card p-10 flex flex-col shadow-sm"
            >
              <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-foreground/90 leading-relaxed font-display text-lg">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border text-sm">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden /> {r.city}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/60 border-y border-border">
      <div className="container-lux text-center max-w-3xl">
        <span className="eyebrow justify-center">Start Your Project</span>
        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
          Ready to build the bathroom of{" "}
          <em className="not-italic text-accent">your dreams?</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Schedule your complimentary design consultation today. Most estimates
          are delivered within 48 hours.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="btn-brass">
            Claim Your Free Estimate
          </a>
          <a href={PHONE_HREF} className="btn-outline-ink">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const areas = [
    "Westfield",
    "Summit",
    "Chatham",
    "Short Hills",
    "Millburn",
    "Morristown",
    "Madison",
    "Cranford",
    "Union County",
    "Essex County",
    "Morris County",
    "Somerset County",
  ];
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container-lux grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-accent text-ink font-display text-lg">
              i
            </span>
            <span className="font-display text-xl">Impretto Home</span>
          </div>
          <p className="mt-5 text-primary-foreground/70 max-w-sm leading-relaxed">
            A New Jersey design-build studio specializing in luxury bathroom
            remodels. Family-run since 2013.
          </p>
          <div className="mt-6 space-y-1.5 text-sm text-primary-foreground/80">
            <p>Impretto Home LLC</p>
            <p>128 Cedar Grove Ave, Westfield, NJ 07090</p>
            <p>
              <a href={PHONE_HREF} className="hover:text-accent transition-colors">
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
          <h3 className="font-display text-lg text-accent">Navigate</h3>
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
          <h3 className="font-display text-lg text-accent">Areas We Serve</h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-primary-foreground/80">
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-lux mt-16 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Impretto Home LLC. All rights reserved. NJ HIC #13VH12345600.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
