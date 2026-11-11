"use client";

/**
 * PROTOTYPE craft variant — Scan (recruiter 30s).
 * Question: does a recruiter-first "spec sheet" make her stand out more than a narrative page?
 * Structure: KPI fold + evidence table (skill · version · level · where) + plain-text copy for ATS/AI.
 */
import { useState } from "react";
import { Check, Copy, Download, FileText } from "lucide-react";
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
  plainTextProfile,
  skillEvidence,
  type EvidenceLevel,
} from "./recruiter/recruiterProfile";

export const CRAFT_SCAN_LABEL = "Scan · ficha 30s";

const demos = [AdminDemo, FormDemo, TokensDemo] as const;

const levelStyle: Record<EvidenceLevel, string> = {
  production: "bg-brand/15 text-brand",
  project: "bg-[color-mix(in_oklab,var(--signal)_15%,transparent)] text-signal",
  academic: "bg-bg text-ink-soft border border-line",
};

export function CraftVariantScan() {
  const { dict, locale } = usePreferences();
  const { craft } = dict;
  const es = locale === "es";
  const [filter, setFilter] = useState<EvidenceLevel | "all">("all");
  const [copied, setCopied] = useState(false);
  const [openCase, setOpenCase] = useState<number | null>(0);

  const rows =
    filter === "all"
      ? skillEvidence
      : skillEvidence.filter((skill) => skill.level === filter);

  async function copyProfile() {
    try {
      await navigator.clipboard.writeText(plainTextProfile(locale));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <main className="relative z-10 pb-24">
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-ink-soft uppercase">
                {es ? "Perfil · actualizado nov 2026" : "Profile · updated Nov 2026"}
              </p>
              <PreferenceControls />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
              <div>
                <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4rem)] leading-[0.95] font-bold tracking-[-0.04em]">
                  {profile.name}
                </h1>
                <p className="mt-3 text-xl font-medium text-brand">
                  {es
                    ? "Software Engineer Frontend · React · Next.js · TypeScript"
                    : "Frontend Software Engineer · React · Next.js · TypeScript"}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-xs text-ink-soft">
                  <li className="rounded-full border border-line px-3 py-1">
                    {es ? "Abierta a remoto" : "Open to remote"}
                  </li>
                  <li className="rounded-full border border-line px-3 py-1">
                    Paraguay · UTC−3
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="h-11 text-primary-foreground hover:text-primary-foreground">
                  <a href={profile.cvPath} download className="text-primary-foreground">
                    <Download className="h-4 w-4" />
                    {dict.about.downloadCv}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11 border-line">
                  <a href={`${profile.atsCvPath}?lang=${locale}`} download>
                    <FileText className="h-4 w-4" />
                    {es ? "CV para ATS" : "ATS-friendly CV"}
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={copyProfile}
                  className="h-11 border-line"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied
                    ? es
                      ? "Copiado"
                      : "Copied"
                    : es
                      ? "Copiar perfil en texto"
                      : "Copy plain-text profile"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">{es ? "Stack con evidencia" : "Stack with evidence"}</p>
              <h2 className="section-title">
                {es ? "Qué uso, en qué versión y dónde." : "What I use, which version, and where."}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["all", "production", "project", "academic"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`rounded-full px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs transition-colors ${
                    filter === key
                      ? "bg-ink text-bg"
                      : "border border-line text-ink-soft hover:text-ink"
                  }`}
                >
                  {key === "all" ? (es ? "Todo" : "All") : levelLabel[key][locale]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="bg-bg-elevated font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.12em] text-ink-soft uppercase">
                <tr>
                  <th className="px-4 py-3">Skill</th>
                  <th className="px-4 py-3">{es ? "Versión" : "Version"}</th>
                  <th className="px-4 py-3">{es ? "Años" : "Years"}</th>
                  <th className="px-4 py-3">{es ? "Nivel" : "Level"}</th>
                  <th className="px-4 py-3">{es ? "Dónde" : "Where"}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((skill) => (
                  <tr key={skill.name} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink">{skill.name}</td>
                    <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-ink-soft">
                      {skill.version ?? "—"}
                    </td>
                    <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-ink-soft">
                      {skill.years ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.65rem] ${levelStyle[skill.level]}`}
                      >
                        {levelLabel[skill.level][locale]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-ink-soft">{skill.where[locale]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <p className="section-kicker">{craft.work.kicker}</p>
          <h2 className="section-title">{craft.work.title}</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {craft.work.cases.map((project, index) => {
              const Demo = demos[index] ?? AdminDemo;
              const open = openCase === index;
              return (
                <div key={project.title}>
                  <button
                    type="button"
                    onClick={() => setOpenCase(open ? null : index)}
                    aria-expanded={open}
                    className="grid w-full gap-2 py-5 text-left sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)] sm:items-center"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-xs text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {project.title}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-ink-soft">
                      {project.stack.join(" · ")} {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <div className="grid gap-8 pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                      <ul className="space-y-2 text-sm text-ink-soft">
                        {project.highlights.map((item) => (
                          <li key={item} className="border-l-2 border-brand pl-3">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Demo />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-6 rounded-xl border border-line bg-bg-elevated p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="section-kicker">{craft.ai.kicker}</p>
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold">
                {craft.ai.title}
              </p>
            </div>
            <ol className="grid gap-4 text-sm sm:grid-cols-2">
              {craft.ai.steps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.12em] text-brand uppercase">
                    {String(index + 1).padStart(2, "0")} · {step.title}
                  </p>
                  <p className="mt-1 text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
