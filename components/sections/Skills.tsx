
import { Container } from "@/components/common/Container";

const skillGroups = [
  {
    id: "01",
    title: "Frontend Engineering",
    description: "Building responsive, accessible web experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    id: "02",
    title: "Backend & APIs",
    description: "Designing application logic and service integrations.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Authentication",
      "API Integration",
    ],
  },
  {
    id: "03",
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications.",
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "NativeWind",
      "Redux Toolkit",
    ],
  },
  {
    id: "04",
    title: "AI Engineering",
    description: "Integrating AI capabilities into useful products.",
    skills: [
      "OpenAI API",
      "LLM Integration",
      "LangChain.js",
      "Vapi",
      "AI Workflows",
      "Prompt Design",
    ],
  },
  {
    id: "05",
    title: "Data & Infrastructure",
    description: "Managing application data and connected services.",
    skills: [
      "MongoDB",
      "Mongoose",
      "Firebase",
      "Supabase",
      "Git",
      "Vercel",
    ],
  },
  {
    id: "06",
    title: "Quality & Product Delivery",
    description: "Building maintainable software and validating user flows.",
    skills: [
      "Jest",
      "React Testing Library",
      "Responsive Design",
      "Accessibility",
      "Debugging",
      "Technical Documentation",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.06] py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
              04 / TECHNICAL CAPABILITIES
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The tools behind the solutions.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              A practical toolkit for taking products from interface design
              through application logic, AI integration, data management,
              testing, and deployment.
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-xs text-slate-400">
            FULL-STACK TOOLKIT
          </span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-200 hover:border-indigo-400/25 hover:bg-white/[0.035] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-indigo-300">
                  CAPABILITY / {group.id}
                </span>

                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-slate-600 transition-colors group-hover:bg-indigo-400"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.08] bg-[#0b0e14] px-2.5 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
