import { Container } from "@/components/common/Container";

const highlights = [
  {
    label: "Focus",
    value: "Full-Stack + AI",
  },
  {
    label: "Platform",
    value: "Web + Mobile",
  },
  {
    label: "Approach",
    value: "Product-minded",
  },
  {
    label: "Availability",
    value: "Worldwide",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-indigo-300">
              01 / ABOUT
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineering with purpose.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m Mayowa Akinteye, a software engineer focused on building
              useful digital products across web, mobile, backend systems, and
              AI.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My approach goes beyond writing interfaces. I think about the
              problem first, design the system around the real requirements,
              build the product, connect the necessary services, test the
              important paths, and prepare the result for real users.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}