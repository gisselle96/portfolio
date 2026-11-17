/**
 * PROTOTYPE data — recruiter-facing profile with evidence per skill.
 * Versions listed are only the ones verifiable in this portfolio's own stack;
 * itti production versions are intentionally not claimed until confirmed.
 */
import type { Locale } from "@/i18n/types";

type L = Record<Locale, string>;

export type EvidenceLevel = "production" | "project" | "academic";

export type SkillEvidence = {
  name: string;
  aliases: readonly string[];
  group: L;
  level: EvidenceLevel;
  years?: string;
  version?: string;
  where: L;
};

export const levelLabel: Record<EvidenceLevel, L> = {
  production: { es: "Producción", en: "Production" },
  project: { es: "Proyecto propio", en: "Own project" },
  academic: { es: "Académico", en: "Academic" },
};

const web: L = { es: "Frontend", en: "Frontend" };
const quality: L = { es: "Calidad y entrega", en: "Quality & delivery" };
const arch: L = { es: "Arquitectura", en: "Architecture" };
const ai: L = { es: "IA en desarrollo", en: "AI in development" };
const collab: L = { es: "Colaboración", en: "Collaboration" };
const data: L = { es: "Datos y ML", en: "Data & ML" };

export const skillEvidence: readonly SkillEvidence[] = [
  {
    name: "React",
    aliases: ["react", "react.js", "reactjs", "hooks"],
    group: web,
    level: "production",
    years: "3+",
    version: "React 19 · portfolio",
    where: {
      es: "itti: features de producto de punta a punta",
      en: "itti: end-to-end product features",
    },
  },
  {
    name: "Next.js",
    aliases: ["next", "next.js", "nextjs", "app router", "ssr"],
    group: web,
    level: "production",
    years: "3+",
    version: "Next.js 16 · App Router · portfolio",
    where: {
      es: "itti: migré 3 portales a Next.js",
      en: "itti: migrated 3 portals to Next.js",
    },
  },
  {
    name: "TypeScript",
    aliases: ["typescript", "ts", "tipado", "typed"],
    group: web,
    level: "production",
    years: "3+",
    version: "TypeScript 5 · portfolio",
    where: {
      es: "itti: tipado estricto y code review de tipos",
      en: "itti: strict typing and type-focused reviews",
    },
  },
  {
    name: "JavaScript",
    aliases: ["javascript", "js", "es6", "ecmascript"],
    group: web,
    level: "production",
    years: "3+",
    where: { es: "itti y proyectos previos", en: "itti and earlier projects" },
  },
  {
    name: "HTML / CSS",
    aliases: ["html", "css", "html5", "css3", "responsive"],
    group: web,
    level: "production",
    years: "3+",
    where: { es: "UI de producto responsive", en: "Responsive product UI" },
  },
  {
    name: "Tailwind CSS",
    aliases: ["tailwind", "tailwindcss"],
    group: web,
    level: "project",
    version: "Tailwind 4 · portfolio",
    where: { es: "Este portafolio", en: "This portfolio" },
  },
  {
    name: "TanStack Query",
    aliases: ["tanstack", "react query", "tanstack query", "react-query"],
    group: web,
    level: "production",
    where: {
      es: "itti: caché, invalidación y estados de red",
      en: "itti: cache, invalidation, network states",
    },
  },
  {
    name: "Zustand",
    aliases: ["zustand", "state management", "estado global"],
    group: web,
    level: "production",
    where: {
      es: "itti: estado del cliente en Admin y Business Portal",
      en: "itti: client state in the Admin and Business portals",
    },
  },
  {
    name: "Zod",
    aliases: ["zod", "schema validation", "validación"],
    group: web,
    level: "production",
    where: {
      es: "itti: validación de formularios y datos de API en Admin y Business Portal",
      en: "itti: form and API data validation in the Admin and Business portals",
    },
  },
  {
    name: "Design Systems",
    aliases: ["design system", "design systems", "design tokens", "component library", "ui library"],
    group: arch,
    level: "production",
    where: {
      es: "itti: componentes y tokens en monorepo compartido",
      en: "itti: components and tokens in a shared monorepo",
    },
  },
  {
    name: "Monorepo",
    aliases: ["monorepo", "turborepo", "nx"],
    group: arch,
    level: "production",
    where: { es: "itti: design system web", en: "itti: web design system" },
  },
  {
    name: "BFF / API Gateway",
    aliases: ["bff", "api gateway", "microservices", "microservicios", "rest", "api rest", "rest api", "apis"],
    group: arch,
    level: "production",
    where: {
      es: "itti: integración frontend con microservicios",
      en: "itti: frontend integration with microservices",
    },
  },
  {
    name: "Vitest",
    aliases: ["vitest", "unit test", "unit testing", "tests unitarios", "testing", "testing library", "tdd"],
    group: quality,
    level: "production",
    version: "Vitest 5 + Testing Library · portfolio",
    where: {
      es: "itti: tests de hooks y componentes",
      en: "itti: hook and component tests",
    },
  },
  {
    name: "QA testing",
    aliases: ["qa", "quality assurance", "manual testing", "functional testing", "usability", "usabilidad", "pruebas"],
    group: quality,
    level: "production",
    years: "1.5",
    where: {
      es: "itti: QA Tester ene 2022 – jul 2023",
      en: "itti: QA Tester Jan 2022 – Jul 2023",
    },
  },
  {
    name: "Code review",
    aliases: ["code review", "pull request", "pr review", "revisión de código"],
    group: quality,
    level: "production",
    where: {
      es: "itti: refactors, tipado y cobertura",
      en: "itti: refactors, typing, coverage",
    },
  },
  {
    name: "CI/CD · GitHub Actions",
    aliases: ["ci/cd", "ci", "cd", "github actions", "pipelines"],
    group: quality,
    level: "production",
    where: { es: "itti: entrega continua", en: "itti: continuous delivery" },
  },
  {
    name: "New Relic",
    aliases: ["new relic", "observability", "observabilidad", "monitoring", "monitoreo"],
    group: quality,
    level: "production",
    where: {
      es: "itti: más de 50 bugs resueltos en producción",
      en: "itti: 50+ production bugs fixed",
    },
  },
  {
    name: "Git",
    aliases: ["git", "github", "gitlab", "bitbucket"],
    group: collab,
    level: "production",
    years: "3+",
    where: { es: "GitHub, GitLab, Bitbucket", en: "GitHub, GitLab, Bitbucket" },
  },
  {
    name: "Scrum / Agile",
    aliases: ["scrum", "agile", "ágil", "agil", "sprints", "jira", "kanban"],
    group: collab,
    level: "production",
    where: {
      es: "itti: squads con producto y diseño",
      en: "itti: squads with product and design",
    },
  },
  {
    name: "Figma",
    aliases: ["figma", "ux", "ui/ux", "ux/ui"],
    group: collab,
    level: "production",
    where: { es: "Handoff con diseño", en: "Design handoff" },
  },
  {
    name: "Cursor",
    aliases: ["cursor", "ai", "ia", "ai tools", "ai-assisted", "desarrollo asistido por ia"],
    group: ai,
    level: "production",
    where: {
      es: "itti: desarrollo asistido por IA con revisión de cada diff",
      en: "itti: AI-assisted development, every diff reviewed",
    },
  },
  {
    name: "Spec-driven development",
    aliases: ["spec-driven", "specs", "spec driven"],
    group: ai,
    level: "production",
    where: {
      es: "itti: desarrollo guiado por specs (spec como contexto)",
      en: "itti: spec-driven development (spec as context)",
    },
  },
  {
    name: "Python · NLP",
    aliases: ["python", "nlp", "machine learning", "ml", "scikit-learn", "xgboost", "lightgbm"],
    group: data,
    level: "academic",
    where: {
      es: "Tesis: F1 0,82 · 3.º lugar MentalRiskES 2024",
      en: "Thesis: F1 0.82 · 3rd place MentalRiskES 2024",
    },
  },
  {
    name: "SQL · NoSQL",
    aliases: ["postgresql", "postgres", "sql", "mongodb", "nosql"],
    group: data,
    level: "academic",
    where: { es: "PostgreSQL y MongoDB", en: "PostgreSQL and MongoDB" },
  },
  {
    name: "Angular · Java",
    aliases: ["angular", "java"],
    group: web,
    level: "academic",
    where: { es: "Formación universitaria", en: "University coursework" },
  },
];
