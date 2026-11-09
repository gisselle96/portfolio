"use client";

import { usePreferences } from "@/providers/PreferencesProvider";

export function SiteFooter() {
  const { dict } = usePreferences();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-center gap-2 px-5 py-8 text-sm text-ink-soft sm:justify-between sm:px-8">
        <p>© 2026</p>
        <p>{dict.footer.portfolio}</p>
      </div>
    </footer>
  );
}
