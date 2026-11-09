import { profile } from "@/data/content";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#caso", label: "Caso" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-ink"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink-soft sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
