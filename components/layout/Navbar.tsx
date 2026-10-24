
import Link from "next/link";

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Engineering", href: "/#engineering" },
  { label: "Docs", href: "/docs" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07090d]/90 backdrop-blur-xl">
      <div className="container">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Mayowa Akinteye home"
            className="flex shrink-0 items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/25 bg-indigo-500/10 font-mono text-sm font-bold text-indigo-300">
              &lt;/m&gt;
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-semibold tracking-tight text-white">
                MAYOWA
              </span>
              <span className="block font-mono text-[10px] tracking-[0.18em] text-slate-500">
                ENGINEERING WORKSPACE
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex items-center gap-3 overflow-x-auto sm:gap-5"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 text-xs text-slate-400 transition-colors hover:text-white sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

         
        </div>
      </div>
    </header>
  );
}
