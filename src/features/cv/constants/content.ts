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
  },
} as const;

const es = {
  ...contact,
  updatedAt: "2026-11-09",
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
  summary:
    "Software Engineer y Frontend Developer con casi 5 años en el sector fintech, más de 3 de ellos en desarrollo frontend con React, Next.js y TypeScript. Migré 3 portales web a Next.js con reescritura completa de su lógica y resolví más de 50 bugs en producción. Mi experiencia previa en QA me da una visión integral de la calidad, la usabilidad y el ciclo de vida del producto.",
  experience: [
    {
      title: "Software Engineer (Frontend)",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jul 2023 – Actualidad",
      bullets: [
        "Migré 3 portales web a React, Next.js y TypeScript, con reescritura completa de la lógica.",
        "Desarrollé frontend integrado a una arquitectura de microservicios (BFF y API Gateway).",
        "Implementé nuevas funcionalidades con TanStack Query y componentes reutilizables sobre el design system.",
        "Escribí tests unitarios con Vitest para hooks y componentes, y acompañé al equipo en su adopción.",
        "Resolví más de 50 bugs en producción con monitoreo en New Relic.",
        "Realicé code review de PRs del equipo con foco en refactors, tipado y cobertura de tests.",
        "Apliqué desarrollo asistido por IA con Cursor, guiado por specs (Spec-itti).",
      ],
    },
    {
      title: "QA Tester",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Ene 2022 – Jul 2023",
      bullets: [
        "Planifiqué y ejecuté pruebas funcionales y de usabilidad de productos digitales.",
        "Trabajé en squads junto a producto, diseño y desarrollo dentro de sprints Scrum.",
      ],
    },
    {
      title: "Co-Fundadora y COO",
      company: "Eduengine",
      location: "Paraguay",
      period: "2019 – 2020",
      bullets: [
        "Co-fundé un emprendimiento edtech ganador de premios (Tigo Campus Party, Kuña Mbaretech, entre otros), a cargo de operación y producto.",
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
      items: ["Cursor", "Desarrollo asistido por IA", "Spec-driven development"],
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
  updatedAt: "2026-11-09",
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
  summary:
    "Software Engineer and Frontend Developer with almost 5 years in fintech, 3+ of them building frontend with React, Next.js, and TypeScript. Migrated 3 web portals to Next.js with a full rewrite of their logic and fixed 50+ production bugs. A previous QA role gives me an end-to-end view of quality, usability, and the product lifecycle.",
  experience: [
    {
      title: "Software Engineer (Frontend)",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jul 2023 – Present",
      bullets: [
        "Migrated 3 web portals to React, Next.js, and TypeScript, fully rewriting their logic.",
        "Built frontend integrated with a microservices architecture (BFF and API Gateway).",
        "Shipped new features with TanStack Query and reusable components on the design system.",
        "Wrote unit tests with Vitest for hooks and components and helped the team adopt them.",
        "Fixed 50+ production bugs using New Relic monitoring.",
        "Reviewed team pull requests with a focus on refactoring, typing, and test coverage.",
        "Applied AI-assisted development with Cursor, driven by specs (Spec-itti).",
      ],
    },
    {
      title: "QA Tester",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jan 2022 – Jul 2023",
      bullets: [
        "Planned and executed functional and usability testing of digital products.",
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
      items: ["Cursor", "AI-assisted development", "Spec-driven development"],
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

export const cvFileName = "gisselle-barreto-cv.pdf";

export function cvFileNameFor(locale: Locale) {
  return locale === "en"
    ? "gisselle-barreto-cv-en.pdf"
    : "gisselle-barreto-cv-es.pdf";
}
