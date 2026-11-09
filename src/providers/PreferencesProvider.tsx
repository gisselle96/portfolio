"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import type { Locale, Theme } from "@/i18n/types";

export const THEME_KEY = "portfolio-theme";
export const LOCALE_KEY = "portfolio-locale";

type PreferencesContextValue = {
  theme: Theme;
  locale: Locale;
  dict: Dictionary;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function writeCookie(key: string, value: string) {
  document.cookie = `${key}=${value};path=/;max-age=31536000;samesite=lax`;
}

function readTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  if (document.documentElement.classList.contains("dark")) return "dark";
  return "dark";
}

function readLocale(): Locale {
  const stored = window.localStorage.getItem(LOCALE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return document.documentElement.lang === "en" ? "en" : "es";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
}

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Keep SSR and the first client render identical (es / dark).
  const [theme, setThemeState] = useState<Theme>("dark");
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const nextTheme = readTheme();
    const nextLocale = readLocale();
    writeCookie(THEME_KEY, nextTheme);
    writeCookie(LOCALE_KEY, nextLocale);
    applyTheme(nextTheme);
    applyLocale(nextLocale);
    queueMicrotask(() => {
      setThemeState(nextTheme);
      setLocaleState(nextLocale);
    });
  }, []);

  const setTheme = useCallback((next: Theme) => {
    window.localStorage.setItem(THEME_KEY, next);
    writeCookie(THEME_KEY, next);
    applyTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(LOCALE_KEY, next);
    writeCookie(LOCALE_KEY, next);
    applyLocale(next);
    setLocaleState(next);
  }, []);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      theme,
      locale,
      dict: getDictionary(locale),
      setTheme,
      toggleTheme,
      setLocale,
    }),
    [theme, locale, setTheme, toggleTheme, setLocale],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return context;
}
