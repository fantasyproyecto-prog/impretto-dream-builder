import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Globe } from "lucide-react";

const PHONE_HREF = "https://wa.me/18134156599";
const PHONE_DISPLAY = "(813) 415-6599";

type Block =
  | { kind: "p"; text: ReactNode }
  | { kind: "ul"; items: ReactNode[] };

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const SECTIONS: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        kind: "p",
        text: "Welcome to Impretto Home Solution, operated by Impretto LLC (“Impretto,” “we,” “our,” or “us”). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, https://www.imprettohome.com, and use our services.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    blocks: [
      {
        kind: "p",
        text: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. The personal information that we collect depends on the context of your interactions with us and the website, and may include:",
      },
      {
        kind: "ul",
        items: [
          <>
            <strong className="font-semibold text-foreground">
              Contact Information:
            </strong>{" "}
            Name, phone number, email address, and ZIP code.
          </>,
          <>
            <strong className="font-semibold text-foreground">
              Project Details:
            </strong>{" "}
            Information regarding your remodeling scope, timeline, and other
            details provided through our contact forms.
          </>,
          <>
            <strong className="font-semibold text-foreground">
              Automatically Collected Information:
            </strong>{" "}
            We automatically collect certain information when you visit, use, or
            navigate the website. This includes device and usage information,
            such as your IP address, browser and device characteristics,
            operating system, referring URLs, and information about how and when
            you use our website. We use tools such as the Meta Pixel to track
            page views and website interactions.
          </>,
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    blocks: [
      {
        kind: "p",
        text: "We use the personal information collected via our website for a variety of business purposes, including:",
      },
      {
        kind: "ul",
        items: [
          "To respond to your inquiries and provide preliminary estimates.",
          "To coordinate project communication and schedule consultations.",
          "To improve our website, services, and customer experience.",
          "To deliver targeted advertising and marketing campaigns.",
        ],
      },
    ],
  },
  {
    id: "how-we-share",
    title: "How We Share Your Information",
    blocks: [
      {
        kind: "p",
        text: "We do not sell, rent, or trade your personal information to third parties. We may share your information in the following situations:",
      },
      {
        kind: "ul",
        items: [
          <>
            <strong className="font-semibold text-foreground">
              Service Providers:
            </strong>{" "}
            We may share your data with third-party vendors, service providers,
            contractors, or agents who perform services for us or on our behalf
            and require access to such information to do that work (e.g.,
            website hosting, email delivery services).
          </>,
          <>
            <strong className="font-semibold text-foreground">
              Affiliated Contractors:
            </strong>{" "}
            As stated in our Terms and Conditions, we may share your project
            details with appropriately licensed affiliated contractors to
            evaluate and fulfill your remodeling requests.
          </>,
          <>
            <strong className="font-semibold text-foreground">
              Legal Obligations:
            </strong>{" "}
            We may disclose your information where we are legally required to do
            so in order to comply with applicable law, governmental requests, a
            judicial proceeding, court order, or legal process.
          </>,
        ],
      },
    ],
  },
  {
    id: "cookies-and-tracking",
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        kind: "p",
        text: "We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specifically, we use the Meta Pixel to understand user activity and optimize our marketing. You can manage your cookie preferences through your browser settings or opt-out of Facebook targeted ads via your Facebook account settings.",
      },
      {
        kind: "p",
        text: (
          <>
            <strong className="font-semibold text-foreground">
              Meta Pixel.
            </strong>{" "}
            The Meta Pixel is a small piece of code that loads on our pages and
            reports activity to Meta Platforms, Inc. It assigns a browser-based
            identifier, records the pages you view and the actions you take on
            this website, and sends that information to Meta so we can measure
            advertising, build audiences, and deliver targeted ads on Meta
            products. Meta’s own privacy policy, available at{" "}
            <a
              href="https://www.facebook.com/privacy/policy"
              className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
            >
              https://www.facebook.com/privacy/policy
            </a>
            , explains how Meta handles the data it receives.
          </>
        ),
      },
      {
        kind: "p",
        text: (
          <>
            <strong className="font-semibold text-foreground">
              Website analytics provided by our hosting platform.
            </strong>{" "}
            Our website is hosted by Lovable, which adds a small analytics
            script to every page. This analytics uses no cookies, stores nothing
            on your device, does not keep your IP address, and does not identify
            you. It records the pages you visit, where you came from, your
            country, browser, operating system and device type, how long you
            stay, how fast pages load, any errors, and which buttons and links
            you click. Detailed data is kept for 90 days; daily summaries —
            visit and page-view counts, and for each visit the pages seen and
            where the visitor came from — are kept for a year. Lovable collects
            this data for us.{" "}
            <a
              href="https://lovable.dev/privacy"
              className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
            >
              Lovable’s privacy policy
            </a>{" "}
            explains how it handles it.
          </>
        ),
      },
      {
        kind: "p",
        text: (
          <>
            <strong className="font-semibold text-foreground">
              Google Fonts.
            </strong>{" "}
            Our pages load web fonts from Google Fonts (fonts.googleapis.com and
            fonts.gstatic.com). To deliver those fonts, Google’s servers
            receive your IP address and basic browser information.
          </>
        ),
      },
      {
        kind: "p",
        text: "This website does not currently present a cookie consent banner, so the information described in this section is collected for every visitor.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    blocks: [
      {
        kind: "p",
        text: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. Your contact form submissions are processed securely and sent directly to our corporate email inbox without being stored in public third-party databases. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.",
      },
    ],
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    blocks: [
      {
        kind: "p",
        text: "Depending on your location, you may have certain rights regarding your personal information. Under Florida law and applicable US federal laws, you have the right to request access to, correct, or delete the personal data we hold about you, or to opt-out of marketing communications. To exercise these rights, please contact us using the information provided below.",
      },
    ],
  },
  {
    id: "changes-to-privacy-policy",
    title: "Changes to this Privacy Policy",
    blocks: [
      {
        kind: "p",
        text: "We may update this privacy notice from time to time. The updated version will be indicated by an updated “Last Updated” date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.",
      },
    ],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title:
          "Privacy Policy | Impretto Home Solution — Impretto LLC",
      },
      {
        name: "description",
        content:
          "Privacy Policy for Impretto Home Solution, operated by Impretto LLC — how we collect, use, and protect your personal information when you request a remodeling estimate in Wesley Chapel, Tampa & Tampa Bay, Florida.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | Impretto Home Solution",
      },
      {
        property: "og:description",
        content:
          "How Impretto Home Solution collects, uses, and safeguards the information you share when you request a remodeling estimate in Tampa Bay, Florida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Privacy Policy | Impretto Home Solution",
      },
      {
        name: "twitter:description",
        content:
          "How Impretto Home Solution collects, uses, and safeguards the information you share when you request a remodeling estimate in Tampa Bay, Florida.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PrivacyHeader />

      <main>
        {/* Page masthead */}
        <section className="relative overflow-hidden border-b border-border bg-brass-soft/40">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              background:
                "radial-gradient(900px 420px at 12% -10%, color-mix(in oklab, var(--brass) 16%, transparent), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="container-lux relative py-16 md:py-24">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight text-foreground max-w-3xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              <span className="block md:inline">Impretto Home Solution</span>
              <span className="mx-2 hidden md:inline text-border">·</span>
              <span className="block md:inline text-foreground/80">
                Operated by Impretto LLC
              </span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                Effective Date:{" "}
                <span className="text-foreground">October 20, 2026</span>
              </span>
              <span className="hidden sm:inline h-4 w-px bg-border" aria-hidden />
              <span>
                Last Updated:{" "}
                <span className="text-foreground">October 20, 2026</span>
              </span>
            </div>
          </div>
        </section>

        <div className="container-lux grid gap-14 py-16 md:py-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          {/* Section index */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Contents
              </h2>
              <nav
                aria-label="Privacy Policy sections"
                className="mt-5 max-h-[62vh] overflow-y-auto pr-2"
              >
                <ol className="space-y-1 border-l border-border text-sm">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group -ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 leading-snug text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                      >
                        <span className="font-display tabular-nums text-xs text-accent/70 group-hover:text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact-information"
                      className="group -ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 leading-snug text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                      <span className="font-display tabular-nums text-xs text-accent/70 group-hover:text-accent">
                        09
                      </span>
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </aside>

          {/* Legal text */}
          <div className="max-w-3xl">
            {SECTIONS.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border/70 py-10 first:pt-0 last:border-b-0"
                aria-labelledby={`${section.id}-title`}
              >
                <h2
                  id={`${section.id}-title`}
                  className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground"
                >
                  <span className="mr-3 font-display text-sm font-medium tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.blocks.map((block, bi) =>
                    block.kind === "p" ? (
                      <p
                        key={bi}
                        className="text-[0.975rem] md:text-base leading-[1.85] text-foreground/80"
                      >
                        {block.text}
                      </p>
                    ) : (
                      <ul
                        key={bi}
                        className="mt-2 space-y-2.5 border-l-2 border-brass-soft pl-5"
                      >
                        {block.items.map((item, ii) => (
                          <li
                            key={ii}
                            className="text-[0.975rem] md:text-base leading-[1.75] text-foreground/80"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}

            <ContactCard />
          </div>
        </div>
      </main>

      <PrivacyFooter />
    </div>
  );
}

function PrivacyHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div className="container-lux flex items-center justify-between gap-4 py-4 md:py-5">
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Impretto Home home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-lg">
            i
          </span>
          <span className="font-display text-xl tracking-tight">
            Impretto <span className="text-accent">Home</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to site
          </Link>
          <a
            href={`${PHONE_HREF}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brass text-sm"
            style={{ padding: "0.7rem 1.15rem" }}
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}

function ContactCard() {
  return (
    <section
      id="contact-information"
      className="scroll-mt-28 mt-12 rounded-2xl bg-card p-7 md:p-9 shadow-elegant"
      aria-labelledby="contact-information-title"
    >
      <h2
        id="contact-information-title"
        className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground"
      >
        <span className="mr-3 font-display text-sm font-medium tabular-nums text-accent">
          09
        </span>
        Contact Us
      </h2>

      <p className="mt-5 text-[0.975rem] md:text-base leading-[1.85] text-foreground/80">
        If you have questions or comments about this policy, you may contact us
        using the information below.
      </p>

      <dl className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Business
          </dt>
          <dd className="mt-1.5 text-foreground">
            Impretto Home Solution
            <span className="block text-sm text-muted-foreground">
              Legal Business Entity: Impretto LLC
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Phone
          </dt>
          <dd className="mt-1.5">
            <a
              href={PHONE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Website
          </dt>
          <dd className="mt-1.5">
            <a
              href="https://www.imprettohome.com"
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
            >
              <Globe className="h-4 w-4 text-accent" aria-hidden />
              www.imprettohome.com
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Email
          </dt>
          <dd className="mt-1.5">
            <a
              href="mailto:Impretto.llc@gmail.com"
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 text-accent" aria-hidden />
              Impretto.llc@gmail.com
            </a>
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Service Area
          </dt>
          <dd className="mt-1.5 inline-flex items-start gap-2 text-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            Wesley Chapel, Tampa, and surrounding Tampa Bay communities.
          </dd>
        </div>
      </dl>
    </section>
  );
}

function PrivacyFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div
        className="container-lux flex flex-col items-center justify-between gap-4 text-sm sm:flex-row"
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <p className="text-primary-foreground/70">
          © {new Date().getFullYear()} Impretto Home. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-primary-foreground/70 transition-colors hover:text-accent">
            Home
          </Link>
          <Link
            to="/terms"
            className="text-primary-foreground/70 transition-colors hover:text-accent"
          >
            Terms
          </Link>
          <a
            href={PHONE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 transition-colors hover:text-accent"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
