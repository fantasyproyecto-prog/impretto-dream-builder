import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = typeof EN;

const EN = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    whyUs: "Why Us",
    testimonials: "Testimonials",
    contact: "Contact",
    call: "Call",
    freeEstimate: "Free Estimate",
    getFreeEstimate: "Get Free Estimate",
    homeAria: "Impretto Home home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
  },
  hero: {
    eyebrow: "Luxury Bathroom Remodeling",
    h1a: "Transform Your Space:",
    h1b: "Luxury bathroom remodeling",
    h1c: "in the greater metro area.",
    lede: "We bring elegance, functionality, and stress-free renovations to your home. Licensed, insured, and built to last — with transparent pricing from day one.",
    badges: ["Licensed & Insured", "10+ Years Experience", "100% Satisfaction"],
    heroAlt:
      "Impretto Home master bathroom with Calacatta marble floors, dark charcoal accent wall, custom vanity, and modern glass shower",
    ctaPrimary: "Claim Your Free Estimate",
    ctaSecondary: "View Verified Projects",
  },
  quote: {
    ariaLabel: "Free estimate request",
    eyebrow: "3-Step Free Estimate",
    title: "Get your complimentary quote",
    name: "Full name",
    phone: "Phone number",
    zip: "ZIP code",
    submit: "Get My Free Quote",
    privacy: "No obligation. We respect your privacy — your info is never sold.",
    thanks: "Thanks — request received.",
    thanksBody: "A design consultant will reach out within one business day.",
    errName: "Please enter your full name.",
    errPhone: "Enter a valid phone number.",
    errZip: "Enter a 5-digit ZIP code.",
  },
  trust: {
    aria: "Certifications",
    items: [
      "NKBA Member",
      "EPA Lead-Safe Certified",
      "Houzz Best of Service",
      "BBB A+ Accredited",
      "Fully Licensed & Insured",
    ],
  },
  whyUs: {
    eyebrow: "Why Choose Impretto",
    h2a: "Detail-obsessed craft.",
    h2b: "Zero surprises.",
    lede:
      "Our clients tell us the difference is what happens between the demo and the reveal: transparent pricing, clean job sites, and finishes that hold up for decades.",
    items: [
      {
        title: "Custom Design",
        body: "Every layout is drafted around how you actually live — from vanity heights to shower niches, no template floor plans.",
      },
      {
        title: "Premium Materials",
        body: "Natural stone, solid hardwood, and specified-grade fixtures from vendors we've trusted for a decade.",
      },
      {
        title: "On-Time Completion",
        body: "Fixed schedules, daily site cleanup, and one dedicated project manager from tear-out to final walkthrough.",
      },
    ],
  },
  services: {
    eyebrow: "Core Services",
    h2: "Bathroom remodeling, engineered for how you live.",
    discuss: "Discuss your project",
    explore: "Explore this service",
    items: [
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
    ],
  },
  portfolio: {
    eyebrow: "Visual Proof",
    h2: "Dramatic transformations, calm process.",
    lede:
      "Drag the divider to reveal a recent renovation in Westfield, NJ — a dated 1990s hall bath rebuilt as a warm, minimalist retreat.",
    before: "Before",
    after: "After",
    sliderAria: "Before and after remodel comparison. Use slider to reveal.",
    handleAria: "Reveal before/after",
    captions: [
      "Marble walk-in shower · Summit, NJ",
      "Double vanity retreat · Chatham, NJ",
      "Moody powder room · Short Hills, NJ",
    ],
  },
  process: {
    eyebrow: "Our White-Glove Process",
    h2a: "From first sketch to final reveal —",
    h2b: "calm and considered.",
    steps: [
      {
        title: "Consultation & 3D Design",
        body: "In-home measure, listening session, and a photoreal 3D rendering so you approve the design before we lift a tool.",
      },
      {
        title: "Precision Demolition & Waterproofing",
        body: "Dust-controlled tear-out, structural review, and Schluter waterproofing systems installed to spec — the foundation of a bathroom that lasts.",
      },
      {
        title: "Master Tile & Vanity Installation",
        body: "In-house tile masters, custom cabinetry, and specified-grade fixtures set with millimeter precision by a single dedicated crew.",
      },
      {
        title: "Final Walkthrough & 5-Year Warranty",
        body: "A punch-list resolved before the final invoice, a spotless handover, and a five-year written warranty on all craftsmanship.",
      },
    ],
  },
  verified: {
    eyebrow: "Verified Local Portfolio",
    h2: "Real bathrooms. Real neighbors. Real receipts.",
    lede: "Every project below was designed, permitted, and built by our in-house Impretto Home crew.",
    badge: "Verified Local Job",
  },
  testimonials: {
    eyebrow: "Homeowner Reviews",
    h2: "Rated 4.9 by neighbors across New Jersey.",
    reviews: [
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
    ],
    starsAria: "5 out of 5 stars",
  },
  finalCta: {
    eyebrow: "Start Your Project",
    h2a: "Ready to build the bathroom of",
    h2b: "your dreams?",
    lede: "Schedule your complimentary design consultation today. Most estimates are delivered within 48 hours.",
    claim: "Claim Your Free Estimate",
  },
  footer: {
    tagline: "A New Jersey design-build studio specializing in luxury bathroom remodels. Family-run since 2013.",
    navigate: "Navigate",
    areas: "Areas We Serve",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
  langToggle: {
    aria: "Language",
    en: "EN",
    es: "ES",
  },
};

const ES: Dict = {
  nav: {
    services: "Servicios",
    portfolio: "Portafolio",
    whyUs: "Por Qué Elegirnos",
    testimonials: "Testimonios",
    contact: "Contacto",
    call: "Llamar",
    freeEstimate: "Presupuesto Gratis",
    getFreeEstimate: "Solicitar Presupuesto Gratis",
    homeAria: "Impretto Home inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    primary: "Principal",
    mobile: "Móvil",
  },
  hero: {
    eyebrow: "Remodelación de Baños de Lujo",
    h1a: "Transforma tu Espacio:",
    h1b: "Remodelación de baños de lujo",
    h1c: "en el área metropolitana.",
    lede: "Aportamos elegancia, funcionalidad y renovaciones sin estrés a tu hogar. Con licencia, asegurados y hechos para durar, con precios transparentes desde el primer día.",
    badges: ["Con Licencia y Asegurados", "Más de 10 Años de Experiencia", "100% Satisfacción"],
    heroAlt:
      "Baño principal Impretto Home con pisos de mármol Calacatta, pared de contraste en carbón, tocador a medida y ducha moderna de cristal",
    ctaPrimary: "Solicitar Presupuesto Gratis",
    ctaSecondary: "Ver Proyectos Verificados",
  },
  quote: {
    ariaLabel: "Solicitud de presupuesto gratis",
    eyebrow: "Presupuesto Gratis en 3 Pasos",
    title: "Obtén tu presupuesto sin costo",
    name: "Nombre completo",
    phone: "Teléfono",
    zip: "Código Postal",
    submit: "Obtener Estimado Sin Costo",
    privacy: "Sin compromiso. Respetamos tu privacidad — tu información nunca se comparte.",
    thanks: "Gracias — solicitud recibida.",
    thanksBody: "Un asesor de diseño se comunicará contigo en un día hábil.",
    errName: "Por favor ingresa tu nombre completo.",
    errPhone: "Ingresa un número de teléfono válido.",
    errZip: "Ingresa un código postal de 5 dígitos.",
  },
  trust: {
    aria: "Certificaciones",
    items: [
      "Miembro NKBA",
      "Certificado EPA Lead-Safe",
      "Houzz Best of Service",
      "Acreditado BBB A+",
      "Con Licencia y Asegurados",
    ],
  },
  whyUs: {
    eyebrow: "Por Qué Elegir Impretto",
    h2a: "Artesanía obsesionada con el detalle.",
    h2b: "Cero sorpresas.",
    lede:
      "Nuestros clientes nos dicen que la diferencia está entre la demolición y la entrega: precios transparentes, obras limpias y acabados que duran décadas.",
    items: [
      {
        title: "Diseño Personalizado",
        body: "Cada distribución se planifica según cómo vives — desde la altura del tocador hasta los nichos de la ducha, sin planos genéricos.",
      },
      {
        title: "Materiales Premium",
        body: "Piedra natural, madera maciza y grifería de grado especificado, de proveedores en los que confiamos hace más de una década.",
      },
      {
        title: "Entrega Puntual",
        body: "Cronogramas fijos, limpieza diaria del sitio y un gerente de proyecto dedicado desde la demolición hasta la entrega final.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios Principales",
    h2: "Remodelación de baños, diseñada para tu estilo de vida.",
    discuss: "Hablemos de tu proyecto",
    explore: "Explorar este servicio",
    items: [
      {
        title: "Renovación de Baños Principales",
        body: "Transformaciones completas de suites principales con duchas de obra, tinas independientes y pisos con calefacción.",
      },
      {
        title: "Conversión Personalizada de Duchas",
        body: "Conversión de tina a ducha, duchas a ras de piso y duchas de vapor con mamparas de cristal sin marco.",
      },
      {
        title: "Instalación Moderna de Tocadores y Azulejos",
        body: "Gabinetes a medida, encimeras de piedra natural y trabajo de azulejo de precisión hecho por nuestros artesanos.",
      },
      {
        title: "Baños Accesibles",
        body: "Distribuciones compatibles con la ADA, grifería a altura cómoda y barras de apoyo elegantes que nunca lucen clínicas.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Prueba Visual",
    h2: "Transformaciones dramáticas, proceso tranquilo.",
    lede:
      "Arrastra el divisor para ver una renovación reciente en Westfield, NJ — un baño de pasillo de los 90 convertido en un refugio cálido y minimalista.",
    before: "Antes",
    after: "Después",
    sliderAria: "Comparación antes y después de la remodelación. Usa el deslizador para revelar.",
    handleAria: "Mostrar antes/después",
    captions: [
      "Ducha de mármol · Summit, NJ",
      "Tocador doble · Chatham, NJ",
      "Baño de visitas moderno · Short Hills, NJ",
    ],
  },
  process: {
    eyebrow: "Nuestro Proceso White-Glove",
    h2a: "Del primer boceto a la entrega final —",
    h2b: "tranquilo y bien pensado.",
    steps: [
      {
        title: "Consulta y Diseño 3D",
        body: "Medición en casa, sesión de escucha y un renderizado 3D fotorreal para que apruebes el diseño antes de tocar una herramienta.",
      },
      {
        title: "Demolición de Precisión e Impermeabilización",
        body: "Demolición con control de polvo, revisión estructural e instalación de sistemas de impermeabilización Schluter — la base de un baño que dura décadas.",
      },
      {
        title: "Maestría en Azulejo y Tocadores",
        body: "Maestros del azulejo internos, gabinetería a medida y grifería de grado especificado colocados con precisión milimétrica por un equipo dedicado.",
      },
      {
        title: "Entrega Final y Garantía de 5 Años",
        body: "Lista de pendientes resuelta antes de la factura final, entrega impecable y garantía escrita de cinco años en toda la mano de obra.",
      },
    ],
  },
  verified: {
    eyebrow: "Portafolio Local Verificado",
    h2: "Baños reales. Vecinos reales. Pruebas reales.",
    lede: "Cada proyecto a continuación fue diseñado, permitido y construido por nuestro equipo interno de Impretto Home.",
    badge: "Trabajo Local Verificado",
  },
  testimonials: {
    eyebrow: "Reseñas de Clientes",
    h2: "Calificados 4.9 por vecinos en todo Nueva Jersey.",
    reviews: [
      {
        name: "Sarah",
        city: "Westfield, NJ",
        quote:
          "El equipo de Impretto mantuvo comunicación constante — desde la primera reunión de diseño hasta el pulido final. Nuestro baño principal por fin se siente como el hotel que siempre quisimos en casa.",
      },
      {
        name: "Michael",
        city: "Summit, NJ",
        quote:
          "Cada día el sitio estaba impecable. Cada factura coincidió con la propuesta. El trabajo del azulejo en la ducha es mejor que lo que he visto en revistas de diseño.",
      },
      {
        name: "Priya",
        city: "Chatham, NJ",
        quote:
          "Convertimos un baño estrecho en un espacio accesible y hermoso para mi madre. Es elegante, seguro y — lo más importante — se siente como ella.",
      },
    ],
    starsAria: "5 de 5 estrellas",
  },
  finalCta: {
    eyebrow: "Comienza Tu Proyecto",
    h2a: "¿Listo para construir el baño de",
    h2b: "tus sueños?",
    lede: "Agenda tu consulta de diseño sin costo hoy. La mayoría de los estimados se entregan en 48 horas.",
    claim: "Solicitar Presupuesto Gratis",
  },
  footer: {
    tagline: "Estudio de diseño y construcción en Nueva Jersey especializado en remodelación de baños de lujo. Empresa familiar desde 2013.",
    navigate: "Navegar",
    areas: "Áreas de Servicio",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos",
  },
  langToggle: {
    aria: "Idioma",
    en: "EN",
    es: "ES",
  },
};

const DICT: Record<Lang, Dict> = { en: EN, es: ES };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("impretto.lang");
      if (stored === "es" || stored === "en") setLangState(stored);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("impretto.lang", l);
    } catch {
      /* noop */
    }
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICT[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const btn = (code: Lang, label: string) => {
    const active = lang === code;
    return (
      <button
        key={code}
        type="button"
        onClick={() => setLang(code)}
        aria-pressed={active}
        aria-label={`${t.langToggle.aria}: ${label}`}
        className={`relative z-10 inline-flex h-9 min-w-[44px] items-center justify-center rounded-full px-3 text-[13px] font-medium tracking-wide transition-colors ${
          active ? "text-ink" : "text-ink/55 hover:text-ink"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </button>
    );
  };
  return (
    <div
      role="group"
      aria-label={t.langToggle.aria}
      className={`relative inline-flex items-center rounded-full border border-ink/10 bg-white/60 backdrop-blur-md p-0.5 shadow-sm ${className}`}
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-transform duration-300 ease-out"
        style={{ transform: lang === "en" ? "translateX(0)" : "translateX(100%)" }}
      />
      {btn("en", t.langToggle.en)}
      {btn("es", t.langToggle.es)}
    </div>
  );
}
