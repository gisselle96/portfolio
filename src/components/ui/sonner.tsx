"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";
import { usePreferences } from "@/providers/PreferencesProvider";

const primaryToast =
  "!border-primary/40 !bg-primary !text-primary-foreground shadow-md";

export function Toaster({ ...props }: ToasterProps) {
  const { theme } = usePreferences();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      position="top-center"
      style={
        {
          "--normal-bg": "var(--primary)",
          "--normal-border": "color-mix(in oklab, var(--primary) 65%, transparent)",
          "--normal-text": "var(--primary-foreground)",
          "--success-bg": "var(--primary)",
          "--success-border": "color-mix(in oklab, var(--primary) 65%, transparent)",
          "--success-text": "var(--primary-foreground)",
          "--error-bg": "var(--primary)",
          "--error-border": "color-mix(in oklab, var(--primary) 65%, transparent)",
          "--error-text": "var(--primary-foreground)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: primaryToast,
          success: primaryToast,
          error: primaryToast,
          description: "!text-primary-foreground/90",
        },
      }}
      {...props}
    />
  );
}
