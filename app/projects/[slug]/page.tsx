
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import {
  getProjectBySlug,
  projects,
} from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="border-b border-white/[0.08] py-12 sm:py-16">
        <Container>
          <Link
            href="/#projects"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            ← Back to projects
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs text-indigo-300">
              {project.category}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">
              {project.status}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            {project.tagline}
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
              >
                Visit project ↗
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.05]"
              >
                Source code ↗
              </a>
            )}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
                CASE STUDY / 01
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                The problem
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                {project.problem}
              </p>

              <div className="my-8 border-t border-white/[0.08]" />

              <h2 className="text-2xl font-semibold text-white">
                The approach
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                {project.solution}
              </p>

              <div className="my-8 border-t border-white/[0.08]" />

              <h2 className="text-2xl font-semibold text-white">
                Engineering highlights
              </h2>

              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-7 text-slate-400"
                  >
                    <span className="mt-1 text-indigo-300" aria-hidden="true">
                      ↗
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="font-mono text-xs tracking-[0.15em] text-slate-500">
                  CONTRIBUTION
                </p>

                <p className="mt-4 text-lg font-medium text-white">
                  {project.role}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="font-mono text-xs tracking-[0.15em] text-slate-500">
                  TECHNOLOGY STACK
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.08] bg-[#0b0e14] px-3 py-2 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10 border-t border-white/[0.08] pt-6">
            <Link
              href="/#projects"
              className="text-sm text-indigo-300 transition-colors hover:text-indigo-200"
            >
              ← Explore other projects
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
