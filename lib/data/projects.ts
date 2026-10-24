
export type ProjectStatus = "Building" | "MVP" | "Live" | "Concept";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: string;
  featured: boolean;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "ilera",
    name: "ILERA",
    tagline: "AI-powered smart health assistant",
    description:
      "A health-support platform concept focused on helping people navigate symptoms, discover care options, and access health-related tools.",
    status: "Building",
    category: "AI & HealthTech",
    featured: true,
    problem:
      "Finding appropriate health information and navigating care options can be difficult, especially when access to reliable guidance is limited.",
    solution:
      "Designing a mobile-first health assistant with symptom intake, triage support, healthcare discovery, medication-related tools, and accessibility considerations.",
    role: "Product development and software engineering",
    technologies: [
      "React Native",
      "Expo",
      "Express.js",
      "MongoDB",
      "AI Integration",
    ],
    highlights: [
      "Symptom intake and non-diagnostic triage flows",
      "Healthcare discovery and medication-related features",
      "Accessibility, privacy, and consent considerations",
    ],
    links: {},
  },
  {
    slug: "pd-elite",
    name: "PD Elite",
    tagline: "Mobility product across web and mobile",
    description:
      "A ride-booking product with web and mobile experiences, developed with an emphasis on product usability and technology direction.",
    status: "Building",
    category: "Mobility",
    featured: true,
    problem:
      "A mobility service needs a clear booking experience and dependable coordination between its customer-facing interfaces and supporting systems.",
    solution:
      "Contributing to product and technology direction for web and mobile experiences, with attention to usability, system scalability, security, and automation opportunities.",
    role: "Head of IT",
    technologies: [
      "React Native",
      "Web Development",
      "API Integration",
      "Product Engineering",
    ],
    highlights: [
      "Web and mobile product direction",
      "User experience and product feedback",
      "Technology strategy and system planning",
    ],
    links: {},
  },
  {
    slug: "aspira",
    name: "Aspira",
    tagline: "AI-powered interview preparation",
    description:
      "An interview preparation application designed around AI-powered interview practice and conversational feedback.",
    status: "MVP",
    category: "AI & CareerTech",
    featured: true,
    problem:
      "Candidates need accessible ways to practise interviews and build confidence before real opportunities.",
    solution:
      "Built an application experience using conversational AI integrations to support interview practice.",
    role: "Full-Stack Engineer",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Vapi",
      "OpenAI API",
    ],
    highlights: [
      "AI-driven conversational interview experience",
      "Full-stack web application development",
      "Voice and language-model integration",
    ],
    links: {},
  },
  {
    slug: "nextari",
    name: "Nextari",
    tagline: "A smarter personal finance experience",
    description:
      "A fintech product concept exploring a unified view of balances, receipts, and spending insights across financial services.",
    status: "Concept",
    category: "FinTech",
    featured: true,
    problem:
      "Managing financial information across multiple services can make it harder to understand spending and keep records together.",
    solution:
      "Exploring a unified finance experience for balances, receipts, and spending insights, with potential financial-service integrations.",
    role: "Product concept and application development",
    technologies: [
      "React Native",
      "TypeScript",
      "Fintech API Research",
    ],
    highlights: [
      "Unified financial information concept",
      "Receipt and spending insight workflows",
      "Integration-first product planning",
    ],
    links: {},
  },
  {
    slug: "nairafit",
    name: "NairaFit",
    tagline: "Salary and lifestyle planning",
    description:
      "A web product concept for exploring how salary, living costs, and lifestyle choices interact across Nigerian cities.",
    status: "Concept",
    category: "Personal Finance",
    featured: true,
    problem:
      "A salary figure alone does not show how comfortably someone can live in a particular city.",
    solution:
      "Planning a calculator that compares income with estimated living expenses across selected Nigerian cities.",
    role: "Product concept and web development",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    highlights: [
      "Salary-to-lifestyle comparison",
      "City-based cost planning",
      "Shareable financial scenarios",
    ],
    links: {},
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
