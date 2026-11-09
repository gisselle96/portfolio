/**
 * Fuente de verdad del CV.
 * Actualizá este archivo y el PDF descargable (`/api/cv`) queda al día automáticamente.
 */
export const cv = {
  updatedAt: "2026-11-09",
  name: "Gisselle Barreto",
  role: "Software Engineer | Frontend · React · Next.js",
  location: "Paraguay",
  email: "gibasa96@gmail.com",
  links: {
    github: "https://github.com/gisselle96",
    linkedin: "https://www.linkedin.com/in/gisselle-barreto-8b916a216/",
  },
  summary:
    "Software Engineer enfocada en frontend, con más de 3 años en React, Next.js y TypeScript en fintech. Participé en la migración de 3 portales web a Next.js, desarrollo features sobre design system y microservicios, y trabajo con Vitest, code review y monitoreo en producción.",
  experience: [
    {
      title: "Software Engineer",
      company: "itti S.A.E.",
      period: "Jul 2023 – Actualidad",
      bullets: [
        "Desarrollo frontend en la migración de 3 portales web a React, Next.js y TypeScript",
        "Integración con arquitectura de microservicios (BFF y API Gateway)",
        "Nuevas funcionalidades con TanStack Query y componentes reutilizables sobre el design system",
        "Tests unitarios con Vitest para hooks y componentes",
        "Resolución de bugs en producción con monitoreo en New Relic",
        "Code review de PRs: refactors, tipado y cobertura de tests",
      ],
    },
    {
      title: "Co-Fundadora y COO",
      company: "Eduengine",
      period: "2019 – 2020",
      bullets: [
        "Emprendimiento edtech ganador de premios (Tigo Campus Party, Kuña Mbaretech, entre otros)",
      ],
    },
  ],
  skills: [
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
      items: ["Vitest", "CI/CD con GitHub Actions", "New Relic", "Git", "Cursor"],
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
  education: [
    {
      title: "Ingeniería en Informática",
      detail:
        "Facultad Politécnica — UNA · Graduada 2025. Tesis: modelo de clasificación para detectar depresión y ansiedad en usuarios de Telegram (NLP + Python; Random Forest, LightGBM, XGBoost). F1-Score 0,82 — 3.º lugar MentalRiskES 2024 (IberLEF).",
    },
  ],
  languages: [
    { label: "Español", level: "Nativo" },
    { label: "Inglés", level: "Básico-intermedio" },
  ],
  workStyle: [
    "Sprints con Scrum: planning, dailies y retros",
    "Squads junto a producto, diseño y desarrollo",
    "Features de punta a punta: UI, datos y estados",
  ],
} as const;

export const cvFileName = "gisselle-barreto-cv.pdf";
