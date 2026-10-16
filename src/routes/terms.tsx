import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Globe } from "lucide-react";

const PHONE_HREF = "https://wa.me/18134156599";
const PHONE_DISPLAY = "(813) 415-6599";

type Block =
  | { kind: "p"; text: ReactNode }
  | { kind: "ul"; items: string[] };

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
        text: "Welcome to Impretto Home Solution, operated by Impretto LLC (“Impretto,” “we,” “our,” or “us”).",
      },
      {
        kind: "p",
        text: (
          <>
            These Terms and Conditions govern your access to and use of our
            website,{" "}
            <a
              href="https://www.imprettohome.com"
              className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
            >
              https://www.imprettohome.com
            </a>
            , and establish the general conditions applicable to inquiries about
            our residential remodeling, home improvement, and project
            coordination services.
          </>
        ),
      },
      {
        kind: "p",
        text: "By accessing or using this website, you acknowledge that you have read and understood these Terms and Conditions.",
      },
      {
        kind: "p",
        text: "These Terms apply to website use and general service inquiries. Specific remodeling projects may be subject to separate written agreements defining the scope of work, pricing, payment terms, responsibilities, warranties, and other project-specific conditions.",
      },
    ],
  },
  {
    id: "our-services",
    title: "Our Services",
    blocks: [
      {
        kind: "p",
        text: "Impretto Home Solution provides residential home improvement, remodeling coordination, and project management services in Wesley Chapel, Tampa, and surrounding Tampa Bay communities.",
      },
      { kind: "p", text: "Our services may include:" },
      {
        kind: "ul",
        items: [
          "Bathroom remodeling and improvements.",
          "Kitchen renovations and upgrades.",
          "Interior and exterior painting.",
          "Framing and carpentry.",
          "PVC, tile, and other specified flooring installations.",
          "Custom closets and storage solutions.",
          "Decorative TV wall panels and interior enhancements.",
          "Interior demolition associated with approved projects.",
          "Pergolas and outdoor living improvements.",
          "Television and security camera installation, where applicable.",
        ],
      },
      {
        kind: "p",
        text: "Service availability depends on the project requirements, property conditions, materials, applicable permits, licensing requirements, and the terms of the applicable agreement.",
      },
      {
        kind: "p",
        text: "Descriptions and photographs on this website are provided for general informational purposes and do not guarantee that every service is available for every property or project.",
      },
    ],
  },
  {
    id: "licensed-contractors",
    title: "Project Coordination and Licensed Contractors",
    blocks: [
      {
        kind: "p",
        text: "Impretto LLC provides customer communication, project coordination, scheduling, and related administrative services within the scope permitted by applicable law.",
      },
      {
        kind: "p",
        text: "Impretto LLC does not represent that it independently holds every contractor or professional license required for all construction activities that may be involved in a remodeling project.",
      },
      {
        kind: "p",
        text: "When a project involves construction activities requiring a license that Impretto LLC does not hold, Impretto intends to engage an affiliated company holding the applicable General Contractor license, or other appropriately licensed contractors, as required by applicable law.",
      },
      {
        kind: "p",
        text: "The appropriately licensed contracting company will perform and supervise the construction activities assigned to it and will fulfill the licensing, permitting, inspection, and other legal obligations applicable to its responsibilities.",
      },
      {
        kind: "p",
        text: "Impretto may coordinate communication, scheduling, material selections, and project administration between the customer and participating contractors.",
      },
      {
        kind: "p",
        text: "The parties’ contractual roles, payment arrangements, scope of work, warranties, and responsibilities will be established in the applicable written agreement and must comply with Florida law.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms represents that Impretto LLC holds a contractor’s license it does not possess or that an affiliated company’s license automatically authorizes Impretto LLC to perform regulated contracting activities.",
      },
    ],
  },
  {
    id: "estimates",
    title: "Website Information and Estimates",
    blocks: [
      {
        kind: "p",
        text: "Customers may request an initial consultation or estimate through our website, telephone, email, or other available communication channels.",
      },
      { kind: "p", text: "Unless expressly stated otherwise in writing:" },
      {
        kind: "ul",
        items: [
          "Website descriptions and preliminary estimates are informational and are not binding construction contracts.",
          "Estimates may change following an inspection, measurements, material selections, design development, or discovery of concealed conditions.",
          "A website inquiry does not authorize construction work.",
          "Project pricing, scope, and scheduling become binding only as established in the applicable written agreement.",
        ],
      },
      {
        kind: "p",
        text: "We reserve the right to correct errors, update service descriptions, and modify website content without prior notice.",
      },
    ],
  },
  {
    id: "project-agreements",
    title: "Project Agreements",
    blocks: [
      {
        kind: "p",
        text: "Before construction work begins, the applicable parties must establish the relevant project terms in a written agreement.",
      },
      {
        kind: "p",
        text: "Depending on the project structure, the agreement may identify:",
      },
      {
        kind: "ul",
        items: [
          "The contracting party or parties.",
          "The approved scope of work.",
          "Materials, finishes, and product specifications.",
          "Project pricing and payment schedules.",
          "Estimated start and completion dates.",
          "Responsibilities for permits and inspections.",
          "Change-order procedures.",
          "Workmanship and product warranties.",
          "Cancellation and termination conditions.",
        ],
      },
      {
        kind: "p",
        text: "If these website Terms conflict with a signed project agreement, the project agreement will govern the specific project to the extent permitted by applicable law.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms waives statutory rights or protections that cannot legally be waived.",
      },
    ],
  },
  {
    id: "pricing-payments",
    title: "Pricing and Payments",
    blocks: [
      {
        kind: "p",
        text: "Project prices, deposits, and payment schedules will be established in the applicable written agreement.",
      },
      {
        kind: "p",
        text: "Customers agree to make payments according to the agreed schedule and to pay for approved changes and additional work as provided in that agreement.",
      },
      {
        kind: "p",
        text: "Additional work outside the original scope must be documented and approved in writing before it is performed, except where applicable law permits otherwise.",
      },
      {
        kind: "p",
        text: "Deposits, advance payments, progress payments, refunds, and other charges will be handled in accordance with the applicable agreement and Florida law.",
      },
      {
        kind: "p",
        text: "The responsible contracting party and the recipient of payments will be identified in the applicable project documentation.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to the Project",
    blocks: [
      {
        kind: "p",
        text: "Customers may request changes to the approved design, materials, specifications, or scope of work.",
      },
      {
        kind: "p",
        text: "Material changes must be documented in a written change order approved by the applicable parties.",
      },
      {
        kind: "p",
        text: "A change order may specify additional costs, payment adjustments, revised completion dates, material substitutions, and other consequences of the requested change.",
      },
      {
        kind: "p",
        text: "Changes may affect material availability, contractor scheduling, and the overall duration of the project.",
      },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling and Delays",
    blocks: [
      {
        kind: "p",
        text: "Project schedules are estimates based on the information reasonably available when the agreement is prepared.",
      },
      {
        kind: "p",
        text: "Delays may arise from material shortages, supplier issues, permit processing, inspections, concealed property conditions, customer-requested changes, restricted access, severe weather, or other circumstances beyond reasonable control.",
      },
      {
        kind: "p",
        text: "Impretto will communicate material scheduling changes as reasonably practicable.",
      },
      {
        kind: "p",
        text: "Any adjustments to project deadlines will be handled in accordance with the applicable project agreement and governing law.",
      },
    ],
  },
  {
    id: "customer-responsibilities",
    title: "Customer Responsibilities",
    blocks: [
      { kind: "p", text: "Customers are responsible for:" },
      {
        kind: "ul",
        items: [
          "Providing accurate information about the property and requested work.",
          "Confirming their authority to authorize the project.",
          "Providing reasonable access to the work area.",
          "Disclosing known leaks, property damage, defects, and relevant prior repairs.",
          "Selecting and approving materials within agreed deadlines.",
          "Securing pets, valuables, and personal belongings.",
          "Providing agreed utilities and access arrangements.",
          "Making payments when due under the applicable agreement.",
        ],
      },
      {
        kind: "p",
        text: "Customers should communicate requested changes through the designated project contact and must not request work that conflicts with approved plans, safety requirements, or applicable law.",
      },
    ],
  },
  {
    id: "concealed-conditions",
    title: "Existing and Concealed Conditions",
    blocks: [
      {
        kind: "p",
        text: "Remodeling work may reveal conditions that were not reasonably visible before construction began.",
      },
      {
        kind: "p",
        text: "These may include water damage, mold, rot, structural deficiencies, outdated wiring, plumbing problems, pest damage, or code-related issues.",
      },
      {
        kind: "p",
        text: "Investigation, remediation, or repairs outside the original scope may require additional work, qualified professionals, revised pricing, permits, and schedule adjustments.",
      },
      {
        kind: "p",
        text: "Material discoveries will be communicated to the customer, and additional work will be authorized in accordance with the applicable agreement and law.",
      },
      {
        kind: "p",
        text: "Nothing in this section excludes responsibility for damage or defects for which a party is legally responsible.",
      },
    ],
  },
  {
    id: "permits",
    title: "Permits, Codes, and Inspections",
    blocks: [
      {
        kind: "p",
        text: "Projects must comply with applicable Florida laws, building codes, local ordinances, permit requirements, and licensing regulations.",
      },
      {
        kind: "p",
        text: "The applicable project agreement will identify the parties responsible for obtaining permits, arranging inspections, and coordinating regulated work, subject to applicable law.",
      },
      {
        kind: "p",
        text: "Work requiring a specific license must be performed under the authority of appropriately licensed or otherwise legally qualified professionals.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms authorizes any party to perform work outside its legal authority or applicable license.",
      },
    ],
  },
  {
    id: "materials",
    title: "Materials and Design Representations",
    blocks: [
      {
        kind: "p",
        text: "Photographs, illustrations, renderings, and examples displayed on our website are intended to communicate design ideas and potential results.",
      },
      {
        kind: "p",
        text: "Actual results may vary because of property dimensions, lighting, material characteristics, product availability, and existing conditions.",
      },
      {
        kind: "p",
        text: "Approved materials, brands, colors, finishes, and specifications will be documented in the applicable project agreement or related written approvals.",
      },
      {
        kind: "p",
        text: "Material substitutions will be handled in accordance with the project agreement and applicable approval requirements.",
      },
    ],
  },
  {
    id: "warranties",
    title: "Workmanship and Warranties",
    blocks: [
      {
        kind: "p",
        text: "Any express workmanship warranty provided for a project will be described in the applicable project agreement or warranty documentation.",
      },
      {
        kind: "p",
        text: "Manufacturer warranties are subject to the manufacturer’s terms and conditions.",
      },
      {
        kind: "p",
        text: "Customers should report concerns about completed work promptly so that the issue can be evaluated and addressed under the applicable agreement and law.",
      },
      {
        kind: "p",
        text: "Nothing in these Terms excludes statutory warranties, remedies, or other rights that cannot legally be excluded.",
      },
    ],
  },
  {
    id: "cancellations",
    title: "Cancellations and Termination",
    blocks: [
      {
        kind: "p",
        text: "Cancellation, suspension, and termination of a project are governed by the applicable written agreement and Florida law.",
      },
      {
        kind: "p",
        text: "Certain transactions, including qualifying sales made at a consumer’s residence, may be subject to statutory cancellation rights and notice requirements.",
      },
      {
        kind: "p",
        text: "Where a statutory cancellation right applies, the required notice and cancellation procedures must be provided and honored as required by law.",
      },
      {
        kind: "p",
        text: "For cancellations or terminations not governed by a statutory cancellation right, the parties’ obligations regarding completed work, authorized materials, outstanding payments, and refunds will be determined under the applicable agreement and governing law.",
      },
      {
        kind: "p",
        text: "Customers should submit cancellation notices in writing using the contact information provided in their project documentation.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Website Use and Intellectual Property",
    blocks: [
      {
        kind: "p",
        text: "Website content, including text, photographs, graphics, logos, branding, and design elements, is owned by Impretto LLC or used with appropriate authorization, unless otherwise indicated.",
      },
      {
        kind: "p",
        text: "You may use this website for personal, noncommercial purposes.",
      },
      {
        kind: "p",
        text: "You may not reproduce, distribute, modify, publish, or commercially exploit website content without appropriate permission, except as permitted by law.",
      },
      {
        kind: "p",
        text: "You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or submit fraudulent, unlawful, or malicious content.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Products and Services",
    blocks: [
      {
        kind: "p",
        text: "Projects may involve third-party products, manufacturers, suppliers, and specialized contractors.",
      },
      {
        kind: "p",
        text: "Third-party products and services may be subject to their own terms, warranties, and policies.",
      },
      {
        kind: "p",
        text: "The responsibilities of Impretto LLC and participating contractors will be determined by the applicable agreements and governing law.",
      },
      {
        kind: "p",
        text: "Nothing in this section eliminates any responsibility that Impretto LLC or another party may legally owe to a customer.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      {
        kind: "p",
        text: "To the maximum extent permitted by applicable law, Impretto LLC will not be liable for indirect, incidental, special, or consequential losses arising solely from the use of this website or reliance on general website information.",
      },
      {
        kind: "p",
        text: "This provision does not exclude or limit liability for fraud, willful misconduct, personal injury where exclusion is prohibited, or any other liability that cannot legally be limited under Florida law.",
      },
      {
        kind: "p",
        text: "Nothing in this section limits rights or remedies available to customers under applicable law or modifies obligations expressly assumed in a signed project agreement.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and Communications",
    blocks: [
      {
        kind: "p",
        text: "Information submitted through our website may be used to respond to inquiries, prepare estimates, communicate about requested services, and manage customer relationships.",
      },
      {
        kind: "p",
        text: "Our collection and use of personal information are described in our Privacy Policy.",
      },
      {
        kind: "p",
        text: "If you provide a telephone number or email address, we may contact you regarding your inquiry or requested services, subject to applicable law and any required consent.",
      },
      {
        kind: "p",
        text: "Marketing emails and text messages will be subject to applicable consent, opt-out, and communication requirements.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    blocks: [
      {
        kind: "p",
        text: "Neither party will be considered in breach solely because performance is delayed by an event beyond that party’s reasonable control, to the extent recognized by applicable law and the relevant project agreement.",
      },
      {
        kind: "p",
        text: "Such events may include severe weather, natural disasters, government actions, material shortages, transportation disruptions, or other extraordinary circumstances.",
      },
      {
        kind: "p",
        text: "The affected party will provide reasonable notice when practicable. Any necessary adjustments will be handled under the applicable agreement and governing law.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Disputes",
    blocks: [
      {
        kind: "p",
        text: "These Terms and Conditions are governed by the laws of the State of Florida, without regard to conflict-of-law principles.",
      },
      {
        kind: "p",
        text: "Disputes will be addressed in accordance with the applicable project agreement and governing law. Any court proceeding will be subject to applicable jurisdiction and venue requirements.",
      },
      {
        kind: "p",
        text: "Nothing in this section waives a customer’s statutory rights or requires arbitration unless a valid, applicable agreement separately provides for it.",
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    blocks: [
      {
        kind: "p",
        text: "We may update these Terms and Conditions to reflect changes in our business, website, services, or applicable legal requirements.",
      },
      {
        kind: "p",
        text: "The updated version will be published on this page with a revised “Last Updated” date.",
      },
      {
        kind: "p",
        text: "Changes to website Terms do not automatically modify an existing signed project agreement.",
      },
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {
        title:
          "Terms and Conditions | Impretto Home Solution — Impretto LLC",
      },
      {
        name: "description",
        content:
          "Terms and Conditions for Impretto Home Solution, operated by Impretto LLC — website use, service inquiries, project agreements, and estimates for remodeling services in Wesley Chapel, Tampa & Tampa Bay, Florida.",
      },
      {
        property: "og:title",
        content: "Terms and Conditions | Impretto Home Solution",
      },
      {
        property: "og:description",
        content:
          "The general conditions governing use of imprettohome.com and inquiries about our residential remodeling and project coordination services in Tampa Bay, Florida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Terms and Conditions | Impretto Home Solution",
      },
      {
        name: "twitter:description",
        content:
          "The general conditions governing use of imprettohome.com and inquiries about our residential remodeling and project coordination services in Tampa Bay, Florida.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TermsHeader />

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
              Terms and Conditions
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
                <span className="text-foreground">October 14, 2026</span>
              </span>
              <span className="hidden sm:inline h-4 w-px bg-border" aria-hidden />
              <span>
                Last Updated:{" "}
                <span className="text-foreground">October 14, 2026</span>
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
                aria-label="Terms sections"
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

      <TermsFooter />
    </div>
  );
}

function TermsHeader() {
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
          22
        </span>
        Contact Information
      </h2>

      <p className="mt-5 text-[0.975rem] md:text-base leading-[1.85] text-foreground/80">
        For questions regarding these Terms and Conditions or our services,
        please contact us using the information below.
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

function TermsFooter() {
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
