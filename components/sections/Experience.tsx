
import { Container } from "@/components/common/Container";

const experiences = [
  {
    period: "Product & Technology Leadership",
    role: "Head of IT",
    company: "PD Elite",
    description:
      "Led technology direction for a mobility product spanning web and mobile experiences, with a focus on product development, scalable systems, security, and opportunities for AI and automation.",
    tags: ["Technology Strategy", "Product Development", "Web & Mobile"],
  },
  {
    period: "Internship",
    role: "Telecommunications Engineering Intern",
    company: "Nigerian Airspace Management Agency (NAMA)",
    description:
      "Supported communications and radar troubleshooting, optical time-domain reflectometer (OTDR) testing, fibre-optic splicing, and inspections of airfield, control, and base-station equipment. Assisted with technical logs, checklists, and safety procedures.",
    tags: [
      "Communications",
      "Radar Systems",
      "Fibre Optics",
      "Troubleshooting",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.06] py-20 sm:py-28"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
            03 / EXPERIENCE
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building through engineering and leadership.
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            My experience connects software product development with
            hands-on technical problem-solving, systems thinking, and
            technology operations.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="grid gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7 lg:grid-cols-[200px_1fr] lg:gap-10"
            >
              <div>
                <p className="font-mono text-xs text-slate-500">
                  ENTRY / {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 text-sm text-indigo-300">
                  {experience.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {experience.company}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
