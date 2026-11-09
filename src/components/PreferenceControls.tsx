"use client";

import { Moon, Sun } from "lucide-react";
import { usePreferences } from "@/providers/PreferencesProvider";
import type { Locale } from "@/i18n/types";

export function PreferenceControls({
  className = "",
}: {
  className?: string;
}) {
  const { theme, locale, setLocale, toggleTheme, dict } = usePreferences();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-bg-elevated hover:text-ink"
        aria-label={theme === "dark" ? dict.a11y.lightMode : dict.a11y.darkMode}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>

      <div
        className="flex items-center gap-0.5 text-xs font-medium"
        role="group"
        aria-label={dict.a11y.language}
      >
        {(["es", "en"] as Locale[]).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded px-2 py-1 uppercase transition-colors ${
              locale === code
                ? "bg-brand text-primary-foreground"
                : "text-ink-soft hover:text-ink"
            }`}
            aria-pressed={locale === code}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}
