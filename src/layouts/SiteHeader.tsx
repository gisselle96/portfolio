"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PreferenceControls } from "@/components/PreferenceControls";
import { profile } from "@/features/home/constants/content";
import { usePreferences } from "@/providers/PreferencesProvider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { dict } = usePreferences();

  const links = [
    { href: "#welcome", label: dict.nav.welcome },
    { href: "#sobre-mi", label: dict.nav.about },
    { href: "#proyectos", label: dict.nav.projects },
    { href: "#skills", label: dict.nav.skills },
    { href: "#contacto", label: dict.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-bg/90 backdrop-blur-md">
        <div className="site-container flex items-center justify-between gap-3 py-2 sm:py-3.5 lg:py-4">
          <a
            href="#welcome"
            className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            {dict.brandLabel}
          </a>

          <nav className="hidden items-center gap-6 text-sm text-ink-soft lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <PreferenceControls className="hidden sm:flex" />
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center text-ink sm:h-10 sm:w-10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--bg)] lg:hidden"
          style={{ backgroundColor: "var(--bg)" }}
          role="dialog"
          aria-modal="true"
          aria-label={dict.a11y.navigation}
        >
          <div className="site-container flex items-center justify-between gap-3 py-2 sm:py-3.5">
            <a
              href="#welcome"
              className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-ink"
              onClick={() => setOpen(false)}
            >
              {dict.brandLabel}
            </a>
            <div className="flex items-center gap-2">
              <PreferenceControls />
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center text-ink sm:h-10 sm:w-10"
                aria-label={dict.a11y.closeMenu}
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="site-container flex flex-1 flex-col gap-1 overflow-y-auto pb-10 pt-8">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-line py-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink"
                onClick={() => setOpen(false)}
              >
                <span className="mr-4 font-[family-name:var(--font-mono)] text-xs font-normal tracking-[0.14em] text-brand uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
            <p className="mt-auto pt-10 text-sm text-ink-soft">{profile.role}</p>
          </nav>
        </div>
      ) : null}
    </>
  );
}
