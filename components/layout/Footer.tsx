
import Link from "next/link";

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-300">
            Mayowa Akinteye
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Building intelligent software for a smarter world.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-500">
          <span>WORKSPACE v1.0</span>

          <Link
            href="https://github.com/Ayodele2"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-indigo-300"
          >
            GitHub ↗
          </Link>

          <span>© {COPYRIGHT_YEAR}</span>
        </div>
      </div>
    </footer>
  );
}
