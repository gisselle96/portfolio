import type { ReactNode } from "react";

export function DemoChrome({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-[0_18px_40px_rgba(16,24,32,0.12)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--ink)_25%,transparent)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--ink)_18%,transparent)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--ink)_12%,transparent)]" />
        <p className="ml-2 font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-soft">
          {label}
        </p>
      </div>
      {children}
    </div>
  );
}
