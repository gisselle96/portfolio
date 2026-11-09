export const profile = {
  name: "Gisselle Barreto",
  role: "Software Engineer",
  tagline:
    "Backend y sistemas distribuidos para productos reales. Experiencia en movilidad, APIs y portales.",
  email: "hola@gissellebarreto.dev",
  location: "Latam · Remoto",
  links: {
    github: "https://github.com/gisselle96",
    linkedin: "https://www.linkedin.com/",
  },
};

export const projects = [
  {
    title: "Route Quote API",
    summary:
      "API personal de cotización de viajes: distancia, pricing y estados. Patrón inspirado en dominios de movilidad, con datos mock.",
    stack: ["Node", "Express", "MongoDB", "Redis"],
    href: "#",
    status: "En construcción",
  },
  {
    title: "Ops BFF Demo",
    summary:
      "BFF liviano delante de servicios mock (auth, trips, billing). Muestra agregación de datos y contratos limpios para un portal.",
    stack: ["Next.js", "TypeScript", "Zod"],
    href: "#",
    status: "En construcción",
  },
  {
    title: "Event Worker Kit",
    summary:
      "Consumer de eventos con retries, idempotencia y dead-letter. Pieza reusable para pipelines asíncronos.",
    stack: ["Node", "KafkaJS", "Redis"],
    href: "#",
    status: "En construcción",
  },
];

export const caseStudy = {
  title: "Plataforma de movilidad",
  clientLabel: "Cliente confidencial · vía consultora",
  role: "Desarrollo backend / full-stack en ecosistema de microservicios",
  problem:
    "Producto de movilidad con alta carga operativa: viajes, conductores, pasajeros, facturación y portales admin/business. El desafío era entregar features confiables sin romper flujos críticos en producción.",
  approach: [
    "APIs REST y eventos asíncronos para desacoplar dominios",
    "Trabajo en auth, datos de viaje, integraciones y portales",
    "Tests, lint y releases controlados en un monorepo de servicios",
    "Observabilidad y cuidado de latencia en flujos sensibles a ubicación",
  ],
  impact:
    "Contribuí a estabilizar y evolucionar dominios core del producto. Completá con métricas concretas cuando las tengas (tiempo de entrega, bugs evitados, latencia, cobertura).",
  stack: [
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Kafka",
    "Socket.IO",
    "GKE",
    "Stripe",
  ],
  note: "Sin código, capturas ni detalles internos del cliente. Solo narrativa de impacto y stack genérico.",
};

export const stackGroups = [
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST", "Auth JWT", "Cron / jobs"],
  },
  {
    label: "Datos & mensajería",
    items: ["MongoDB", "Redis", "Kafka", "Socket.IO"],
  },
  {
    label: "Cloud & producto",
    items: ["GKE", "Docker", "Stripe", "New Relic", "Feature flags"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
];
