export const profile = {
  name: "Gisselle Barreto",
  role: "Frontend Engineer",
  tagline:
    "Construyo interfaces de producto para operaciones reales: tablas, formularios, mapas y flujos complejos.",
  email: "hola@gissellebarreto.dev",
  location: "Latam · Remoto",
  links: {
    github: "https://github.com/gisselle96",
    linkedin: "https://www.linkedin.com/in/gisselle-barreto-8b916a216/",
  },
};

export const projects = [
  {
    title: "Ops Console UI",
    summary:
      "Panel de operaciones con listados, filtros, acciones por fila y estados de carga. Inspirado en portales admin, con datos mock.",
    stack: ["React", "TypeScript", "TanStack Table", "Tailwind"],
    href: "#",
    status: "En construcción",
  },
  {
    title: "Business Trips Board",
    summary:
      "Vista de viajes para un portal business: detalle, mapa de ruta y formularios con validación. Todo con APIs fake.",
    stack: ["React", "Vite", "React Hook Form", "Maps"],
    href: "#",
    status: "En construcción",
  },
  {
    title: "Design System Playground",
    summary:
      "Catálogo de componentes reutilizables (inputs, dialogs, tables) para prototipar pantallas de producto rápido.",
    stack: ["React", "Radix", "CVA", "Story-ready"],
    href: "#",
    status: "En construcción",
  },
];

export const caseStudy = {
  title: "Portales de movilidad",
  clientLabel: "Cliente confidencial · vía consultora",
  role: "Frontend en portales de una plataforma de movilidad",
  problem:
    "Equipos internos y empresas clientes necesitan operar viajes, conductores, pasajeros, tarifas, facturación y permisos desde interfaces confiables. El desafío era entregar pantallas claras, performantes y mantenibles sobre un producto en evolución.",
  approach: [
    "Features de producto en React + TypeScript: listados, formularios, auth y navegación",
    "Integración con APIs vía React Query, tablas complejas y estados de UI consistentes",
    "Mapas, i18n y design system compartido para mantener coherencia visual",
    "Calidad con lint, typecheck, tests y flujos de release en portales Vite",
  ],
  impact:
    "Contribuí a evolucionar los portales operativos del producto. Completá con logros concretos (features entregadas, rediseños, migraciones, bugs evitados) cuando los tengas.",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "TanStack Query",
    "TanStack Table",
    "React Hook Form",
    "Radix UI",
    "Tailwind",
    "i18next",
    "Google Maps",
  ],
  note: "Sin código, capturas ni detalles internos del cliente. Solo narrativa de impacto y stack genérico.",
};

export const stackGroups = [
  {
    label: "UI & producto",
    items: ["React", "TypeScript", "Vite", "Next.js", "Tailwind"],
  },
  {
    label: "Estado & datos",
    items: ["TanStack Query", "TanStack Table", "React Hook Form", "Axios", "Redux Toolkit"],
  },
  {
    label: "Componentes & UX",
    items: ["Radix UI", "Design systems", "i18next", "Maps", "Socket.IO client"],
  },
  {
    label: "Calidad",
    items: ["Vitest", "ESLint", "Prettier", "Husky", "Yarn"],
  },
];
