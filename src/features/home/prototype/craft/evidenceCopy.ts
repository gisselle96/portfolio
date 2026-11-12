/**
 * PROTOTYPE copy — Evidence variant (ES/EN).
 * Every claim here comes from her CV; no invented metrics, clients, or tools.
 */
import type { Locale } from "@/i18n/types";

const es = {
  nav: {
    work: "Trabajo",
    journey: "Trayectoria",
    ai: "IA",
    stack: "Stack",
    contact: "Contacto",
  },
  hero: {
    kicker: "Software Engineer · Frontend Developer",
    headline: "Construyo el frontend de productos fintech, del diseño a producción.",
    lead: "Casi 5 años en itti: empecé en QA y hoy desarrollo con React, Next.js y TypeScript. Migro plataformas, cierro features de punta a punta, sumo al design system y resuelvo lo que se rompe en producción.",
    chips: ["Abierta a remoto", "Paraguay · UTC-3"],
    ctaWork: "Ver mi trabajo",
    ctaCv: "Descargar CV",
    ctaAts: "CV para ATS",
  },
  work: {
    kicker: "01 · Trabajo",
    title: "Qué tipo de problemas resuelvo.",
    intro:
      "Trabajo en productos internos de una fintech, así que no muestro código ni datos. Cada caso cuenta qué hice y trae una demo que reproduce el patrón de UI, no el producto.",
    demoNote: "Demo interactiva · patrón de UI, sin datos reales",
    didLabel: "Qué hice",
    shortLabel: "En corto",
    cases: [
      {
        tag: "Migración · Datos",
        title: "Plataformas de gestión",
        summary:
          "Pantallas operativas con listados densos, filtros y formularios: el tipo de UI donde un estado mal resuelto se nota en cada clic.",
        did: [
          "Migré plataformas web existentes a React, Next.js y TypeScript, reescribiendo la lógica y no solo la capa visual.",
          "Conecté el frontend a microservicios a través de BFF y API Gateway, con TanStack Query para caché e invalidación.",
          "Diseñé estados de carga, vacío y error explícitos para que cada pantalla diga qué está pasando.",
        ],
        short: "Más de 50 bugs de producción resueltos en esas plataformas.",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query", "BFF · API Gateway"],
      },
      {
        tag: "Features · Flujos",
        title: "Features de punta a punta",
        summary:
          "Flujos con varios pasos, validación y confirmación, construidos junto a producto, diseño, backend y QA.",
        did: [
          "Tomo la feature desde el diseño en Figma hasta producción: UI, validaciones, estados y contrato con la API.",
          "Pienso los casos borde antes de abrir el PR; es lo que me dejó mi etapa en QA.",
          "Uso desarrollo asistido por IA guiado por specs, y reviso cada diff antes de mergear.",
        ],
        short: "La feature completa en el mismo entregable: UI, datos, estados y tests.",
        stack: ["React", "TypeScript", "Figma", "Cursor", "Scrum"],
      },
      {
        tag: "Calidad · Design system",
        title: "Design system y calidad de código",
        summary:
          "Componentes y tokens compartidos entre productos, con tests y revisión para que crecer no rompa lo que ya funciona.",
        did: [
          "Construyo componentes reutilizables sobre el design system en lugar de estilos sueltos por pantalla.",
          "Escribo tests unitarios con Vitest para hooks y componentes, y acompañé al equipo en su adopción.",
          "Hago code review con foco en tipado, refactors y cobertura; en producción, rastreo y cierro bugs con New Relic.",
        ],
        short: "Componentes reutilizables, Vitest y code review con tipado.",
        stack: ["Design System", "Vitest", "Code review", "New Relic"],
      },
    ],
  },
  journey: {
    kicker: "02 · Trayectoria",
    title: "De probar el producto a construirlo.",
    intro: "Cada etapa me dejó algo que hoy uso al programar.",
    steps: [
      {
        period: "Jul 2023 – hoy",
        role: "Software Engineer (Frontend)",
        org: "itti",
        body: "React, Next.js y TypeScript en producción: migraciones, features, design system, tests y code review.",
      },
      {
        period: "Ene 2022 – Jul 2023",
        role: "QA Tester",
        org: "itti",
        body: "Pruebas funcionales y de usabilidad de productos digitales. Aprendí a mirar el producto como lo usa la gente, y a encontrar dónde se rompe.",
      },
      {
        period: "2025",
        role: "Ingeniería en Informática",
        org: "Facultad Politécnica · UNA",
        body: "Tesis en NLP con Python (Random Forest, LightGBM, XGBoost): F1 0,82, equivalente al 3.º lugar de MentalRiskES 2024 (IberLEF).",
      },
      {
        period: "2019 – 2020",
        role: "Co-Fundadora y COO",
        org: "Eduengine",
        body: "Edtech premiada (Tigo Campus Party, Kuña Mbaretech y más). Aprendí a priorizar y a cerrar producto con un equipo chico.",
      },
    ],
  },
  ai: {
    kicker: "03 · IA",
    title: "IA aplicada a cómo construyo soluciones.",
    intro:
      "Ya no arranco una feature escribiendo código. Primero especifico, después planifico, delego el borrador a los agentes y reviso cada cambio. Lo que llega a producción sigue siendo mi responsabilidad. El método no cambia; las herramientas me adapto a las que use el equipo.",
    methodLabel: "Cómo trabajo con IA",
    steps: [
      {
        title: "Contexto",
        body: "Antes de pedir nada, junto el diseño de Figma, la historia de usuario y los casos borde. Mi etapa en QA me enseñó a buscar dónde se rompe antes de construir.",
      },
      {
        title: "Spec",
        body: "Escribo la spec: qué se construye, qué estados importan y qué queda fuera. Uso el formato o framework de specs que tenga el equipo. Sin spec aprobada no arranca ningún agente.",
      },
      {
        title: "Plan",
        body: "La spec se divide en tareas chicas, y cada una dice cómo comprobar que está lista. Así el agente trabaja con contexto, no con un prompt suelto.",
      },
      {
        title: "Construcción",
        body: "Con el asistente o agente que use el equipo, la IA genera UI, hooks y tests a partir del plan. Elijo el modelo según el problema; no dejo que el modelo elija el diseño.",
      },
      {
        title: "Revisión",
        body: "Leo el diff completo, corro los tests y lo pruebo en el producto.",
      },
    ],
    toolsLabel: "Con qué trabajo hoy",
    tools: ["Cursor", "Spec Kit", "Claude", "Gemini", "Desarrollo guiado por specs"],
    closing: "La velocidad sin criterio no cuenta.",
  },
  stack: {
    kicker: "04 · Stack",
    title: "Con qué trabajo, y con qué evidencia.",
    intro:
      "Cada tecnología dice dónde la usé: producción es itti, proyecto propio es este sitio y académico es la facultad.",
  },
  practice: {
    kicker: "05 · Cómo trabajo",
    title: "Lo que podés esperar de mí en un equipo.",
    points: [
      {
        title: "Features completas",
        body: "UI, datos, estados y tests en el mismo entregable.",
      },
      {
        title: "Tipado y review",
        body: "TypeScript como contrato entre pantallas, hooks y API; code review con foco en refactors y cobertura.",
      },
      {
        title: "Ojo de QA",
        body: "Pruebo lo que construyo como lo probaría alguien que busca romperlo.",
      },
      {
        title: "Producción no es el final",
        body: "Monitoreo con New Relic, reproduzco el bug y lo cierro con el equipo.",
      },
    ],
  },
  contactBio:
    "Busco roles de Frontend o Software Engineer con React, Next.js y TypeScript, remoto o desde Paraguay (UTC-3). Si tu equipo construye producto y le importa la calidad, escribime.",
};

type EvidenceCopy = typeof es;

const en: EvidenceCopy = {
  nav: {
    work: "Work",
    journey: "Journey",
    ai: "AI",
    stack: "Stack",
    contact: "Contact",
  },
  hero: {
    kicker: "Software Engineer · Frontend Developer",
    headline: "I build the frontend of fintech products, from design to production.",
    lead: "Almost 5 years at itti: I started in QA and now build with React, Next.js, and TypeScript. I migrate platforms, ship features end to end, contribute to the design system, and fix what breaks in production.",
    chips: ["Open to remote", "Paraguay · UTC-3"],
    ctaWork: "See my work",
    ctaCv: "Download CV",
    ctaAts: "ATS-friendly CV",
  },
  work: {
    kicker: "01 · Work",
    title: "The kind of problems I solve.",
    intro:
      "I work on internal fintech products, so I don’t show code or data. Each case explains what I did and comes with a demo of the UI pattern, not the product.",
    demoNote: "Interactive demo · UI pattern, no real data",
    didLabel: "What I did",
    shortLabel: "In short",
    cases: [
      {
        tag: "Migration · Data",
        title: "Operations platforms",
        summary:
          "Operational screens with dense listings, filters, and forms: the kind of UI where a poorly handled state shows on every click.",
        did: [
          "Migrated existing web platforms to React, Next.js, and TypeScript, rewriting the logic, not just the visual layer.",
          "Connected the frontend to microservices through a BFF and API Gateway, with TanStack Query for caching and invalidation.",
          "Designed explicit loading, empty, and error states so every screen tells you what’s going on.",
        ],
        short: "50+ production bugs fixed on those platforms.",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query", "BFF · API Gateway"],
      },
      {
        tag: "Features · Flows",
        title: "End-to-end features",
        summary:
          "Multi-step flows with validation and confirmation, built with product, design, backend, and QA.",
        did: [
          "I take a feature from the Figma design to production: UI, validation, states, and the API contract.",
          "I think through edge cases before opening the PR; that’s what my QA years left me.",
          "I use spec-driven, AI-assisted development and review every diff before merging.",
        ],
        short: "The whole feature in one delivery: UI, data, states, and tests.",
        stack: ["React", "TypeScript", "Figma", "Cursor", "Scrum"],
      },
      {
        tag: "Quality · Design system",
        title: "Design system and code quality",
        summary:
          "Components and tokens shared across products, with tests and reviews so growth doesn’t break what already works.",
        did: [
          "I build reusable components on the design system instead of one-off styles per screen.",
          "I write unit tests with Vitest for hooks and components, and helped the team adopt them.",
          "I review code with a focus on typing, refactoring, and coverage; in production, I trace and close bugs with New Relic.",
        ],
        short: "Reusable components, Vitest, and typed code review.",
        stack: ["Design System", "Vitest", "Code review", "New Relic"],
      },
    ],
  },
  journey: {
    kicker: "02 · Journey",
    title: "From testing the product to building it.",
    intro: "Each stage left me something I use when I code today.",
    steps: [
      {
        period: "Jul 2023 – now",
        role: "Software Engineer (Frontend)",
        org: "itti",
        body: "React, Next.js, and TypeScript in production: migrations, features, design system, tests, and code review.",
      },
      {
        period: "Jan 2022 – Jul 2023",
        role: "QA Tester",
        org: "itti",
        body: "Functional and usability testing of digital products. I learned to see the product the way people use it, and to find where it breaks.",
      },
      {
        period: "2025",
        role: "B.Sc. in Computer Engineering",
        org: "Facultad Politécnica · UNA",
        body: "NLP thesis in Python (Random Forest, LightGBM, XGBoost): F1 0.82, equivalent to 3rd place in MentalRiskES 2024 (IberLEF).",
      },
      {
        period: "2019 – 2020",
        role: "Co-Founder & COO",
        org: "Eduengine",
        body: "Award-winning edtech (Tigo Campus Party, Kuña Mbaretech, and more). I learned to prioritize and ship product with a small team.",
      },
    ],
  },
  ai: {
    kicker: "03 · AI",
    title: "AI applied to how I build solutions.",
    intro:
      "I no longer start a feature by writing code. I specify first, then plan, hand the draft to agents, and review every change. What reaches production is still my responsibility. The method stays the same; I adapt to whatever tools the team uses.",
    methodLabel: "How I work with AI",
    steps: [
      {
        title: "Context",
        body: "Before asking for anything, I gather the Figma design, the user story, and the edge cases. My QA years taught me to look for where it breaks before building.",
      },
      {
        title: "Spec",
        body: "I write the spec: what gets built, which states matter, and what’s out of scope. I use whatever spec format or framework the team has. No approved spec, no agent.",
      },
      {
        title: "Plan",
        body: "The spec is split into small tasks, each with a way to check it’s done. That way the agent works with context, not a loose prompt.",
      },
      {
        title: "Build",
        body: "With whatever assistant or agent the team uses, AI generates UI, hooks, and tests from the plan. I pick the model for the problem; the model doesn’t pick the design.",
      },
      {
        title: "Review",
        body: "I read the full diff, run the tests, and try it in the product.",
      },
    ],
    toolsLabel: "What I use today",
    tools: ["Cursor", "Spec Kit", "Claude", "Gemini", "Spec-driven development"],
    closing: "Speed without judgment doesn’t count.",
  },
  stack: {
    kicker: "04 · Stack",
    title: "What I work with, and the evidence.",
    intro:
      "Each technology says where I used it: production is itti, own project is this site, and academic is university.",
  },
  practice: {
    kicker: "05 · How I work",
    title: "What you can expect from me on a team.",
    points: [
      {
        title: "Complete features",
        body: "UI, data, states, and tests in the same delivery.",
      },
      {
        title: "Typing and review",
        body: "TypeScript as the contract between screens, hooks, and API; code reviews focused on refactoring and coverage.",
      },
      {
        title: "A QA eye",
        body: "I test what I build the way someone trying to break it would.",
      },
      {
        title: "Production isn’t the end",
        body: "I monitor with New Relic, reproduce the bug, and close it with the team.",
      },
    ],
  },
  contactBio:
    "I’m looking for Frontend or Software Engineer roles with React, Next.js, and TypeScript, remote or from Paraguay (UTC-3). If your team builds product and cares about quality, get in touch.",
};

export const evidenceCopy: Record<Locale, EvidenceCopy> = { es, en };
