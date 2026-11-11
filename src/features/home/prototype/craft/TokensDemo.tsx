"use client";

import { useState } from "react";
import { usePreferences } from "@/providers/PreferencesProvider";
import { DemoChrome } from "./DemoChrome";

const COLORS = [
  { key: "brand", label: "brand", value: "var(--brand)" },
  { key: "signal", label: "signal", value: "var(--signal)" },
  { key: "ink", label: "ink", value: "var(--ink)" },
] as const;

const RADII = [
  { key: "sm", label: "sm", value: "0.375rem" },
  { key: "md", label: "md", value: "0.625rem" },
  { key: "xl", label: "xl", value: "1rem" },
] as const;

export function TokensDemo() {
  const { dict } = usePreferences();
  const t = dict.craft.demos.tokens;
  const [colorKey, setColorKey] = useState<(typeof COLORS)[number]["key"]>("brand");
  const [radiusKey, setRadiusKey] = useState<(typeof RADII)[number]["key"]>("md");

  const color = COLORS.find((item) => item.key === colorKey) ?? COLORS[0];
  const radius = RADII.find((item) => item.key === radiusKey) ?? RADII[1];

  return (
    <DemoChrome label={t.chrome}>
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5 border-b border-line p-4 sm:p-5 lg:border-r lg:border-b-0">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
              {t.colorsLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {COLORS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setColorKey(item.key)}
                  className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                    colorKey === item.key
                      ? "border-brand bg-brand/10 text-ink"
                      : "border-line bg-bg text-ink-soft hover:text-ink"
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full"
                    style={{ background: item.value }}
                  />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
              {t.radiusLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {RADII.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setRadiusKey(item.key)}
                  className={`rounded-md border px-3 py-2 font-[family-name:var(--font-mono)] text-sm transition-colors ${
                    radiusKey === item.key
                      ? "border-brand bg-brand/10 text-ink"
                      : "border-line bg-bg text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-ink-soft">{t.hint}</p>
        </div>

        <div className="p-4 sm:p-5">
          <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
            {t.previewLabel}
          </p>
          <div className="mt-4 space-y-3 rounded-xl border border-line bg-bg p-4">
            <button
              type="button"
              className="h-10 px-4 text-sm font-medium text-white transition-[border-radius,background-color]"
              style={{
                background: color.value,
                borderRadius: radius.value,
              }}
            >
              {t.buttonLabel}
            </button>
            <input
              readOnly
              value={t.inputPlaceholder}
              className="h-10 w-full border bg-bg-elevated px-3 text-sm text-ink outline-none"
              style={{
                borderColor: color.value,
                borderRadius: radius.value,
              }}
            />
            <p className="font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-soft">
              color: {color.label} · radius: {radius.label}
            </p>
          </div>
        </div>
      </div>
    </DemoChrome>
  );
}
