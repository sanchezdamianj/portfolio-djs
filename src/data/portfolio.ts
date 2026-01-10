export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Damian Javier Sanchez",
  title: "Senior Software Engineer | Frontend Architect",
  email: "sanchezdamianj@gmail.com",
  phone: "+54 (11) 5709-8362",
  location: "Buenos Aires, Argentina",
  linkedin: "https://www.linkedin.com/in/damianjaviersanchez",
  github: "https://github.com/sanchezdamianj",
};

export const aboutContent = `
Dynamic and results-driven professional with extensive experience in leadership, innovation, and strategic development. 
Passionate about creating meaningful impact through collaboration and cutting-edge solutions. 
Committed to excellence and continuous growth in every endeavor.
`;

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Software Engineer | Frontend Architect",
    company: "Santander Technology",
    location: "Buenos Aires, Argentina",
    period: "Feb. 2025 - Present",
    description: [
      "Improved application performance and load times through advanced optimization techniques",
      "Led the integration of a shared design system across multiple microfrontends",
      "Spearheaded the decoupling of microfrontends using an event-bus architecture, enabling publish/subscribe communication and shared state synchronization, reducing load times across key user flows",
      "Served as a technical reference in frontend architecture and best practices"
    ]
  },
  {
    id: 2,
    title: "Tech Lead Frontend Software Engineer",
    company: "ITTI",
    location: "Buenos Aires, Argentina",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Worked as the technical lead, building the team and defining the project architecture",
      "Contributed to the design and setup of foundational structures for the platform"
    ]
  },
  {
    id: 3,
    title: "Frontend Software Engineer",
    company: "Mercado Libre | Mercado Envíos Full",
    location: "Buenos Aires, Argentina",
    period: "Dec 2022 - Dec 2024",
    description: [
      "Led frontend development in the Inbound Shipments XP Full team within Latin America's largest e-commerce platform",
      "Ensured high technical standards through modern architecture and engineering best practices",
      "Delivered high-impact features tied to revenue-driving KPIs and developed micro-applications that enhanced the user experience",
      "Ensured full unit-test coverage (100% PR coverage) across all projects for production deployments",
      "Managed deployments on AWS using internal tooling to support SRE operations"
    ]
  },
  {
    id: 4,
    title: "Frontend Mobile Software Engineer",
    company: "Ueno Bank",
    location: "Buenos Aires, Argentina",
    period: "Oct 2023 - May 2024",
    description: [
      "Contributed to the development of mobile application as a Flutter developer",
      "Maintained the monolithic mobile app, ensuring stability and performance",
      "Led the creation of a micro-frontend for the Transfers squad, using Flutter and Riverpod for state management and scalable architecture",
      "Collaborated with designers and backend engineers to improve UX and streamline development workflows"
    ]
  },
  {
    id: 5,
    title: "Fullstack Web Developer",
    company: "Asap Consulting - Client Bayer",
    location: "Buenos Aires, Argentina",
    period: "Apr 2018 - Nov 2022",
    description: [
      "Designed and developed RESTful APIs and SOAP services for web platforms built with JavaScript (React v16) for Argentina, Paraguay, and Brazil",
      "Developed a web application for Service Fees within the POD team, improving UIs to deliver a clearer user experience and feedback on process execution",
      "Built features allowing users to schedule execution programs and configure profile-based visualization rules"
    ]
  },
  {
    id: 6,
    title: "SAP Consultant",
    company: "ASAP Consulting - Client Monsanto",
    location: "Buenos Aires, Argentina",
    period: "Aug 2014 - Apr 2018",
    description: [
      "Led SAP restructuring for printing forms, smartforms, and printing programs",
      "Customized new sales processes and circuits",
      "Managed post-production incidents involving integrations with legacy systems, using SoapUI, Insomnia/Postman, and JIRA",
      "Strong knowledge of ABAP programming, including debugging and enhancements"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Transformation Initiative",
    description: "Led a comprehensive digital transformation project that modernized core business processes and improved operational efficiency by 40%.",
    technologies: ["React", "Node.js", "Cloud Architecture", "DevOps"],
    link: "https://example.com/project1"
  },
  {
    id: 2,
    title: "Strategic Partnership Framework",
    description: "Developed and implemented a strategic partnership framework that resulted in 25% revenue growth through collaborative ventures.",
    technologies: ["Strategy", "Business Development", "Analytics", "CRM"],
    link: "https://example.com/project2"
  },
  {
    id: 3,
    title: "Innovation Accelerator Program",
    description: "Created and launched an innovation accelerator program that funded and mentored 15+ startup ventures.",
    technologies: ["Program Management", "Mentoring", "Strategic Planning", "Investment Analysis"],
    link: "https://example.com/project3"
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Zustand", "Context API", "React Native", "SASS", "Styled Components", "Tailwind", "Shadcn/UI", "Bootstrap"]
  },
  {
    category: "Backend & Mobile",
    items: ["Node.js", "Express", "NestJS", "Fastify", "Flutter", "Riverpod", "BLOC", "Cubit"]
  },
  {
    category: "Architecture & DevOps",
    items: ["Microfrontends", "Single-SPA", "Module Federation", "Event-bus Architecture", "Docker", "AWS", "SSR/CSR", "Clean Architecture", "Atomic Design"]
  },
  {
    category: "Testing & Tools",
    items: ["Jest", "React Testing Library", "Cypress", "Postman", "SoapUI", "Git", "GitHub", "GitLab", "Figma"]
  },
  {
    category: "Databases & Legacy",
    items: ["Firebase", "Firestore", "MongoDB", "PostgreSQL", "MySQL", "ORMs", "ABAP", "SAP"]
  }
];