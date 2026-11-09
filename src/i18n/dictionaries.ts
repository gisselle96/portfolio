import type { Locale } from "./types";

type MessageTree = {
  [key: string]: string | readonly string[] | MessageTree | readonly MessageTree[];
};

const es = {
  brandLabel: "Home",
  nav: {
    welcome: "Welcome",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Skills",
    contact: "Contacto",
  },
  a11y: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    navigation: "Navegación",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    language: "Idioma",
  },
  hero: {
    kicker: "Hola, soy",
    role: "Software Engineer · Frontend",
    focus: "React · Next.js · TypeScript",
    tagline:
      "Desarrollo frontend de portales de producto con React, Next.js y TypeScript: migraciones, features de punta a punta e interfaces que aguantan operación real.",
    aboutCta: "Sobre mí",
    projectsCta: "Ver proyectos",
  },
  about: {
    kicker: "02 · Sobre mí",
    title: "Frontend enfocado en el producto digital.",
    paragraphs: [
      "Soy Software Engineer enfocada en frontend, con más de 3 años construyendo con React, Next.js y TypeScript en fintech. Trabajo en productos complejos: listados, formularios, estados de carga, design systems e integración con microservicios.",
      "En itti formo parte del equipo de desarrollo que migró 3 portales web a Next.js con reescritura de la lógica. Desarrollo features con TanStack Query, componentes reutilizables sobre design system, tests con Vitest y code review con foco en tipado y refactors.",
      "También resolví bugs en producción con New Relic y trabajo día a día en squads de producto: planning, dailies y entrega continua junto a diseño y backend.",
      "Antes aporté como co-fundadora de Eduengine, un edtech premiado (Tigo Campus Party, Kuña Mbaretech y más). Me gusta construir en equipo, cerca del negocio y con mirada de producto.",
    ],
    downloadCv: "Descargar CV",
    experienceTitle: "Experiencia",
    experienceLabel: "Desarrollo frontend en producto",
    educationTitle: "Educación",
    educationDegree: "Ingeniería en Informática",
    educationSchool: "Facultad Politécnica — UNA · Graduada 2025",
    educationDetail:
      "Tesis con NLP e ingeniería de características en Python (Random Forest, LightGBM, XGBoost) para detectar depresión y ansiedad en usuarios de Telegram. Desafío MentalRiskES 2024 (IberLEF).",
    workStyleTitle: "Forma de trabajo",
    workStyle: [
      "Sprints con Scrum: planning, dailies y retros",
      "Squads junto a producto, diseño y desarrollo",
      "Features de punta a punta: UI, datos y estados",
      "Code review con foco en tipado, refactors y cobertura",
    ],
    roles: [
      {
        title: "Software Engineer",
        company: "itti S.A.E.",
        period: "Jul 2023 – Actualidad",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        points: [
          "Frontend en migración de 3 portales a React, Next.js y TypeScript",
          "Features con design system, BFF/API Gateway y TanStack Query",
          "Vitest, New Relic y code review en equipo",
        ],
      },
      {
        title: "Co-Fundadora y COO",
        company: "Eduengine",
        period: "2019 – 2020",
        stack: ["Producto", "Operación"],
        points: [
          "Edtech premiado (Tigo Campus Party, Kuña Mbaretech, entre otros)",
          "Aporté en operación y producto como parte del equipo fundador",
        ],
      },
    ],
  },
  projects: {
    kicker: "03 · Proyectos",
    title: "Craft de producto.",
    intro:
      "Admin Portal, Business Portal y el design system en muv-sdk son de uso interno. Business Portal tiene una superficie corporativa visible; el resto no tiene demo ni repo abierto.",
    items: [
      {
        title: "Admin Portal",
        summary:
          "Portal interno de administración: listados densos, filtros, formularios, estados de carga e integración con APIs. Parte de la migración a Next.js con design system compartido.",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        href: "",
        status: "Uso interno",
      },
      {
        title: "Business Portal",
        summary:
          "Portal corporativo B2B: acceso y flujos de operación para empresas. UI de punta a punta sobre design system compartido.",
        stack: ["React", "Next.js", "TypeScript", "Design System"],
        href: "https://corp.muvapp.com/#/",
        status: "Uso interno",
      },
      {
        title: "Design System Web",
        summary:
          "Monorepo de design system web en muv-sdk: componentes compartidos, tokens y base de UI para los portales del ecosistema.",
        stack: ["React", "TypeScript", "Monorepo", "Design Tokens"],
        href: "",
        status: "Uso interno",
      },
    ],
  },
  skills: {
    kicker: "04 · Skills",
    title: "Stack para portales de producto.",
    intro:
      "React y Next.js en el centro, con TypeScript, Vitest, CI/CD y monitoreo. También sumo contexto con datos, UX/UI y otros lenguajes del stack.",
    groups: [
      {
        label: "UI & frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "TanStack Query",
        ],
      },
      {
        label: "Entrega & tooling",
        items: [
          "Vitest",
          "CI/CD",
          "GitHub Actions",
          "New Relic",
          "Git",
          "Cursor",
        ],
      },
      {
        label: "Colaboración",
        items: ["GitHub", "GitLab", "Bitbucket", "Jira", "Figma"],
      },
      {
        label: "También",
        items: ["MongoDB", "Angular", "Python", "Java", "PostgreSQL", "UX/UI"],
      },
    ],
  },
  contact: {
    kicker: "05 · Contacto",
    title: "¿Necesitas ayuda? Contáctame",
    intro:
      "Estoy en LATAM · Paraguay. Completá el formulario y te respondo pronto.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje",
    messagePlaceholder: "Contame sobre el rol o proyecto",
    send: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Te respondo pronto.",
  },
  footer: {
    portfolio: "Portafolio personal",
  },
} as const satisfies MessageTree;

const en = {
  brandLabel: "Home",
  nav: {
    welcome: "Welcome",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigation: "Navigation",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    language: "Language",
  },
  hero: {
    kicker: "Hi, I'm",
    role: "Software Engineer · Frontend",
    focus: "React · Next.js · TypeScript",
    tagline:
      "Frontend development for product portals with React, Next.js, and TypeScript: migrations, end-to-end features, and interfaces built for real operations.",
    aboutCta: "About me",
    projectsCta: "View projects",
  },
  about: {
    kicker: "02 · About",
    title: "Frontend focused on product development.",
    paragraphs: [
      "I'm a Software Engineer focused on frontend, with 3+ years building with React, Next.js, and TypeScript in fintech. I work on complex products: tables, forms, loading states, design systems, and microservice integrations.",
      "At itti I'm part of the development team that migrated 3 web portals to Next.js with logic rewrites. I build features with TanStack Query, reusable components on a shared design system, Vitest coverage, and code reviews focused on typing and refactors.",
      "I also fixed production bugs with New Relic and work day to day in product squads: planning, dailies, and continuous delivery alongside design and backend.",
      "Previously I co-founded Eduengine, an award-winning edtech (Tigo Campus Party, Kuña Mbaretech, and more). I enjoy building in teams, close to the business, with a product mindset.",
    ],
    downloadCv: "Download CV",
    experienceTitle: "Experience",
    experienceLabel: "Frontend development in product",
    educationTitle: "Education",
    educationDegree: "Computer Engineering",
    educationSchool: "Facultad Politécnica — UNA · Graduated 2025",
    educationDetail:
      "Thesis with NLP and feature engineering in Python (Random Forest, LightGBM, XGBoost) to detect depression and anxiety in Telegram users. MentalRiskES 2024 challenge (IberLEF).",
    workStyleTitle: "How I work",
    workStyle: [
      "Scrum sprints: planning, dailies, and retros",
      "Squads with product, design, and engineering",
      "End-to-end features: UI, data, and states",
      "Code review focused on typing, refactors, and coverage",
    ],
    roles: [
      {
        title: "Software Engineer",
        company: "itti S.A.E.",
        period: "Jul 2023 – Present",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        points: [
          "Frontend on the migration of 3 portals to React, Next.js, and TypeScript",
          "Features with design system, BFF/API Gateway, and TanStack Query",
          "Vitest, New Relic, and team code review",
        ],
      },
      {
        title: "Co-Founder & COO",
        company: "Eduengine",
        period: "2019 – 2020",
        stack: ["Product", "Operations"],
        points: [
          "Award-winning edtech (Tigo Campus Party, Kuña Mbaretech, and more)",
          "Contributed to early-stage operations and product as part of the founding team",
        ],
      },
    ],
  },
  projects: {
    kicker: "03 · Projects",
    title: "Product craft, without exposing client code.",
    intro:
      "Admin Portal, Business Portal, and the design system in muv-sdk are internal. Business Portal has a visible corporate surface; the rest have no public demo or open repo.",
    items: [
      {
        title: "Admin Portal",
        summary:
          "Internal admin portal: dense listings, filters, forms, loading states, and API integration. Part of the Next.js migration with a shared design system.",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        href: "",
        status: "Internal use",
      },
      {
        title: "Business Portal",
        summary:
          "B2B corporate portal: access and operational flows for companies. End-to-end UI on a shared design system.",
        stack: ["React", "Next.js", "TypeScript", "Design System"],
        href: "https://corp.muvapp.com/#/",
        status: "Internal use",
      },
      {
        title: "Design System Web",
        summary:
          "Design system web monorepo in muv-sdk: shared components, tokens, and UI foundation for the product portals.",
        stack: ["React", "TypeScript", "Monorepo", "Design Tokens"],
        href: "",
        status: "Internal use",
      },
    ],
  },
  skills: {
    kicker: "04 · Skills",
    title: "A stack for shipping product, not just demos.",
    intro:
      "React and Next.js at the center, with TypeScript, Vitest, CI/CD, and monitoring. I also bring context with data, UX/UI, and other stack languages.",
    groups: [
      {
        label: "UI & frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "TanStack Query",
        ],
      },
      {
        label: "Delivery & tooling",
        items: [
          "Vitest",
          "CI/CD",
          "GitHub Actions",
          "New Relic",
          "Git",
          "Cursor",
        ],
      },
      {
        label: "Collaboration",
        items: ["GitHub", "GitLab", "Bitbucket", "Jira", "Figma"],
      },
      {
        label: "Also",
        items: ["MongoDB", "Angular", "Python", "Java", "PostgreSQL", "UX/UI"],
      },
    ],
  },
  contact: {
    kicker: "05 · Contact",
    title: "Looking for frontend with real impact?",
    intro:
      "Based in Paraguay · LATAM · Remote. Fill in the form and I’ll get back to you soon.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me about the role or project",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent. I’ll reply soon.",
  },
  footer: {
    portfolio: "Personal portfolio",
  },
} as const satisfies MessageTree;

export const dictionaries = {
  es,
  en,
} as const;

export type Dictionary = (typeof dictionaries)["es"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
