"use client";

/**
 * PROTOTYPE craft variant — Match (job-post matcher).
 * Question: does letting a recruiter paste their job post and see evidence-backed matches
 * make her memorable, compared with a static skills list?
 * Structure: matcher is the hero; work + AI + contact come after. Client-side only, no AI call.
 */
import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { PreferenceControls } from "@/components/PreferenceControls";
import { Button } from "@/components/ui/button";
import { Contact } from "@/features/home/components/Contact";
import { profile } from "@/features/home/constants/content";
import { SiteFooter } from "@/layouts";
import { usePreferences } from "@/providers/PreferencesProvider";
import { AdminDemo } from "./craft/AdminDemo";
import { FormDemo } from "./craft/FormDemo";
import { TokensDemo } from "./craft/TokensDemo";
import {
  levelLabel,
  matchJobPost,
  presets,
} from "./recruiter/recruiterProfile";

export const CRAFT_MATCH_LABEL = "Match · pegá tu búsqueda";

const demos = [AdminDemo, FormDemo, TokensDemo] as const;

export function CraftVariantMatch() {
  const { dict, locale } = usePreferences();
  const { craft } = dict;
  const es = locale === "es";
  const [text, setText] = useState(presets[1]?.text ?? "");

  const result = useMemo(() => matchJobPost(text), [text]);
  const production = result.matched.filter((skill) => skill.level === "production");

  return (
    <>
      <header className="relative z-10 border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold">
              {profile.name}
            </p>
            <p className="text-xs text-ink-soft">{craft.hero.kicker}</p>
          </div>
          <PreferenceControls />
        </div>
      </header>

      <main className="relative z-10 pb-24">
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="section-kicker">{es ? "Para reclutadores" : "For recruiters"}</p>
          <h1 className="max-w-[20ch] font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.5vw,3.8rem)] leading-[0.98] font-bold tracking-[-0.04em]">
            {es
              ? "Pegá tu búsqueda. Te muestro dónde encajo, con evidencia."
              : "Paste your job post. I’ll show where I fit, with evidence."}
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <div className="flex flex-wrap gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.label.en}
                    type="button"
                    onClick={() => setText(preset.text)}
                    className={`rounded-full px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs transition-colors ${
                      text === preset.text
                        ? "bg-ink text-bg"
                        : "border border-line text-ink-soft hover:text-ink"
                    }`}
                  >
                    {preset.label[locale]}
                  </button>
                ))}
              </div>
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                rows={10}
                placeholder={
                  es
                    ? "Pegá acá la descripción del puesto…"
                    : "Paste the job description here…"
                }
                className="mt-4 w-full rounded-xl border border-line bg-bg-elevated p-4 font-[family-name:var(--font-mono)] text-sm leading-relaxed text-ink outline-none focus:border-brand"
              />
              <p className="mt-2 text-xs text-ink-soft">
                {es
                  ? "Corre en tu navegador. No se envía ni se guarda nada."
                  : "Runs in your browser. Nothing is sent or stored."}
              </p>
            </div>

            <div className="rounded-xl border border-line bg-bg-elevated p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
                    {es ? "Cobertura de lo detectado" : "Coverage of detected terms"}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-ink">
                    {result.coverage}%
                  </p>
                </div>
                <p className="text-right font-[family-name:var(--font-mono)] text-xs text-ink-soft">
                  {result.matched.length} {es ? "coinciden" : "match"} ·{" "}
                  {production.length} {es ? "en producción" : "in production"}
                </p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-bg">
                <div
                  className="h-full rounded-full bg-brand transition-[width] duration-500"
                  style={{ width: `${result.coverage}%` }}
                />
              </div>

              <ul className="mt-6 max-h-[22rem] space-y-3 overflow-y-auto pr-1">
                {result.matched.length === 0 ? (
                  <li className="text-sm text-ink-soft">
                    {es
                      ? "Todavía no detecto tecnologías. Probá con un preset."
                      : "No technologies detected yet. Try a preset."}
                  </li>
                ) : (
                  result.matched.map((skill) => (
                    <li key={skill.name} className="border-t border-line pt-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-ink">{skill.name}</p>
                        <span
                          className={`rounded-full px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.65rem] ${
                            skill.level === "production"
                              ? "bg-brand/15 text-brand"
                              : "border border-line text-ink-soft"
                          }`}
                        >
                          {levelLabel[skill.level][locale]}
                          {skill.years ? ` · ${skill.years} ${es ? "años" : "yrs"}` : ""}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-ink-soft">{skill.where[locale]}</p>
                      {skill.version ? (
                        <p className="mt-0.5 font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-soft">
                          {skill.version}
                        </p>
                      ) : null}
                    </li>
                  ))
                )}
              </ul>

              {result.gaps.length > 0 ? (
                <div className="mt-6 border-t border-line pt-4">
                  <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
                    {es ? "Fuera de mi stack actual" : "Outside my current stack"}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {result.gaps.map((gap) => (
                      <li
                        key={gap.name}
                        className="rounded-md border border-dashed border-line px-2 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-soft"
                      >
                        {gap.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="text-primary-foreground hover:text-primary-foreground">
                  <a href={profile.cvPath} download className="text-primary-foreground">
                    <Download className="h-4 w-4" />
                    {dict.about.downloadCv}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-line">
                  <a href="#contacto">{es ? "Escribime" : "Get in touch"}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <p className="section-kicker">{craft.work.kicker}</p>
            <h2 className="section-title">{craft.work.title}</h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              {craft.work.cases.map((project, index) => {
                const Demo = demos[index] ?? AdminDemo;
                return (
                  <article key={project.title} className="flex flex-col gap-4">
                    <Demo />
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-soft">{project.summary}</p>
                    <p className="font-[family-name:var(--font-mono)] text-xs text-brand">
                      {project.stack.join(" · ")}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="section-kicker">{craft.ai.kicker}</p>
          <p className="max-w-3xl font-[family-name:var(--font-display)] text-2xl font-bold">
            {craft.ai.title}
          </p>
          <p className="mt-3 max-w-2xl text-ink-soft">{craft.ai.closing}</p>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
