"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import type { Locale, Theme } from "@/i18n/types";

const THEME_KEY = "portfolio-theme";
const LOCALE_KEY = "portfolio-locale";

type PreferencesContextValue = {
  theme: Theme;
  locale: Locale;
  dict: Dictionary;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

type PrefsSnapshot = {
  theme: Theme;
  locale: Locale;
};

const listeners = new Set<() => void>();
let snapshot: PrefsSnapshot = { theme: "light", locale: "es" };

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  if (document.documentElement.classList.contains("dark")) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readLocale(): Locale {
  const stored = window.localStorage.getItem(LOCALE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return document.documentElement.lang === "en" ? "en" : "es";
}

function refreshSnapshot(): PrefsSnapshot {
  const theme = readTheme();
  const locale = readLocale();
  if (snapshot.theme !== theme || snapshot.locale !== locale) {
    snapshot = { theme, locale };
  }
  return snapshot;
}

function getClientSnapshot(): PrefsSnapshot {
  return refreshSnapshot();
}

function getServerSnapshot(): PrefsSnapshot {
  return snapshot;
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
  const { theme, locale } = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const setTheme = useCallback((next: Theme) => {
    window.localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    refreshSnapshot();
    emit();
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(LOCALE_KEY, next);
    applyLocale(next);
    refreshSnapshot();
    emit();
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
