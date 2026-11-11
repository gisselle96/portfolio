import type { Locale } from "./types";

type MessageTree = {
  [key: string]: string | readonly string[] | MessageTree | readonly MessageTree[];
};

const es = {
  brandLabel: "Inicio",
  nav: {
    welcome: "Bienvenida",
    about: "Sobre mí",
    projects: "Trabajo",
    skills: "Habilidades",
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
      "Construyo interfaces de producto con React, Next.js y TypeScript, junto a equipos con los que disfruto trabajar.",
    aboutCta: "Sobre mí",
    projectsCta: "Ver mi trabajo",
  },
  about: {
    kicker: "02 · Sobre mí",
    title: "Frontend de producto, de Paraguay.",
    paragraphs: [
      "Soy Software Engineer enfocada en frontend. Hace más de 3 años construyo apps web con React, Next.js y TypeScript: listados, formularios, estados de carga, design systems e integración con APIs.",
      "En itti trabajo en squads de producto. Participé en migraciones a Next.js, desarrollo features de punta a punta con TanStack Query y design system compartido, escribo tests con Vitest y hago code review con foco en tipado y refactors.",
      "También resuelvo bugs en producción con New Relic y entrego de forma continua junto a diseño y backend.",
      "Antes fui co-fundadora de Eduengine, un edtech premiado (Tigo Campus Party, Kuña Mbaretech y más). Me importa el equipo tanto como el producto.",
    ],
    downloadCv: "Descargar CV",
    experienceTitle: "Trayectoria",
    experienceLabel: "Frontend en producto",
    educationTitle: "Educación",
    educationDegree: "Ingeniería en Informática",
    educationSchool: "Facultad Politécnica — UNA · Graduada 2025",
    educationDetail:
      "Tesis con NLP e ingeniería de características en Python (Random Forest, LightGBM, XGBoost) para detectar depresión y ansiedad en usuarios de Telegram. Desafío MentalRiskES 2024 (IberLEF).",
    workStyleTitle: "Cómo trabajo",
    workStyle: [
      "Sprints con Scrum: planning, dailies y retros",
      "Squads con producto, diseño y desarrollo",
      "Features de punta a punta: UI, datos y estados",
      "Code review con tipado, refactors y cobertura",
    ],
    roles: [
      {
        title: "Software Engineer",
        company: "itti S.A.E.",
        period: "Jul 2023 – Actualidad",
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        points: [
          "Migraciones frontend a React, Next.js y TypeScript",
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
          "Operación y producto como parte del equipo fundador",
        ],
      },
    ],
  },
  projects: {
    kicker: "03 · Trabajo",
    title: "Productos en los que construí.",
    intro:
      "Del más reciente al primero. Varios son de uso interno: cuento qué hice, sin exponer código ni datos de cliente.",
    items: [
      {
        title: "Admin Web App",
        summary:
          "App interna de administración: listados densos, filtros, formularios, estados de carga e integración con APIs.",
        highlights: [
          "Participé en la migración a Next.js con design system compartido.",
          "Construí flujos de listado y formulario de punta a punta, con estados de carga y errores claros.",
          "Integré datos vía BFF/API Gateway usando TanStack Query.",
        ],
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        href: "",
        status: "Uso interno",
      },
      {
        title: "Business Web App",
        summary:
          "Producto B2B para empresas: acceso, operación y flujos de trabajo sobre una UI compartida.",
        highlights: [
          "Desarrollé pantallas y flujos de punta a punta sobre el design system.",
          "Trabajé codo a codo con diseño y backend para cerrar features sin fricción.",
          "Mantuve tipado estricto y componentes reutilizables entre módulos.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Design System"],
        href: "",
        status: "Uso interno",
      },
      {
        title: "Design System Web",
        summary:
          "Monorepo de design system: componentes, tokens y base de UI para varias apps del producto.",
        highlights: [
          "Aporté componentes y tokens reutilizables para unificar la UI.",
          "Facilité que varios equipos consumieran la misma base sin reinventar estilos.",
          "Prioricé tipado, API de componentes clara y consistencia visual.",
        ],
        stack: ["React", "TypeScript", "Monorepo", "Design Tokens"],
        href: "",
        status: "Uso interno",
      },
    ],
  },
  skills: {
    kicker: "03 · Habilidades",
    title: "Con qué trabajo.",
    intro:
      "React y Next.js en el centro. Alrededor: TypeScript, tests, CI/CD, monitoreo, IA de desarrollo y contexto de producto.",
    groups: [
      {
        label: "Web",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "TanStack Query",
          "Design Systems",
        ],
      },
      {
        label: "Calidad y entrega",
        items: [
          "Vitest",
          "CI/CD",
          "GitHub Actions",
          "New Relic",
          "Git",
          "Code review",
        ],
      },
      {
        label: "IA en desarrollo",
        items: [
          "Cursor",
          "Desarrollo asistido por IA",
          "Spec-driven development",
        ],
      },
      {
        label: "Colaboración",
        items: ["GitHub", "GitLab", "Bitbucket", "Jira", "Figma", "Scrum"],
      },
      {
        label: "También",
        items: [
          "MongoDB",
          "PostgreSQL",
          "Angular",
          "Python",
          "Java",
          "NLP",
          "UX/UI",
        ],
      },
    ],
  },
  contact: {
    kicker: "05 · Contacto",
    title: "Hablemos.",
    intro:
      "Vivo en Paraguay (UTC−3). Abierta a trabajo remoto. Completá el formulario y te respondo pronto.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje",
    messagePlaceholder: "Contame sobre el rol o proyecto",
    send: "Escribime",
    sending: "Enviando...",
    success: "Mensaje enviado. Te respondo pronto.",
    captchaRequired: "No se pudo verificar el captcha. Probá de nuevo.",
    networkError: "Error de red. Intentá de nuevo.",
    captchaNotice: "Este sitio está protegido por reCAPTCHA.",
  },
  footer: {
    portfolio: "Portafolio personal",
  },
  craft: {
    nav: {
      work: "Trabajo",
      ai: "IA",
      skills: "Skills",
      origin: "Origen",
      build: "Cómo construyo",
      contact: "Contacto",
    },
    hero: {
      kicker: "Software Engineer · Frontend",
      headline: "Construyo interfaces de producto que se sienten sólidas.",
      focus: "React · Next.js · TypeScript",
      support:
        "Features de punta a punta: listados, formularios, estados, design system e integración con APIs.",
      cta: "Ver cómo construyo",
    },
    work: {
      kicker: "01 · Trabajo",
      title: "Casos que construí.",
      intro:
        "Productos internos: cuento qué implementé yo, con demos anónimas del tipo de UI que entrego.",
      demoNote: "Demo interactiva · sin datos de cliente",
      cases: [
        {
          title: "Admin Web App",
          summary:
            "App de administración: listados densos, filtros, formularios y estados de carga conectados a APIs.",
          highlights: [
            "Implementé flujos de listado y formulario de punta a punta, con loading, vacío y error claros.",
            "Integré datos vía BFF/API Gateway con TanStack Query y tipado estricto.",
            "Participé en la migración a Next.js sobre un design system compartido.",
          ],
          stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
          status: "Uso interno",
        },
        {
          title: "Business Web App",
          summary:
            "Producto B2B: pantallas operativas y flujos de trabajo sobre una UI compartida.",
          highlights: [
            "Cerré features de punta a punta: UI, validación, estados y contrato con backend.",
            "Reutilicé componentes del design system manteniendo tipado estricto entre módulos.",
            "Alineé implementación con diseño para que el flujo llegue a producción sin fricción.",
          ],
          stack: ["React", "Next.js", "TypeScript", "Design System"],
          status: "Uso interno",
        },
        {
          title: "Design System Web",
          summary:
            "Monorepo de design system: tokens, componentes y base de UI para varias apps.",
          highlights: [
            "Aporté componentes y tokens reutilizables con API clara y tipada.",
            "Unifiqué estilos base para que varias apps consuman la misma fundación.",
            "Prioricé consistencia visual y refactors seguros al compartir UI.",
          ],
          stack: ["React", "TypeScript", "Monorepo", "Design Tokens"],
          status: "Uso interno",
        },
      ],
    },
    demos: {
      admin: {
        chrome: "product · listados",
        filtersLabel: "Filtros",
        filterAll: "Todos",
        filterActive: "Activos",
        filterError: "Con error",
        title: "Registros",
        loading: "Cargando…",
        empty: "No hay resultados para este filtro.",
        toggleLoading: "Simular loading",
        showData: "Mostrar datos",
        colId: "ID",
        colName: "Nombre",
        colStatus: "Estado",
        statusActive: "Activo",
        statusDraft: "Borrador",
        statusError: "Error",
      },
      form: {
        chrome: "product · formularios",
        stepData: "Datos",
        stepReview: "Revisión",
        stepDone: "Listo",
        nameLabel: "Nombre del flujo",
        namePlaceholder: "Ej. Alta de cliente",
        emailLabel: "Email de aviso",
        emailPlaceholder: "ops@empresa.com",
        nameError: "Ingresá un nombre.",
        emailError: "Ingresá un email válido.",
        next: "Continuar",
        back: "Volver",
        submit: "Confirmar",
        restart: "Otro flujo",
        reviewTitle: "Revisá antes de enviar",
        doneTitle: "Flujo creado",
        doneBody: "Así cierro formularios: validación, pasos claros y feedback.",
      },
      tokens: {
        chrome: "design system · tokens",
        colorsLabel: "Color",
        radiusLabel: "Radio",
        previewLabel: "Preview vivo",
        buttonLabel: "Acción primaria",
        inputPlaceholder: "Input con el token activo",
        hint: "Tocá un token: el componente reacciona al instante.",
      },
    },
    origin: {
      kicker: "04 · Origen",
      title: "Antes del producto, producto.",
      eduengineTitle: "Eduengine",
      eduengineBody:
        "Co-fundadora de un edtech premiado (Tigo Campus Party, Kuña Mbaretech y más). Aprendí a cerrar producto con poco, junto a un equipo chico.",
      thesisTitle: "Tesis · Ingeniería en Informática",
      thesisBody:
        "NLP e ingeniería de características en Python (Random Forest, LightGBM, XGBoost) para detectar depresión y ansiedad en Telegram. MentalRiskES 2024 (IberLEF).",
    },
    build: {
      kicker: "05 · Cómo construyo",
      title: "Práctica de ingeniería, no de slides.",
      intro:
        "Me importa que la feature llegue bien: tipada, testeable y observável en producción.",
      points: [
        {
          title: "Features de punta a punta",
          body: "UI, datos, estados de carga/error y el contrato con la API en el mismo entregable.",
        },
        {
          title: "Datos con TanStack Query",
          body: "Caché, invalidación y estados de red explícitos en listados y formularios.",
        },
        {
          title: "Vitest y code review",
          body: "Cobertura donde suma, tipado estricto y refactors que dejan el código más claro.",
        },
        {
          title: "Producción con New Relic",
          body: "Cuando algo falla, lo rastreo, lo reproduzco y lo cierro con el equipo.",
        },
      ],
    },
    ai: {
      kicker: "02 · IA en mi craft",
      title: "Spec primero. IA después. Merge mío.",
      intro:
        "Uso Cursor todos los días en itti. No es un atajo: es un flujo. La spec define el contexto; la IA acelera el borrador; yo reviso el diff y firmo el merge.",
      methodLabel: "Cómo lo uso",
      steps: [
        {
          title: "Spec primero",
          body: "Arranco con Spec-itti: la spec es el contexto del trabajo, no el chat. Ahí queda qué construir, qué estados importan y qué no entra en el alcance.",
        },
        {
          title: "La IA propone",
          body: "Con ese contexto, Cursor me acelera el primer borrador de UI, boilerplate, tests iniciales, refactors mecánicos y búsquedas en el codebase.",
        },
        {
          title: "Yo decido",
          body: "Defino la forma del componente, los estados, el contrato con backend y qué asserts importan. Lo frágil o ambiguo no se mergea por confianza en la IA.",
        },
        {
          title: "Merge con criterio",
          body: "Leo el diff completo. Si es un bug, lo reproduzco y lo valido en el producto. Si no entiendo el cambio, no sale.",
        },
      ],
      toolsLabel: "Con qué",
      tools: ["Cursor", "Claude", "Gemini", "Spec-itti (spec-driven)"],
      closing: "La velocidad sin criterio no cuenta.",
    },
    contactBio:
      "Software Engineer Frontend en itti (Paraguay, UTC−3). Abierta a trabajo remoto. Si buscás a alguien que construya interfaces de producto con React y TypeScript, escribime.",
  },
} as const satisfies MessageTree;

const en = {
  brandLabel: "Home",
  nav: {
    welcome: "Welcome",
    about: "About",
    projects: "Work",
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
      "I build product interfaces with React, Next.js, and TypeScript — with teams I enjoy working with.",
    aboutCta: "About me",
    projectsCta: "See my work",
  },
  about: {
    kicker: "02 · About",
    title: "Product frontend, from Paraguay.",
    paragraphs: [
      "I'm a Software Engineer focused on frontend. For 3+ years I've been building web apps with React, Next.js, and TypeScript: dense UIs, forms, loading states, design systems, and API integrations.",
      "At itti I work in product squads. I've taken part in Next.js migrations, ship end-to-end features with TanStack Query and a shared design system, write Vitest coverage, and do code reviews focused on typing and refactors.",
      "I also fix production bugs with New Relic and deliver continuously alongside design and backend.",
      "Previously I co-founded Eduengine, an award-winning edtech (Tigo Campus Party, Kuña Mbaretech, and more). I care about the team as much as the product.",
    ],
    downloadCv: "Download CV",
    experienceTitle: "Timeline",
    experienceLabel: "Frontend in product",
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
          "Frontend migrations to React, Next.js, and TypeScript",
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
          "Operations and product as part of the founding team",
        ],
      },
    ],
  },
  projects: {
    kicker: "03 · Work",
    title: "Products I've built on.",
    intro:
      "Most recent first. Several are internal: I share what I did, without exposing client code or data.",
    items: [
      {
        title: "Admin Web App",
        summary:
          "Internal admin app: dense listings, filters, forms, loading states, and API integration.",
        highlights: [
          "Took part in the Next.js migration with a shared design system.",
          "Built listing and form flows end to end, with clear loading and error states.",
          "Integrated data through a BFF/API Gateway using TanStack Query.",
        ],
        stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
        href: "",
        status: "Internal use",
      },
      {
        title: "Business Web App",
        summary:
          "B2B product for companies: access, operations, and workflows on a shared UI.",
        highlights: [
          "Shipped end-to-end screens and flows on the design system.",
          "Worked closely with design and backend so features landed smoothly.",
          "Kept strict typing and reusable components across modules.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Design System"],
        href: "",
        status: "Internal use",
      },
      {
        title: "Design System Web",
        summary:
          "Design system monorepo: components, tokens, and UI foundation across product apps.",
        highlights: [
          "Contributed reusable components and tokens to unify the UI.",
          "Helped multiple teams consume the same foundation without reinventing styles.",
          "Prioritized typing, a clear component API, and visual consistency.",
        ],
        stack: ["React", "TypeScript", "Monorepo", "Design Tokens"],
        href: "",
        status: "Internal use",
      },
    ],
  },
  skills: {
    kicker: "03 · Skills",
    title: "What I work with.",
    intro:
      "React and Next.js at the center. Around them: TypeScript, tests, CI/CD, monitoring, AI tooling, and product context.",
    groups: [
      {
        label: "Web",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "TanStack Query",
          "Design Systems",
        ],
      },
      {
        label: "Quality & delivery",
        items: [
          "Vitest",
          "CI/CD",
          "GitHub Actions",
          "New Relic",
          "Git",
          "Code review",
        ],
      },
      {
        label: "AI in development",
        items: [
          "Cursor",
          "AI-assisted development",
          "Spec-driven development",
        ],
      },
      {
        label: "Collaboration",
        items: ["GitHub", "GitLab", "Bitbucket", "Jira", "Figma", "Scrum"],
      },
      {
        label: "Also",
        items: [
          "MongoDB",
          "PostgreSQL",
          "Angular",
          "Python",
          "Java",
          "NLP",
          "UX/UI",
        ],
      },
    ],
  },
  contact: {
    kicker: "05 · Contact",
    title: "Let's talk.",
    intro:
      "Based in Paraguay (UTC−3). Open to remote work. Fill in the form and I’ll get back to you soon.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me about the role or project",
    send: "Write to me",
    sending: "Sending...",
    success: "Message sent. I’ll reply soon.",
    captchaRequired: "Captcha verification failed. Please try again.",
    networkError: "Network error. Please try again.",
    captchaNotice: "This site is protected by reCAPTCHA.",
  },
  footer: {
    portfolio: "Personal portfolio",
  },
  craft: {
    nav: {
      work: "Work",
      ai: "AI",
      skills: "Skills",
      origin: "Origin",
      build: "How I build",
      contact: "Contact",
    },
    hero: {
      kicker: "Software Engineer · Frontend",
      headline: "I build product interfaces that feel solid.",
      focus: "React · Next.js · TypeScript",
      support:
        "End-to-end features: listings, forms, states, design systems, and API integrations.",
      cta: "See how I build",
    },
    work: {
      kicker: "01 · Work",
      title: "Cases I built.",
      intro:
        "Internal products: I share what I implemented, with anonymous demos of the UI patterns I ship.",
      demoNote: "Interactive demo · no client data",
      cases: [
        {
          title: "Admin Web App",
          summary:
            "Admin app: dense listings, filters, forms, and loading states wired to APIs.",
          highlights: [
            "Built listing and form flows end to end, with clear loading, empty, and error states.",
            "Integrated data through a BFF/API Gateway with TanStack Query and strict typing.",
            "Took part in the Next.js migration on a shared design system.",
          ],
          stack: ["React", "Next.js", "TypeScript", "TanStack Query"],
          status: "Internal use",
        },
        {
          title: "Business Web App",
          summary:
            "B2B product: operational screens and workflows on a shared UI.",
          highlights: [
            "Shipped features end to end: UI, validation, states, and the backend contract.",
            "Reused design-system components while keeping strict typing across modules.",
            "Aligned implementation with design so flows reached production smoothly.",
          ],
          stack: ["React", "Next.js", "TypeScript", "Design System"],
          status: "Internal use",
        },
        {
          title: "Design System Web",
          summary:
            "Design-system monorepo: tokens, components, and UI foundation across apps.",
          highlights: [
            "Contributed reusable components and tokens with a clear, typed API.",
            "Unified base styles so multiple apps could share the same foundation.",
            "Prioritized visual consistency and safe refactors when sharing UI.",
          ],
          stack: ["React", "TypeScript", "Monorepo", "Design Tokens"],
          status: "Internal use",
        },
      ],
    },
    demos: {
      admin: {
        chrome: "product · listings",
        filtersLabel: "Filters",
        filterAll: "All",
        filterActive: "Active",
        filterError: "With error",
        title: "Records",
        loading: "Loading…",
        empty: "No results for this filter.",
        toggleLoading: "Simulate loading",
        showData: "Show data",
        colId: "ID",
        colName: "Name",
        colStatus: "Status",
        statusActive: "Active",
        statusDraft: "Draft",
        statusError: "Error",
      },
      form: {
        chrome: "product · forms",
        stepData: "Details",
        stepReview: "Review",
        stepDone: "Done",
        nameLabel: "Flow name",
        namePlaceholder: "e.g. Client onboarding",
        emailLabel: "Notify email",
        emailPlaceholder: "ops@company.com",
        nameError: "Enter a name.",
        emailError: "Enter a valid email.",
        next: "Continue",
        back: "Back",
        submit: "Confirm",
        restart: "Another flow",
        reviewTitle: "Review before sending",
        doneTitle: "Flow created",
        doneBody: "How I ship forms: validation, clear steps, and feedback.",
      },
      tokens: {
        chrome: "design system · tokens",
        colorsLabel: "Color",
        radiusLabel: "Radius",
        previewLabel: "Live preview",
        buttonLabel: "Primary action",
        inputPlaceholder: "Input with the active token",
        hint: "Tap a token: the component reacts instantly.",
      },
    },
    origin: {
      kicker: "04 · Origin",
      title: "Before product teams, product.",
      eduengineTitle: "Eduengine",
      eduengineBody:
        "Co-founder of an award-winning edtech (Tigo Campus Party, Kuña Mbaretech, and more). I learned to ship with little, alongside a small team.",
      thesisTitle: "Thesis · Computer Engineering",
      thesisBody:
        "NLP and feature engineering in Python (Random Forest, LightGBM, XGBoost) to detect depression and anxiety on Telegram. MentalRiskES 2024 (IberLEF).",
    },
    build: {
      kicker: "05 · How I build",
      title: "Engineering practice, not slide decks.",
      intro:
        "I care that the feature lands well: typed, testable, and observable in production.",
      points: [
        {
          title: "End-to-end features",
          body: "UI, data, loading/error states, and the API contract in the same delivery.",
        },
        {
          title: "Data with TanStack Query",
          body: "Cache, invalidation, and explicit network states in listings and forms.",
        },
        {
          title: "Vitest and code review",
          body: "Coverage where it counts, strict typing, and refactors that clarify the code.",
        },
        {
          title: "Production with New Relic",
          body: "When something breaks, I trace it, reproduce it, and close it with the team.",
        },
      ],
    },
    ai: {
      kicker: "02 · AI in my craft",
      title: "Spec first. AI second. My merge.",
      intro:
        "I use Cursor every day at itti. It’s not a shortcut — it’s a workflow. The spec sets the context; AI speeds up the draft; I review the diff and own the merge.",
      methodLabel: "How I use it",
      steps: [
        {
          title: "Spec first",
          body: "I start with Spec-itti: the spec is the work context, not the chat. It locks what to build, which states matter, and what’s out of scope.",
        },
        {
          title: "AI proposes",
          body: "With that context, Cursor speeds up the first UI draft, boilerplate, initial tests, mechanical refactors, and codebase search.",
        },
        {
          title: "I decide",
          body: "I own component shape, states, the backend contract, and which asserts matter. Anything fragile or unclear doesn’t merge on AI trust alone.",
        },
        {
          title: "Merge with judgment",
          body: "I read the full diff. If it’s a bug, I reproduce it and validate it in the product. If I don’t understand the change, it doesn’t ship.",
        },
      ],
      toolsLabel: "With",
      tools: ["Cursor", "Claude", "Gemini", "Spec-itti (spec-driven)"],
      closing: "Speed without judgment doesn’t count.",
    },
    contactBio:
      "Frontend Software Engineer at itti (Paraguay, UTC−3). Open to remote work. If you need someone who builds product interfaces with React and TypeScript, write to me.",
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
