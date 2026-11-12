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

/** Common job-post terms outside the current stack, shown neutrally as gaps. */
export const outsideStack: readonly { name: string; aliases: readonly string[] }[] = [
  { name: "Vue", aliases: ["vue", "vue.js", "nuxt"] },
  { name: "React Native", aliases: ["react native"] },
  { name: "GraphQL", aliases: ["graphql", "apollo"] },
  { name: "Node.js", aliases: ["node", "node.js", "nodejs", "express", "nestjs"] },
  { name: "Redux", aliases: ["redux", "zustand"] },
  { name: "Storybook", aliases: ["storybook"] },
  { name: "E2E (Cypress / Playwright)", aliases: ["cypress", "playwright", "e2e"] },
  { name: "Cloud (AWS / GCP)", aliases: ["aws", "gcp", "azure", "cloud"] },
  { name: "Docker", aliases: ["docker", "kubernetes", "k8s"] },
];

export const highlights: readonly { value: string; label: L }[] = [
  { value: "~5", label: { es: "años en fintech (itti), 3+ en frontend con React, Next.js y TypeScript", en: "years in fintech (itti), 3+ in frontend with React, Next.js and TypeScript" } },
  { value: "3", label: { es: "portales web migrados a Next.js con reescritura completa de la lógica", en: "web portals migrated to Next.js with a full logic rewrite" } },
  { value: "50+", label: { es: "bugs resueltos en producción con New Relic", en: "production bugs fixed with New Relic" } },
  { value: "3.º", label: { es: "lugar MentalRiskES 2024 (IberLEF) · F1 0,82", en: "place MentalRiskES 2024 (IberLEF) · F1 0.82" } },
];

export const presets: readonly { label: L; text: string }[] = [
  {
    label: { es: "Frontend React", en: "Frontend React" },
    text: "Frontend Engineer with React, TypeScript, REST APIs, unit testing, CI/CD, Agile/Scrum, Figma. Nice to have: Next.js, Storybook, Redux.",
  },
  {
    label: { es: "Next.js Engineer", en: "Next.js Engineer" },
    text: "Software Engineer Next.js App Router, SSR, TypeScript, TanStack Query, design system, monorepo, Vitest, GitHub Actions, observability with New Relic.",
  },
  {
    label: { es: "Fullstack JS", en: "Fullstack JS" },
    text: "Fullstack Developer: React, Node.js, GraphQL, PostgreSQL, Docker, AWS, Cypress, Git, Scrum. AI tools like Copilot are a plus.",
  },
];

function normalize(text: string) {
  const spaced = ` ${text.toLowerCase().replace(/[^\p{L}\p{N}+#./-]+/gu, " ")} `;
  const trimmed = spaced.replace(/[./-]+(?=\s)/g, "");
  return `${trimmed} ${trimmed.replace(/\//g, " ")} `;
}

function hits(haystack: string, aliases: readonly string[]) {
  return aliases.some((alias) => haystack.includes(` ${alias.toLowerCase()} `));
}

export function matchJobPost(text: string) {
  const haystack = normalize(text);
  const matched = skillEvidence.filter((skill) => hits(haystack, skill.aliases));
  const gaps = outsideStack.filter((term) => hits(haystack, term.aliases));
  const total = matched.length + gaps.length;
  const coverage = total === 0 ? 0 : Math.round((matched.length / total) * 100);
  return { matched, gaps, coverage };
}

export function plainTextProfile(locale: Locale) {
  const es = locale === "es";
  const lines = [
    "Gisselle Barreto",
    es
      ? "Software Engineer Frontend · React · Next.js · TypeScript"
      : "Frontend Software Engineer · React · Next.js · TypeScript",
    es
      ? "Paraguay (UTC−3) · Remoto · gibasa96@gmail.com"
      : "Paraguay (UTC−3) · Remote · gibasa96@gmail.com",
    "",
    es ? "EXPERIENCIA" : "EXPERIENCE",
    es
      ? "Software Engineer, itti S.A.E.C.A. (Jul 2023 – Actualidad)"
      : "Software Engineer, itti S.A.E.C.A. (Jul 2023 – Present)",
    es
      ? "- Migré 3 portales web a React, Next.js y TypeScript con reescritura completa de la lógica"
      : "- Migrated 3 web portals to React, Next.js and TypeScript with a full logic rewrite",
    es
      ? "- Resolví más de 50 bugs en producción con monitoreo en New Relic"
      : "- Fixed 50+ production bugs with New Relic monitoring",
    ...skillEvidence
      .filter((skill) => skill.level === "production")
      .map((skill) => `- ${skill.name}: ${skill.where[locale]}`),
    es
      ? "QA Tester, itti S.A.E.C.A. (Ene 2022 – Jul 2023) · pruebas funcionales y de usabilidad"
      : "QA Tester, itti S.A.E.C.A. (Jan 2022 – Jul 2023) · functional and usability testing",
    es
      ? "Co-Fundadora y COO, Eduengine (2019 – 2020) · edtech premiado"
      : "Co-Founder & COO, Eduengine (2019 – 2020) · award-winning edtech",
    "",
    es ? "EDUCACIÓN" : "EDUCATION",
    es
      ? "Ingeniería en Informática, FP-UNA (2025). Tesis NLP: F1 0,82, 3.º lugar MentalRiskES 2024."
      : "Computer Engineering, FP-UNA (2025). NLP thesis: F1 0.82, 3rd place MentalRiskES 2024.",
    "",
    "SKILLS",
    skillEvidence.map((skill) => skill.name).join(", "),
  ];
  return lines.join("\n");
}
