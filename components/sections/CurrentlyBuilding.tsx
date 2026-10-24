
import Link from "next/link";
import { Container } from "@/components/common/Container";

const activeProjects = [
  {
    name: "ILERA",
    category: "AI / HealthTech",
    status: "In development",
    description:
      "Developing a mobile health assistant with symptom intake, non-diagnostic triage flows, and healthcare discovery features.",
    href: "/projects/ilera",
  },
  {
    name: "PD Elite",
    category: "Mobility / Product",
    status: "Product development",
    description:
      "Working on technology direction for a ride-booking product spanning web and mobile experiences.",
    href: "/projects/pd-elite",
  },
];

export function CurrentlyBuilding() {
  return (
    <section
      id="currently-building"
      className="border-t border-white/[0.06] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
              06 / CURRENTLY BUILDING
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Work in progress.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              A look at the products currently receiving my attention, from
              technical implementation to product and system decisions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400"
              />
              <span className="font-mono text-xs text-emerald-300">
                ACTIVE WORKSPACE
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project, index) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-indigo-400/20 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs text-slate-500">
                    TASK / {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-indigo-400/20 bg-indigo-400/[0.08] px-3 py-1 text-xs text-indigo-300">
                    {project.status}
                  </span>
                </div>

                <p className="mt-5 text-xs uppercase tracking-wider text-slate-500">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 transition-colors hover:text-indigo-200"
                >
                  View project details <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
