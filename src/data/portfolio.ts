export interface LocalizedString {
  en: string;
  es: string;
}

export interface LocalizedArray {
  en: string[];
  es: string[];
}

export interface Experience {
  id: number;
  title: LocalizedString;
  company: string;
  location: string;
  period: string;
  technologies?: string[];
  description: LocalizedArray;
}

export interface Project {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  technologies: string[];
  github?: string;
  link?: string;
}

export type SkillBadgeColor = 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';

export interface Skill {
  category: LocalizedString;
  items: string[];
  color: SkillBadgeColor;
}

export const personalInfo = {
  name: "Damián Javier Sánchez",
  title: "Senior Fullstack Engineer",
  subtitle: "React & Node.js | Clean Architecture | TDD",
  email: "sanchezdamianj@gmail.com",
  phone: "+54 (11) 5709-8362",
  location: "Buenos Aires, Argentina",
  linkedin: "https://www.linkedin.com/in/damianjaviersanchez",
  github: "https://github.com/sanchezdamianj",
};

export const aboutContent = {
  en: `Senior Fullstack Engineer with experience building scalable applications at Mercado Libre, Santander, and Bayer.

Specialized in React, Node.js, TypeScript, and microfrontend architectures. Applies TDD and Clean Architecture to deliver maintainable, production-ready code.

Uses AI tools to amplify productivity without sacrificing code quality or architectural discipline.

Proven track record shipping high-impact features in high-scale environments serving millions of users.`,
  es: `Ingeniero Fullstack Senior con experiencia construyendo aplicaciones escalables en Mercado Libre, Santander y Bayer.

Especializado en React, Node.js, TypeScript y arquitecturas de microfrontends. Aplica TDD y Clean Architecture para entregar código mantenible y production-ready.

Usa herramientas de IA para amplificar productividad sin sacrificar calidad de código o disciplina arquitectural.

Trayectoria comprobada entregando features de alto impacto en entornos de alta escala atendiendo millones de usuarios.`,
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: { en: "Senior Software Engineer", es: "Ingeniero de Software Senior" },
    company: "Santander Technology",
    location: "Buenos Aires, Argentina",
    period: "Feb. 2025 - Present",
    technologies: ["Microfrontends", "React", "TypeScript", "Single-SPA", "Module Federation", "AI Integration", "Event-Driven Architecture", "Node.js", "TDD"],
    description: {
      en: [
        "Leading frontend architecture evolution across Santander Retail & Empresas Homebanking platforms serving 5M+ customers",
        "Driving AI-powered workflows and agent-based systems integration for enhanced digital banking user interactions",
        "Designed modular React + TypeScript architecture supporting scalable AI integrations within microfrontend ecosystem",
        "Reduced page load times by 35% through event-bus microfrontend decoupling",
        "Led Design System standardization across 8+ microfrontends with unified component library",
        "Promoting TDD practices achieving 90%+ test coverage on critical modules",
        "Serving as technical reference for frontend architecture, performance, and engineering best practices"
      ],
      es: [
        "Liderando evolución de arquitectura frontend en Santander Retail & Empresas Homebanking atendiendo 5M+ clientes",
        "Impulsando integración de workflows basados en IA y sistemas agent-based para banca digital",
        "Diseñé arquitectura modular React + TypeScript soportando integraciones de IA escalables",
        "Reduje tiempos de carga en 35% a través de desacoplamiento de microfrontends con event-bus",
        "Lideré estandarización de Design System en 8+ microfrontends con librería de componentes unificada",
        "Promoviendo prácticas TDD alcanzando 90%+ de cobertura de tests en módulos críticos",
        "Sirviendo como referente técnico en arquitectura frontend y mejores prácticas de ingeniería"
      ]
    }
  },
  {
    id: 2,
    title: { en: "Tech Lead Frontend Software Engineer", es: "Tech Lead Frontend" },
    company: "ITTI",
    location: "Buenos Aires, Argentina",
    period: "Dec 2024 - Feb 2025",
    technologies: ["Next.js", "NestJS", "Express", "AWS"],
    description: {
      en: [
        "Worked as the technical lead, building the team and defining the project's initial architecture",
        "Contributed to the design and setup of foundational structures for the platform"
      ],
      es: [
        "Trabajé como tech lead, armando el equipo y definiendo la arquitectura inicial del proyecto",
        "Contribuí al diseño y setup de estructuras fundacionales para la plataforma"
      ]
    }
  },
  {
    id: 3,
    title: { en: "Frontend Software Engineer", es: "Ingeniero de Software Frontend" },
    company: "Mercado Libre | Mercado Envíos Full",
    location: "Buenos Aires, Argentina",
    period: "Dec 2022 - Dec 2024",
    technologies: ["TypeScript", "React", "Node.js", "Microfrontends", "Jest", "Webpack", "SSR/CSR"],
    description: {
      en: [
        "Led frontend development in Inbound Shipments XP Full team at Latin America's largest e-commerce platform (15M+ daily transactions)",
        "Maintained 100% unit-test coverage (PR requirement) across all projects ensuring production reliability",
        "Delivered high-impact features tied to revenue-driving KPIs, optimizing shipping workflows for thousands of sellers",
        "Developed micro-applications processing 100K+ daily shipments through warehouse operations",
        "Managed AWS deployments with internal tooling supporting SRE operations"
      ],
      es: [
        "Lideré desarrollo frontend en Inbound Shipments XP Full en la plataforma de e-commerce más grande de Latinoamérica (15M+ transacciones diarias)",
        "Mantuve 100% de cobertura de tests unitarios (requisito de PR) asegurando confiabilidad en producción",
        "Entregué features de alto impacto atados a KPIs de revenue, optimizando flujos de envío para miles de vendedores",
        "Desarrollé micro-aplicaciones procesando 100K+ envíos diarios en operaciones de almacén",
        "Gestioné deploys en AWS con herramientas internas soportando operaciones SRE"
      ]
    }
  },
  {
    id: 4,
    title: { en: "Frontend Mobile Software Engineer", es: "Ingeniero Frontend Mobile" },
    company: "Ueno Bank",
    location: "Buenos Aires, Argentina",
    period: "Oct 2023 - May 2024",
    technologies: ["Flutter", "Riverpod", "BLOC", "Cubit", "React", "Node.js"],
    description: {
      en: [
        "Contributed to the development and maintenance of the mobile application as a Flutter developer",
        "Maintained the monolithic mobile app, ensuring stability and performance",
        "Led the creation of a micro-frontend for the Transfers squad using Flutter and Riverpod",
        "Collaborated with designers and backend engineers to improve UX and workflows"
      ],
      es: [
        "Contribuí al desarrollo y mantenimiento de la aplicación móvil como desarrollador Flutter",
        "Mantuve la app móvil monolítica, asegurando estabilidad y performance",
        "Lideré la creación de un micro-frontend para el squad de Transfers usando Flutter y Riverpod",
        "Colaboré con diseñadores e ingenieros backend para mejorar UX y flujos"
      ]
    }
  },
  {
    id: 5,
    title: { en: "Fullstack Web Developer", es: "Desarrollador Web Fullstack" },
    company: "Asap Consulting - Client Bayer",
    location: "Buenos Aires, Argentina",
    period: "Apr 2018 - Nov 2022",
    technologies: ["React", "Node.js", "Express", "Material UI"],
    description: {
      en: [
        "Designed and developed RESTful APIs and SOAP services for web platforms built with React v16 for Argentina, Paraguay, and Brazil",
        "Developed a web application for Service Fees within the POD team, improving UIs for better user experience",
        "Built features allowing users to schedule execution programs and configure profile-based visualization rules"
      ],
      es: [
        "Diseñé y desarrollé APIs RESTful y servicios SOAP para plataformas web construidas con React v16 para Argentina, Paraguay y Brasil",
        "Desarrollé una aplicación web para Honorarios dentro del equipo POD, mejorando UIs",
        "Construí features permitiendo a usuarios programar ejecuciones y configurar reglas de visualización basadas en perfiles"
      ]
    }
  },
  {
    id: 6,
    title: { en: "SAP SD Senior Consultant", es: "Consultor Senior SAP SD" },
    company: "ASAP Consulting - Client Monsanto",
    location: "Buenos Aires, Argentina",
    period: "Aug 2014 - Apr 2018",
    technologies: ["SAP", "ABAP", "Node.js", "Express", "Postman"],
    description: {
      en: [
        "Led SAP restructuring for printing forms, smartforms, and printing programs",
        "Customized new sales processes and circuits",
        "Managed post-production incidents involving integrations with legacy systems",
        "Designed and developed RESTful APIs using Node.js and Express to integrate SAP SD with internal enterprise platforms",
        "Enabled secure data exchange, data transformation, and real-time synchronization between SAP and web applications",
        "Strong knowledge of ABAP programming, including debugging and enhancements"
      ],
      es: [
        "Lideré reestructuración SAP para formularios, smartforms y programas de impresión",
        "Personalicé nuevos procesos y circuitos de ventas",
        "Gestioné incidentes post-producción involucrando integraciones con sistemas legacy",
        "Diseñé y desarrollé APIs RESTful usando Node.js y Express para integrar SAP SD con plataformas empresariales",
        "Habilité intercambio seguro de datos y sincronización en tiempo real entre SAP y aplicaciones web",
        "Sólido conocimiento de programación ABAP, incluyendo debugging y enhancements"
      ]
    }
  },
  {
    id: 7,
    title: { en: "SAP SD Senior Consultant & Coordinator", es: "Consultor Senior SAP SD y Coordinador" },
    company: "Accenture Technology Solutions - Client YPF S.A.",
    location: "Buenos Aires, Argentina",
    period: "Jun 2010 - Aug 2014",
    technologies: ["SAP", "ABAP"],
    description: {
      en: [
        "SAP SD Senior Consultant and coordinator of the SAP SD/MM team at YPF",
        "Managed incident resolution and training of new team members",
        "Analyzed and designed new functional requirements",
        "Developed and debugged solutions using ABAP",
        "Acted as team reference, leading ~10 resources"
      ],
      es: [
        "Consultor Senior SAP SD y coordinador del equipo SAP SD/MM en YPF",
        "Gestioné resolución de incidentes y capacitación de nuevos miembros del equipo",
        "Analicé y diseñé nuevos requerimientos funcionales",
        "Desarrollé y depuré soluciones usando ABAP",
        "Actué como referente del equipo, liderando ~10 recursos"
      ]
    }
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: { en: "Crypto Orderbook Dashboard", es: "Dashboard de Orderbook Crypto" },
    description: { 
      en: "Real-time cryptocurrency dashboard with orderbook visualization and market depth. Next.js 15, React 19, TypeScript, Clean Architecture. Features live BTC/ETH/SOL trading data via Binance API.", 
      es: "Dashboard de criptomonedas en tiempo real con visualización de orderbook y profundidad de mercado. Next.js 15, React 19, TypeScript, Clean Architecture. Datos reales de trading via Binance API."
    },
    technologies: ["Next.js 15", "React 19", "TypeScript", "Clean Architecture", "Binance API"],
    github: "https://github.com/sanchezdamianj/fe-orderbook-dashboard"
  },
  {
    id: 2,
    title: { en: "Frontend Admin Dashboard", es: "Dashboard Admin Frontend" },
    description: { 
      en: "Production-ready admin dashboard with Next.js, React, TypeScript, Chakra UI, and Zod validation. Full form handling and data management.", 
      es: "Dashboard admin production-ready con Next.js, React, TypeScript, Chakra UI y validación con Zod. Gestión completa de formularios y datos."
    },
    technologies: ["Next.js", "React", "TypeScript", "Chakra UI", "Zod"],
    github: "https://github.com/sanchezdamianj/frontend-admin"
  },
  {
    id: 3,
    title: { en: "Backend Admin API", es: "API Backend Admin" },
    description: { 
      en: "Node.js backend with TypeScript, MongoDB, Mongoose, and Joi validation. RESTful API for admin dashboard operations.", 
      es: "Backend Node.js con TypeScript, MongoDB, Mongoose y validación Joi. API RESTful para operaciones de dashboard admin."
    },
    technologies: ["Node.js", "TypeScript", "MongoDB", "Mongoose", "Joi"],
    github: "https://github.com/sanchezdamianj/backend-admin"
  },
  {
    id: 4,
    title: { en: "BFF Fastify - MVC & DDD", es: "BFF Fastify - MVC & DDD" },
    description: { 
      en: "Backend for Frontend integrating Next.js with Fastify. MVC and Domain Driven Design patterns with TypeScript.", 
      es: "Backend for Frontend integrando Next.js con Fastify. Patrones MVC y Domain Driven Design con TypeScript."
    },
    technologies: ["Node.js", "Fastify", "MVC", "DDD", "TypeScript"],
    github: "https://github.com/sanchezdamianj/bff-fastify-mvc-ddd"
  },
  {
    id: 5,
    title: { en: "React Native Delivery App", es: "App de Delivery React Native" },
    description: { 
      en: "Full delivery app clone with React Native and Expo. Real-time orders, maps integration, and mobile UX best practices.", 
      es: "Clon de app de delivery con React Native y Expo. Órdenes en tiempo real, integración con mapas y mejores prácticas de UX mobile."
    },
    technologies: ["React Native", "Expo", "TypeScript", "Maps API"],
    github: "https://github.com/sanchezdamianj/deliorderClone"
  },
  {
    id: 6,
    title: { en: "E-commerce Next.js 15", es: "E-commerce Next.js 15" },
    description: { 
      en: "Modern e-commerce built with Next.js 15 App Router, featuring server components and optimized performance.", 
      es: "E-commerce moderna construida con Next.js 15 App Router, featuring server components y performance optimizada."
    },
    technologies: ["Next.js 15", "TypeScript", "App Router"],
    github: "https://github.com/sanchezdamianj/djs-shop-next-15"
  }
];

export const skills: Skill[] = [
  {
    category: { en: "Frontend Development", es: "Desarrollo Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Zustand", "Microfrontends", "React Native", "Flutter"],
    color: 'emerald'
  },
  {
    category: { en: "Backend & APIs", es: "Backend & APIs" },
    items: ["Node.js", "Express", "NestJS", "Fastify", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    color: 'blue'
  },
  {
    category: { en: "Architecture & DevOps", es: "Arquitectura & DevOps" },
    items: ["Microfrontends", "Module Federation", "Event-Driven Architecture", "Clean Architecture", "Docker", "AWS", "CI/CD"],
    color: 'purple'
  },
  {
    category: { en: "Testing & Tools", es: "Testing & Herramientas" },
    items: ["Jest", "React Testing Library", "Cypress", "TDD", "Postman", "Git", "GitHub", "GitLab", "Figma"],
    color: 'amber'
  },
  {
    category: { en: "Databases & Legacy", es: "Bases de Datos & Legacy" },
    items: ["Firebase", "Firestore", "MongoDB", "PostgreSQL", "MySQL", "ORMs", "ABAP", "SAP"],
    color: 'rose'
  }
];

export const education = {
  degree: {
    en: "Bachelor of Systems Engineering",
    es: "Ingeniería en Sistemas"
  },
  institution: {
    en: "Universidad Tecnológica Nacional (UTN FRBA)",
    es: "Universidad Tecnológica Nacional (UTN FRBA)"
  },
  period: {
    en: "2011 - 2016",
    es: "2011 - 2016"
  }
};

export const approach = {
  title: {
    en: "Engineering Workflow",
    es: "Workflow de Ingeniería"
  },
  subtitle: {
    en: "Spec-Driven | TDD | Clean Architecture",
    es: "Spec-Driven | TDD | Clean Architecture"
  },
  phases: [
    {
      number: "01",
      title: { en: "Spec-Driven Design", es: "Diseño Spec-Driven" },
      description: {
        en: "Define contracts before code. Type-safe interfaces and clear requirements reduce rework. Ship what was asked, not what was assumed.",
        es: "Definir contratos antes del código. Interfaces type-safe y requerimientos claros reducen rework. Entregar lo pedido, no lo asumido."
      }
    },
    {
      number: "02",
      title: { en: "Test-Driven Development", es: "Desarrollo TDD" },
      description: {
        en: "Write the test first. 90%+ coverage on critical paths. Confidence to refactor without fear of breaking things.",
        es: "Escribir el test primero. 90%+ cobertura en paths críticos. Confianza para refactorear sin miedo a romper cosas."
      }
    },
    {
      number: "03",
      title: { en: "Fullstack Architecture", es: "Arquitectura Fullstack" },
      description: {
        en: "Clean separation of concerns across the stack. From REST/GraphQL APIs to React UIs. Code that's easy to change, test, and scale.",
        es: "Separación limpia de responsabilidades en todo el stack. Desde APIs REST/GraphQL hasta UIs en React. Código fácil de cambiar, testear y escalar."
      }
    }
  ]
};
