/**
 * Fuente de verdad del CV (una columna, texto plano, ES/EN).
 * Actualizá este archivo y los PDF de `/api/cv?lang=es|en` (ATS, sin foto)
 * y `/api/cv?photo=1` (con foto) quedan al día automáticamente.
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
  updatedAt: "2026-11-23",
  role: "Software Engineer · Ingeniera en Informática | React · Next.js · TypeScript · SQL · Python",
  location: "Capiatá, Paraguay · Remoto (UTC-3)",
  headings: {
    contact: "Contacto",
    summary: "Resumen profesional",
    experience: "Experiencia laboral",
    skills: "Habilidades",
    courses: "Cursos y certificaciones",
    education: "Educación",
  },
  labels: {
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portafolio",
  },
  summary:
    "Software Engineer e Ingeniera en Informática (UNA, 2025) con casi 5 años en fintech: más de 3 en desarrollo de software (React, Next.js, TypeScript) y 1,5 en QA. Migré 3 portales web reescribiendo su lógica de negocio, integro el frontend con microservicios y resolví más de 50 errores en producción con monitoreo en New Relic. Combino programación, calidad (pruebas automatizadas, testing funcional y code review) y documentación, con base en SQL y Python. Soy proactiva, disfruto trabajar en equipo, tengo un perfil analítico y curioso, y aprendo nuevas herramientas con facilidad.",
  experience: [
    {
      title: "Software Engineer (Frontend)",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jul 2023 – Actualidad",
      bullets: [
        "Migré 3 portales web a React, Next.js y TypeScript, analizando y reescribiendo la lógica de negocio más allá de la capa visual.",
        "Integré el frontend con microservicios (BFF y API Gateway), validando las respuestas de los servicios en Postman y usando TanStack Query, Zustand y Zod para caché, estado del cliente y validación de datos.",
        "Desarrollo features de punta a punta, del diseño en Figma a producción: UI, validaciones, estados de carga, vacío y error, y contrato con la API.",
        "Construí componentes reutilizables en el monorepo del design system compartido entre productos, documentados y probados en Storybook.",
        "Monitoreo los sistemas en producción con New Relic: rastreé y resolví más de 50 errores.",
        "Automatizo pruebas de hooks y componentes con Vitest y React Testing Library, y acompañé al equipo en su adopción.",
        "Aplico desarrollo asistido por IA guiado por specs (Cursor, Spec Kit, Claude, Gemini), apoyé su adopción en el equipo y reviso PRs con foco en tipado, refactors y cobertura de tests antes del merge.",
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
        "Colaboré en squads con producto, diseño y desarrollo dentro de sprints Scrum, proponiendo mejoras.",
      ],
    },
    {
      title: "Co-Fundadora y COO",
      company: "Eduengine",
      location: "Paraguay",
      period: "2019 – 2020",
      bullets: [
        "Co-fundé un emprendimiento edtech premiado (Tigo Campus Party, Kuña Mbaretech, entre otros).",
        "Estuve a cargo de la operación y el producto: organicé procesos y prioricé lanzamientos con un equipo chico.",
      ],
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "TanStack Query", "Zustand", "Zod", "Design Systems", "Storybook"],
    },
    {
      label: "Arquitectura e integración",
      items: ["Microservicios", "BFF", "API Gateway", "Integración de APIs", "Postman"],
    },
    {
      label: "Datos",
      items: ["SQL", "PostgreSQL", "MongoDB", "Python"],
    },
    {
      label: "Testing y calidad",
      items: ["Vitest", "React Testing Library", "Pruebas automatizadas", "Testing funcional y de usabilidad", "QA", "Code review"],
    },
    {
      label: "DevOps, monitoreo y analítica",
      items: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "GitHub Actions", "New Relic", "Google Analytics"],
    },
    {
      label: "IA aplicada",
      items: ["Cursor", "Spec Kit", "Claude", "Gemini", "Desarrollo guiado por specs"],
    },
    {
      label: "Metodologías y herramientas",
      items: ["Scrum", "Agile", "Jira", "Figma", "Paquete Office"],
    },
    {
      label: "Conocimientos",
      items: ["Angular", "Java"],
    },
  ],
  courses: [
    "Introducción a la Automatización de Pruebas UI Web con Playwright — itti, 2024",
    "Shadcn/ui: Componentes accesibles y personalizables — DevTalles, 2025",
    "Gen AI Fundamentos — AWS, 2026",
    "Inteligencia artificial: IA para Todos (itti, 2025) · IA Academy: Prompt Engineering, NotebookLM, Gemini y Workspace, Gemini y Apps Script, Mindset IA",
    "FinOps: Gestión Financiera en la Nube — itti, 2025",
    "Seguridad de la información: Norma ISO 27001, Ciberseguridad y Privacidad de datos — itti, 2024–2026",
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
};

type CvData = typeof es;

const en: CvData = {
  ...contact,
  updatedAt: "2026-11-23",
  role: "Software Engineer · Computer Engineer | React · Next.js · TypeScript · SQL · Python",
  location: "Capiatá, Paraguay · Remote (UTC-3)",
  headings: {
    contact: "Contact",
    summary: "Professional Summary",
    experience: "Work Experience",
    skills: "Skills",
    courses: "Courses & Certifications",
    education: "Education",
  },
  labels: {
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portfolio",
  },
  summary:
    "Software Engineer and Computer Engineer (UNA, 2025) with almost 5 years in fintech: 3+ in software development (React, Next.js, TypeScript) and 1.5 in QA. Migrated 3 web portals by rewriting their business logic, integrated the frontend with microservices, and fixed 50+ production issues using New Relic monitoring. Combines programming, quality (automated testing, functional testing, and code review), and documentation, with a foundation in SQL and Python. Proactive, collaborative, analytical, and curious, with a knack for picking up new tools.",
  experience: [
    {
      title: "Software Engineer (Frontend)",
      company: "itti S.A.E.C.A.",
      location: "Paraguay",
      period: "Jul 2023 – Present",
      bullets: [
        "Migrated 3 web portals to React, Next.js, and TypeScript, analyzing and rewriting the business logic beyond the visual layer.",
        "Integrated the frontend with microservices (BFF and API Gateway), validating service responses in Postman and using TanStack Query, Zustand, and Zod for caching, client state, and data validation.",
        "Build end-to-end features, from Figma design to production: UI, validation, loading, empty, and error states, and the API contract.",
        "Built reusable components in the design system monorepo shared across products, documented and tested in Storybook.",
        "Monitor production systems with New Relic: traced and fixed 50+ issues.",
        "Automate hook and component tests with Vitest and React Testing Library, and supported the team in adopting them.",
        "Apply spec-driven, AI-assisted development (Cursor, Spec Kit, Claude, Gemini), supported its adoption across the team, and review pull requests for typing, refactoring, and test coverage before merging.",
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
        "Collaborated in squads with product, design, and engineering in Scrum sprints, proposing improvements.",
      ],
    },
    {
      title: "Co-Founder & COO",
      company: "Eduengine",
      location: "Paraguay",
      period: "2019 – 2020",
      bullets: [
        "Co-founded an award-winning edtech startup (Tigo Campus Party, Kuña Mbaretech, and others).",
        "Led operations and product: organized processes and prioritized launches with a small team.",
      ],
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "TanStack Query", "Zustand", "Zod", "Design Systems", "Storybook"],
    },
    {
      label: "Architecture & Integration",
      items: ["Microservices", "BFF", "API Gateway", "API integration", "Postman"],
    },
    {
      label: "Data",
      items: ["SQL", "PostgreSQL", "MongoDB", "Python"],
    },
    {
      label: "Testing & Quality",
      items: ["Vitest", "React Testing Library", "Automated testing", "Functional and usability testing", "QA", "Code review"],
    },
    {
      label: "DevOps, Monitoring & Analytics",
      items: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "GitHub Actions", "New Relic", "Google Analytics"],
    },
    {
      label: "Applied AI",
      items: ["Cursor", "Spec Kit", "Claude", "Gemini", "Spec-driven development"],
    },
    {
      label: "Methodologies & Tools",
      items: ["Scrum", "Agile", "Jira", "Figma", "Microsoft Office"],
    },
    {
      label: "Familiar with",
      items: ["Angular", "Java"],
    },
  ],
  courses: [
    "Introduction to Web UI Test Automation with Playwright — itti, 2024",
    "Shadcn/ui: Accessible and Customizable Components — DevTalles, 2025",
    "Gen AI Fundamentals — AWS, 2026",
    "Artificial intelligence: AI for Everyone (itti, 2025) · IA Academy: Prompt Engineering, NotebookLM, Gemini & Workspace, Gemini & Apps Script, AI Mindset",
    "FinOps: Cloud Financial Management — itti, 2025",
    "Information security: ISO 27001 Awareness, Cybersecurity, and Data Privacy — itti, 2024–2026",
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
};

export const cvByLocale: Record<Locale, CvData> = { es, en };

export const cv = es;

export function cvFileNameFor(locale: Locale, { withPhoto = false } = {}) {
  return withPhoto
    ? `gisselle-barreto-cv-${locale}.pdf`
    : `gisselle-barreto-cv-ats-${locale}.pdf`;
}
