"use client";

import { usePreferences } from "@/providers/PreferencesProvider";

export function SiteFooter() {
  const { dict } = usePreferences();

  return (
    <footer className="border-t border-line">
      <div className="site-container flex flex-row items-center justify-center gap-2 py-8 text-sm text-ink-soft sm:justify-between">
        <p>© 2026</p>
        <p>{dict.footer.portfolio}</p>
      </div>
    </footer>
  );
}
