
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { getFeaturedProjects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="border-t border-white/[0.06] py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
              05 / SELECTED PROJECTS
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Problems worth solving.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              A selection of products I&apos;ve built, am developing, or am
              exploring. Each represents a different engineering challenge.
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-xs text-slate-400">
            {String(featuredProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-200 hover:border-indigo-400/25 hover:bg-white/[0.035] sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-indigo-300">
                  PROJECT / {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
                  {project.status}
                </span>
              </div>

              <p className="mt-6 text-xs uppercase tracking-wider text-slate-500">
                {project.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-indigo-200">
                {project.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-300">
                {project.tagline}
              </p>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/[0.08] bg-[#0b0e14] px-2 py-1 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
                >
                  Explore case study
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
