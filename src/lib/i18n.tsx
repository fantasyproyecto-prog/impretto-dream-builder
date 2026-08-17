import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = typeof EN;

const EN = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    whyUs: "Why Us",
    standards: "Our Standards",
    contact: "Contact",
    call: "Call",
    freeEstimate: "Get Your Free Estimate",
    getFreeEstimate: "Get Your Free Estimate",
    homeAria: "Impretto Home home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
  },
  hero: {
    eyebrow: "Bathroom Remodeling Wesley Chapel & Tampa",
    h1a: "Premium Bathroom Remodeling",
    h1b: "in Wesley Chapel & Tampa Bay",
    h1c: "",
    lede: "Thoughtful design, quality craftsmanship, and a stress-free remodeling experience managed from start to finish.",
    badges: [
      "Design-led remodeling",
      "One project manager",
      "Transparent proposals",
    ],
    heroAlt:
      "Impretto Home master bathroom in Wesley Chapel, Florida with Calacatta marble, custom vanity, and frameless glass shower",
    ctaPrimary: "Get Your Free Estimate",
    ctaSecondary: "View Projects",
  },
  quote: {
    ariaLabel: "Free estimate request",
    eyebrow: "Free Estimate",
    title: "Tell us about your project",
    name: "Full name",
    phone: "Phone number",
    zip: "ZIP code",
    scope: "What are you looking to remodel?",
    scopeOptions: [
      "Full bathroom remodel",
      "Master bathroom renovation",
      "Tub-to-shower conversion",
      "Walk-in shower",
      "Tile & flooring",
      "Vanity & storage",
      "Accessible bathroom upgrade",
      "Not sure yet",
    ],
    timeline: "When are you looking to start?",
    timelineOptions: [
      "As soon as possible",
      "Within 1 month",
      "1–3 months",
      "3–6 months",
      "Just planning",
    ],
    select: "Please select",
    submit: "Get Your Free Estimate",
    privacy: "No obligation. We respect your privacy — your info is never sold.",
    thanks: "Thanks — request received.",
    thanksBody: "A member of the Impretto Home team will reach out within one business day.",
    errName: "Please enter your full name.",
    errPhone: "Enter a valid phone number.",
    errZip: "Enter a 5-digit ZIP code.",
    errScope: "Please choose what you want to remodel.",
    errTimeline: "Please choose a start timeframe.",
  },
  trust: {
    aria: "Service areas",
    items: [
      "Wesley Chapel",
      "New Tampa",
      "Tampa",
      "Lutz",
      "Land O' Lakes",
      "Tampa Bay",
    ],
  },
  whyUs: {
    eyebrow: "Why Choose Impretto",
    h2a: "Detail-obsessed craft.",
    h2b: "Zero surprises.",
    lede:
      "Bathroom remodeling in Wesley Chapel and Tampa Bay handled with clear communication, transparent proposals, and clean job sites from demo day to final walkthrough.",
    items: [
      {
        title: "One Team. One Standard.",
        body: "Every professional working on your project represents the Impretto Home standard — from craftsmanship and cleanliness to communication and respect for your home.",
      },
      {
        title: "One Point of Contact",
        body: "From the initial consultation to the final walkthrough, your Impretto Home project manager coordinates every phase of your renovation.",
      },
      {
        title: "Design-Led Planning",
        body: "Layouts are drafted around how you actually live — vanity heights, shower niches, storage, and lighting planned before anything is ordered.",
      },
    ],
  },
  standards: {
    eyebrow: "Our Standards",
    h2: "What working with the Impretto Home Team looks like.",
    items: [
      "Clear Communication",
      "Transparent Proposals",
      "Professional Project Management",
      "Quality Materials",
      "Clean & Organized Job Sites",
      "Attention to Detail",
    ],
  },
  services: {
    eyebrow: "Core Services",
    h2: "Bathroom remodeling in Wesley Chapel, Tampa, New Tampa & Lutz.",
    discuss: "Discuss your project",
    explore: "Explore this service",
    featured: "Most requested",
    items: [
      {
        title: "Tub-to-Shower Conversions",
        body: "Tub-to-shower conversion in Wesley Chapel and Tampa Bay — curbless walk-ins, frameless glass, and waterproofing done right.",
      },
      {
        title: "Full Bathroom Remodeling",
        body: "Complete remodels handled end to end: layout, plumbing coordination, tile, fixtures, and finish carpentry.",
      },
      {
        title: "Master Bathroom Renovations",
        body: "Full-scope master suite transformations with wet rooms, freestanding tubs, and elevated lighting plans.",
      },
      {
        title: "Walk-In Showers",
        body: "Low-threshold and curbless showers with built-in benches, niches, and precision-set tile.",
      },
      {
        title: "Tile & Flooring",
        body: "Large-format porcelain, natural stone, and mosaic detail installed to the Impretto Home standard.",
      },
      {
        title: "Vanities & Custom Storage",
        body: "Custom cabinetry, premium materials, and precision tile installation completed to the Impretto Home standard.",
      },
      {
        title: "Accessible Bathroom Upgrades",
        body: "Comfort-height fixtures, wider clearances, and elegant grab bars that never look clinical.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Visual Proof",
    h2: "Dramatic transformations, calm process.",
    lede:
      "Drag the divider to see a dated bathroom rebuilt as a warm, minimalist retreat by the Impretto Home team.",
    before: "Before",
    after: "After",
    sliderAria: "Before and after remodel comparison. Use slider to reveal.",
    handleAria: "Reveal before/after",
    captions: [
      "Master bathroom renovation",
      "Expert tile & vanity installation",
      "Design detail: stone & fixtures",
    ],
  },
  process: {
    eyebrow: "Remodeling Process",
    h2a: "From first measurement to final walkthrough —",
    h2b: "calm and considered.",
    steps: [
      {
        title: "Consultation & Measurements",
        body: "We visit your home, listen to how you use the space, and take precise measurements of the existing bathroom.",
      },
      {
        title: "Design & 3D Visualization",
        body: "Layouts, materials, and fixtures presented in 3D so you can see the finished bathroom before work begins.",
      },
      {
        title: "Detailed Proposal & Project Planning",
        body: "A transparent, line-by-line proposal with scope, materials, and schedule confirmed before anything starts.",
      },
      {
        title: "Construction & Project Management",
        body: "Your project manager coordinates every phase, keeps the site clean and organized, and updates you throughout.",
      },
      {
        title: "Final Walkthrough",
        body: "We review every detail with you, resolve the punch list, and hand over a bathroom finished to our standard.",
      },
    ],
  },
  verified: {
    eyebrow: "Selected Work",
    h2: "A closer look at the details.",
    lede: "Recent bathroom remodeling work completed by the Impretto Home team.",
    badge: "Impretto Home Project",
  },
  finalCta: {
    eyebrow: "Start Your Project",
    h2a: "Ready to start your",
    h2b: "bathroom remodel?",
    lede: "Tampa Bay bathroom remodeling, planned properly. Request your free estimate and we'll follow up within one business day.",
    claim: "Get Your Free Estimate",
  },
  footer: {
    tagline: "Impretto Home. Premium bathroom remodeling serving Wesley Chapel & Tampa Bay, Florida.",
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
    standards: "Nuestros Estándares",
    contact: "Contacto",
    call: "Llamar",
    freeEstimate: "Solicita Tu Estimado Gratis",
    getFreeEstimate: "Solicita Tu Estimado Gratis",
    homeAria: "Impretto Home inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    primary: "Principal",
    mobile: "Móvil",
  },
  hero: {
    eyebrow: "Remodelación de Baños en Wesley Chapel y Tampa",
    h1a: "Remodelación Premium de Baños",
    h1b: "en Wesley Chapel y Tampa Bay",
    h1c: "",
    lede: "Diseño bien pensado, mano de obra de calidad y una experiencia de remodelación sin estrés, gestionada de principio a fin.",
    badges: [
      "Remodelación guiada por diseño",
      "Un gerente de proyecto",
      "Propuestas transparentes",
    ],
    heroAlt:
      "Baño principal de Impretto Home en Wesley Chapel, Florida, con mármol Calacatta, tocador a medida y ducha de cristal sin marco",
    ctaPrimary: "Solicita Tu Estimado Gratis",
    ctaSecondary: "Ver Proyectos",
  },
  quote: {
    ariaLabel: "Solicitud de estimado gratis",
    eyebrow: "Estimado Gratis",
    title: "Cuéntanos sobre tu proyecto",
    name: "Nombre completo",
    phone: "Teléfono",
    zip: "Código Postal",
    scope: "¿Qué deseas remodelar?",
    scopeOptions: [
      "Remodelación completa del baño",
      "Renovación del baño principal",
      "Conversión de tina a ducha",
      "Ducha de entrada libre",
      "Azulejo y pisos",
      "Tocador y almacenamiento",
      "Baño accesible",
      "Aún no estoy seguro",
    ],
    timeline: "¿Cuándo deseas comenzar?",
    timelineOptions: [
      "Lo antes posible",
      "En 1 mes",
      "1 a 3 meses",
      "3 a 6 meses",
      "Solo estoy planeando",
    ],
    select: "Selecciona una opción",
    submit: "Solicita Tu Estimado Gratis",
    privacy: "Sin compromiso. Respetamos tu privacidad — tu información nunca se comparte.",
    thanks: "Gracias — solicitud recibida.",
    thanksBody: "Un integrante del equipo de Impretto Home te contactará en un día hábil.",
    errName: "Por favor ingresa tu nombre completo.",
    errPhone: "Ingresa un número de teléfono válido.",
    errZip: "Ingresa un código postal de 5 dígitos.",
    errScope: "Por favor indica qué deseas remodelar.",
    errTimeline: "Por favor indica cuándo deseas comenzar.",
  },
  trust: {
    aria: "Áreas de servicio",
    items: [
      "Wesley Chapel",
      "New Tampa",
      "Tampa",
      "Lutz",
      "Land O' Lakes",
      "Tampa Bay",
    ],
  },
  whyUs: {
    eyebrow: "Por Qué Elegir Impretto",
    h2a: "Artesanía obsesionada con el detalle.",
    h2b: "Cero sorpresas.",
    lede:
      "Remodelación de baños en Wesley Chapel y Tampa Bay con comunicación clara, propuestas transparentes y obras limpias, desde la demolición hasta la entrega final.",
    items: [
      {
        title: "Un Equipo. Un Estándar.",
        body: "Cada profesional que trabaja en tu proyecto representa el estándar de Impretto Home — desde la mano de obra y la limpieza hasta la comunicación y el respeto por tu hogar.",
      },
      {
        title: "Un Solo Punto de Contacto",
        body: "Desde la consulta inicial hasta la entrega final, tu gerente de proyecto de Impretto Home coordina cada fase de tu renovación.",
      },
      {
        title: "Planificación Guiada por Diseño",
        body: "Las distribuciones se planifican según cómo vives: alturas del tocador, nichos de ducha, almacenamiento e iluminación definidos antes de ordenar materiales.",
      },
    ],
  },
  standards: {
    eyebrow: "Nuestros Estándares",
    h2: "Así es trabajar con el equipo de Impretto Home.",
    items: [
      "Comunicación Clara",
      "Propuestas Transparentes",
      "Gestión Profesional del Proyecto",
      "Materiales de Calidad",
      "Obras Limpias y Organizadas",
      "Atención al Detalle",
    ],
  },
  services: {
    eyebrow: "Servicios Principales",
    h2: "Remodelación de baños en Wesley Chapel, Tampa, New Tampa y Lutz.",
    discuss: "Hablemos de tu proyecto",
    explore: "Explorar este servicio",
    featured: "El más solicitado",
    items: [
      {
        title: "Conversión de Tina a Ducha",
        body: "Conversión de tina a ducha en Wesley Chapel y Tampa Bay — duchas a ras de piso, cristal sin marco e impermeabilización bien hecha.",
      },
      {
        title: "Remodelación Completa de Baños",
        body: "Remodelaciones integrales de principio a fin: distribución, coordinación de plomería, azulejo, grifería y carpintería de acabado.",
      },
      {
        title: "Renovación de Baños Principales",
        body: "Transformaciones completas de suites principales con duchas de obra, tinas independientes y planes de iluminación elevados.",
      },
      {
        title: "Duchas de Entrada Libre",
        body: "Duchas con umbral bajo o a ras de piso, con bancas integradas, nichos y azulejo colocado con precisión.",
      },
      {
        title: "Azulejo y Pisos",
        body: "Porcelanato de gran formato, piedra natural y detalles en mosaico instalados según el estándar de Impretto Home.",
      },
      {
        title: "Tocadores y Almacenamiento a Medida",
        body: "Gabinetería a medida, materiales premium e instalación de azulejo de precisión, completados según el estándar de Impretto Home.",
      },
      {
        title: "Baños Accesibles",
        body: "Grifería a altura cómoda, espacios de circulación más amplios y barras de apoyo elegantes que nunca lucen clínicas.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Prueba Visual",
    h2: "Transformaciones dramáticas, proceso tranquilo.",
    lede:
      "Arrastra el divisor para ver un baño anticuado convertido en un refugio cálido y minimalista por el equipo de Impretto Home.",
    before: "Antes",
    after: "Después",
    sliderAria: "Comparación antes y después de la remodelación. Usa el deslizador para revelar.",
    handleAria: "Mostrar antes/después",
    captions: [
      "Renovación de baño principal",
      "Instalación experta de azulejo y tocador",
      "Detalle de diseño: piedra y grifería",
    ],
  },
  process: {
    eyebrow: "Proceso de Remodelación",
    h2a: "De la primera medición a la entrega final —",
    h2b: "tranquilo y bien pensado.",
    steps: [
      {
        title: "Consulta y Mediciones",
        body: "Visitamos tu hogar, escuchamos cómo usas el espacio y tomamos medidas precisas del baño existente.",
      },
      {
        title: "Diseño y Visualización 3D",
        body: "Distribuciones, materiales y grifería presentados en 3D para que veas el baño terminado antes de comenzar.",
      },
      {
        title: "Propuesta Detallada y Planificación",
        body: "Una propuesta transparente, línea por línea, con alcance, materiales y cronograma confirmados antes de iniciar.",
      },
      {
        title: "Construcción y Gestión del Proyecto",
        body: "Tu gerente de proyecto coordina cada fase, mantiene la obra limpia y organizada y te informa durante todo el proceso.",
      },
      {
        title: "Entrega Final",
        body: "Revisamos cada detalle contigo, resolvemos la lista de pendientes y entregamos un baño terminado con nuestro estándar.",
      },
    ],
  },
  verified: {
    eyebrow: "Trabajos Seleccionados",
    h2: "Una mirada cercana a los detalles.",
    lede: "Trabajos recientes de remodelación de baños completados por el equipo de Impretto Home.",
    badge: "Proyecto Impretto Home",
  },
  finalCta: {
    eyebrow: "Comienza Tu Proyecto",
    h2a: "¿Listo para comenzar tu",
    h2b: "remodelación de baño?",
    lede: "Remodelación de baños en Tampa Bay, planificada correctamente. Solicita tu estimado gratis y te contactamos en un día hábil.",
    claim: "Solicita Tu Estimado Gratis",
  },
  footer: {
    tagline: "Impretto Home. Remodelación premium de baños en Wesley Chapel y Tampa Bay, Florida.",
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
