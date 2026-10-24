import Link from "next/link";
import { Container } from "@/components/common/Container";

const specialties = [
  "Full-Stack Engineering",
  "AI Integration",
  "Mobile Development",
  "Backend & APIs",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/[0.08] blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Main introduction */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="font-mono text-xs text-slate-400">
                ENGINEERING WORKSPACE / OVERVIEW
              </span>
            </div>

            <p className="mb-4 font-mono text-sm tracking-wide text-indigo-300">
              HELLO, I&apos;M MAYOWA AKINTEYE
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building intelligent software for a{" "}
              <span className="text-indigo-300">smarter world.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build web and mobile products, backend systems, and AI-powered
              experiences—turning complex problems into useful, reliable
              software.
            </p>

            {/* Quick actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
              >
                Explore Projects
              </Link>

              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--surface-elevated)]"
              >
                Engineering Docs ↗
              </Link>
            </div>

            {/* Focus areas */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>Web applications</span>
              <span>AI-powered products</span>
              <span>Cross-platform mobile</span>
            </div>
          </div>

          {/* Engineering workspace panel */}
          <div className="rounded-2xl border border-white/10 bg-[#0c1018]/90 p-5 shadow-2xl shadow-black/20 sm:p-6">
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <p className="font-mono text-xs text-slate-500">
                  WORKSPACE / PROFILE
                </p>

                <h2 className="mt-1 text-lg font-medium text-white">
                  Engineering Overview
                </h2>
              </div>

              <span className="rounded-lg border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1.5 font-mono text-xs text-indigo-300">
                v1.0
              </span>
            </div>

            {/* Terminal */}
            <div className="my-5 rounded-xl border border-white/[0.08] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <span className="text-emerald-400">➜</span>
                <span>mayowa@workspace</span>
                <span className="text-indigo-300">~</span>
              </div>

              <p className="mt-4 font-mono text-sm leading-7 text-slate-300">
                <span className="text-indigo-300">const</span> engineer ={" "}
                {"{"}
                <br />
                &nbsp;&nbsp;focus:{" "}
                <span className="text-emerald-300">
                  &quot;AI + Software&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;build:{" "}
                <span className="text-emerald-300">
                  &quot;Web & Mobile&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;approach:{" "}
                <span className="text-emerald-300">
                  &quot;Product-minded&quot;
                </span>
                <br />
                {"};"}
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <p className="mb-3 font-mono text-xs text-slate-500">
                CORE CAPABILITIES
              </p>

              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* System status */}
            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="text-xs text-slate-500">System status</span>

              <span className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Portfolio online
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}