/**
 * Fuente de verdad del CV para ATS (una columna, texto plano, ES/EN).
 * Actualizá este archivo y el PDF de `/api/cv?lang=es|en` queda al día automáticamente.
 * El PDF diseñado para humanos vive aparte en `public/cv/gisselle-barreto.pdf`.
 */
import type { Locale } from "@/i18n/types";

const contact = {
  name: "Gisselle Barreto",
  email: "gibasa96@gmail.com",
  phone: "+595 982 722 585",
  links: {
    linkedin: "https://www.linkedin.com/in/gisselle-barreto-8b916a216/",
    github: "https://github.com/gisselle96",
    portfolio: "https://portfolio-gi-ba.vercel.app",
  },
} as const;

const es = {
  ...contact,
  updatedAt: "2026-11-11",
  role: "Software Engineer | Frontend Developer · React · Next.js · TypeScript",
  location: "Capiatá, Paraguay · Remoto (UTC-3)",
  headings: {
    contact: "Contacto",
    summary: "Resumen profesional",
    experience: "Experiencia laboral",
    skills: "Habilidades",
    education: "Educación",
    languages: "Idiomas",
    updated: "Actualizado",
  },
  labels: {
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portafolio",
  },
  summary:
    "Software Engineer (Frontend) con casi 5 años en fintech: más de 3 desarrollando con React, Next.js y TypeScript, y 1,5 en QA. Migré 3 portales web a Next.js reescribiendo su lógica, construyo features de punta a punta sobre microservicios (BFF y API Gateway) y resolví más de 50 bugs en producción con New Relic. Trabajo con desarrollo asistido por IA guiado por specs, tests con Vitest y code review con foco en tipado y calidad.",
  experience: [
    {
      title: "Software Engineer (Frontend)",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jul 2023 – Actualidad",
      bullets: [
        "Migré 3 portales web a React, Next.js y TypeScript, reescribiendo la lógica de negocio y no solo la capa visual.",
        "Integré el frontend con microservicios a través de BFF y API Gateway, usando TanStack Query para caché, invalidación y estados de red.",
        "Desarrollo features de punta a punta, del diseño en Figma a producción: UI, validaciones, estados de carga, vacío y error, y contrato con la API.",
        "Construí componentes reutilizables sobre el design system compartido entre productos.",
        "Escribí tests unitarios con Vitest para hooks y componentes, y acompañé al equipo en su adopción.",
        "Rastreé y resolví más de 50 bugs en producción con monitoreo en New Relic.",
        "Hago code review de PRs con foco en tipado, refactors y cobertura de tests.",
        "Aplico desarrollo asistido por IA guiado por specs (Cursor, Spec Kit, Claude, Gemini) y reviso cada diff antes del merge.",
      ],
    },
    {
      title: "QA Tester",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Ene 2022 – Jul 2023",
      bullets: [
        "Planifiqué y ejecuté pruebas funcionales y de usabilidad de productos digitales fintech.",
        "Documenté hallazgos y validé correcciones junto al equipo de desarrollo.",
        "Trabajé en squads con producto, diseño y desarrollo dentro de sprints Scrum.",
      ],
    },
    {
      title: "Co-Fundadora y COO",
      company: "Eduengine",
      location: "Paraguay",
      period: "2019 – 2020",
      bullets: [
        "Co-fundé un emprendimiento edtech premiado (Tigo Campus Party, Kuña Mbaretech, entre otros), a cargo de operación y producto.",
        "Prioricé y lancé producto con un equipo chico.",
      ],
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React (React.js)", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "TanStack Query", "Design Systems"],
    },
    {
      label: "Arquitectura",
      items: ["Microservicios", "BFF", "API Gateway", "Integración de APIs"],
    },
    {
      label: "Testing y calidad",
      items: ["Vitest", "Tests unitarios", "Testing funcional", "Testing de usabilidad", "QA", "Code review"],
    },
    {
      label: "DevOps y monitoreo",
      items: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "GitHub Actions", "New Relic"],
    },
    {
      label: "IA aplicada",
      items: ["Cursor", "Spec Kit", "Claude", "Gemini", "Desarrollo asistido por IA", "Spec-driven development"],
    },
    {
      label: "Metodologías y herramientas",
      items: ["Scrum", "Agile", "Jira", "Figma", "UX/UI"],
    },
    {
      label: "Conocimientos",
      items: ["Angular", "Python", "Java", "PostgreSQL", "MongoDB"],
    },
  ],
  education: [
    {
      title: "Ingeniería en Informática",
      school: "Facultad Politécnica — Universidad Nacional de Asunción (UNA)",
      period: "Graduada 2025",
      detail:
        "Tesis: modelo de clasificación para detectar depresión y ansiedad en usuarios de Telegram, con procesamiento de lenguaje natural (NLP) e ingeniería de características en Python (Random Forest, LightGBM, XGBoost). F1-Score de 0,82, equivalente al 3.º lugar del desafío MentalRiskES 2024 (IberLEF).",
    },
  ],
  languages: [
    { label: "Español", level: "Nativo" },
    { label: "Inglés", level: "Básico-intermedio" },
  ],
};

type CvData = typeof es;

const en: CvData = {
  ...contact,
  updatedAt: "2026-11-11",
  role: "Software Engineer | Frontend Developer · React · Next.js · TypeScript",
  location: "Capiatá, Paraguay · Remote (UTC-3)",
  headings: {
    contact: "Contact",
    summary: "Professional Summary",
    experience: "Work Experience",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    updated: "Updated",
  },
  labels: {
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portfolio",
  },
  summary:
    "Software Engineer (Frontend) with almost 5 years in fintech: 3+ building with React, Next.js, and TypeScript, and 1.5 in QA. Migrated 3 web portals to Next.js by rewriting their logic, build end-to-end features on microservices (BFF and API Gateway), and fixed 50+ production bugs with New Relic. I work with spec-driven, AI-assisted development, Vitest testing, and code review focused on typing and quality.",
  experience: [
    {
      title: "Software Engineer (Frontend)",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jul 2023 – Present",
      bullets: [
        "Migrated 3 web portals to React, Next.js, and TypeScript, rewriting the business logic, not just the visual layer.",
        "Integrated the frontend with microservices through a BFF and API Gateway, using TanStack Query for caching, invalidation, and network states.",
        "Build end-to-end features, from Figma design to production: UI, validation, loading, empty, and error states, and the API contract.",
        "Built reusable components on the design system shared across products.",
        "Wrote unit tests with Vitest for hooks and components and helped the team adopt them.",
        "Traced and fixed 50+ production bugs using New Relic monitoring.",
        "Review pull requests with a focus on typing, refactoring, and test coverage.",
        "Apply spec-driven, AI-assisted development (Cursor, Spec Kit, Claude, Gemini) and review every diff before merging.",
      ],
    },
    {
      title: "QA Tester",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jan 2022 – Jul 2023",
      bullets: [
        "Planned and executed functional and usability testing of fintech digital products.",
        "Documented findings and validated fixes with the development team.",
        "Worked in squads with product, design, and engineering in Scrum sprints.",
      ],
    },
    {
      title: "Co-Founder & COO",
      company: "Eduengine",
      location: "Paraguay",
      period: "2019 – 2020",
      bullets: [
        "Co-founded an award-winning edtech startup (Tigo Campus Party, Kuña Mbaretech, and others), leading operations and product.",
        "Prioritized and shipped product with a small team.",
      ],
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React (React.js)", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "TanStack Query", "Design Systems"],
    },
    {
      label: "Architecture",
      items: ["Microservices", "BFF", "API Gateway", "API integration"],
    },
    {
      label: "Testing & Quality",
      items: ["Vitest", "Unit testing", "Functional testing", "Usability testing", "QA", "Code review"],
    },
    {
      label: "DevOps & Monitoring",
      items: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "GitHub Actions", "New Relic"],
    },
    {
      label: "Applied AI",
      items: ["Cursor", "Spec Kit", "Claude", "Gemini", "AI-assisted development", "Spec-driven development"],
    },
    {
      label: "Methodologies & Tools",
      items: ["Scrum", "Agile", "Jira", "Figma", "UX/UI"],
    },
    {
      label: "Familiar with",
      items: ["Angular", "Python", "Java", "PostgreSQL", "MongoDB"],
    },
  ],
  education: [
    {
      title: "B.Sc. in Computer Engineering (Ingeniería en Informática)",
      school: "Facultad Politécnica — Universidad Nacional de Asunción (UNA)",
      period: "Graduated 2025",
      detail:
        "Thesis: classification model to detect depression and anxiety in Telegram users, using natural language processing (NLP) and feature engineering in Python (Random Forest, LightGBM, XGBoost). F1-score of 0.82, equivalent to 3rd place in the MentalRiskES 2024 challenge (IberLEF).",
    },
  ],
  languages: [
    { label: "Spanish", level: "Native" },
    { label: "English", level: "Basic-intermediate" },
  ],
};

export const cvByLocale: Record<Locale, CvData> = { es, en };

export const cv = es;

export function cvFileNameFor(locale: Locale) {
  return `gisselle-barreto-cv-ats-${locale}.pdf`;
}
