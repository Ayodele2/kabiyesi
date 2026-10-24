import { Container } from "@/components/common/Container";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the problem, users, requirements, constraints, and what success should look like before choosing a technology.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Break the problem into features, data flows, APIs, components, and system boundaries that can evolve as the product grows.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement the product with maintainable components, reliable APIs, thoughtful state management, and integrations that solve the actual problem.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test important user flows, handle failure states, improve accessibility and performance, and verify that the system behaves as expected.",
  },
  {
    number: "05",
    title: "Ship",
    description:
      "Prepare the application for deployment, monitor important behavior, document the system, and iterate based on real feedback.",
  },
];

export function EngineeringProcess() {
  return (
    <section
      id="engineering"
      className="border-t border-white/[0.06] py-20 sm:py-28"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
            02 / ENGINEERING PROCESS
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From problem to production.
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Good software engineering is not just about making something work.
            It&apos;s about understanding the problem, making deliberate
            technical decisions, and building something that can survive beyond
            the first version.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-200 hover:border-indigo-400/20 hover:bg-white/[0.035]"
            >
              <span className="font-mono text-xs text-indigo-300">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-medium text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}