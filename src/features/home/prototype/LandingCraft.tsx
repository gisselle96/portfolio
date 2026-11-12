"use client";

/**
 * PROTOTYPE craft variant — Evidence.
 * Question: what should the craft landing look like?
 * Structure: stacked cases with side-by-side copy + interactive demo,
 * journey (QA → frontend), AI workflow, evidence-tagged stack.
 */
import { ArrowRight, Download, FileText } from "lucide-react";
import { PreferenceControls } from "@/components/PreferenceControls";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Contact } from "@/features/home/components/Contact";
import { profile } from "@/features/home/constants/content";
import { SiteFooter } from "@/layouts";
import { usePreferences } from "@/providers/PreferencesProvider";
import { AdminDemo } from "./craft/AdminDemo";
import { evidenceCopy } from "./craft/evidenceCopy";
import { FormDemo } from "./craft/FormDemo";
import { TokensDemo } from "./craft/TokensDemo";
import {
  levelLabel,
  skillEvidence,
  type EvidenceLevel,
} from "./recruiter/recruiterProfile";

export const LANDING_CRAFT_LABEL = "Evidence · caso+demo";

const demos = [AdminDemo, FormDemo, TokensDemo] as const;

const levelStyle: Record<EvidenceLevel, string> = {
  production: "border-brand/40 bg-brand/10 text-ink",
  project: "border-line bg-bg-elevated text-ink",
  academic: "border-dashed border-line text-ink-soft",
};

export function LandingCraft() {
  const { locale } = usePreferences();
  const copy = evidenceCopy[locale];

  const nav = [
    { href: "#craft-work", label: copy.nav.work },
    { href: "#craft-journey", label: copy.nav.journey },
    { href: "#craft-ai", label: copy.nav.ai },
    { href: "#craft-stack", label: copy.nav.stack },
    { href: "#contacto", label: copy.nav.contact },
  ];

  const groups = skillEvidence.reduce<
    { label: string; items: (typeof skillEvidence)[number][] }[]
  >((acc, skill) => {
    const label = skill.group[locale];
    const group = acc.find((item) => item.label === label);
    if (group) group.items.push(skill);
    else acc.push({ label, items: [skill] });
    return acc;
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-bg/90 backdrop-blur-md">
        <div className="site-container flex items-center justify-between gap-3 py-2 sm:py-3.5 lg:py-4">
          <a
            href="#welcome"
            className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-ink"
          >
            {profile.name}
          </a>
          <nav className="hidden items-center gap-5 text-sm text-ink-soft lg:flex">
            {nav.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <PreferenceControls />
        </div>
      </header>

      <main className="relative z-10 flex-1 pb-20 pt-16 sm:pt-20">
        <section id="welcome" className="site-container py-14 sm:py-20">
          <p className="font-[family-name:var(--font-mono)] text-sm tracking-[0.08em] text-brand">
            {copy.hero.kicker}
          </p>
          <h1 className="mt-4 max-w-[20ch] font-[family-name:var(--font-display)] text-[clamp(2.4rem,6.5vw,4.4rem)] leading-[0.98] font-bold tracking-[-0.045em] text-ink">
            {copy.hero.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {copy.hero.lead}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-xs text-ink-soft">
            {copy.hero.chips.map((chip) => (
              <li key={chip} className="rounded-full border border-line px-3 py-1">
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md px-5 text-base text-primary-foreground hover:text-primary-foreground"
            >
              <a href="#craft-work" className="text-primary-foreground">
                {copy.hero.ctaWork}
                <ArrowRight className="h-4 w-4 text-primary-foreground" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-line bg-bg-elevated/80 px-5 text-base hover:border-brand hover:text-brand"
            >
              <a href={profile.cvPath} download>
                <Download className="h-4 w-4" />
                {copy.hero.ctaCv}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-line bg-bg-elevated/80 px-5 text-base hover:border-brand hover:text-brand"
            >
              <a href={`${profile.atsCvPath}?lang=${locale}`} download>
                <FileText className="h-4 w-4" />
                {copy.hero.ctaAts}
              </a>
            </Button>
          </div>
        </section>

        <section id="craft-work" className="site-container py-8 sm:py-12">
          <Separator className="mb-10 sm:mb-12" />
          <p className="section-kicker">{copy.work.kicker}</p>
          <h2 className="section-title">{copy.work.title}</h2>
          <p className="mt-4 text-ink-soft">{copy.work.intro}</p>

          <div className="mt-14 space-y-20">
            {copy.work.cases.map((item, index) => {
              const Demo = demos[index] ?? AdminDemo;

              return (
                <article
                  key={item.title}
                  className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-brand uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <span className="rounded-full border border-line px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-wide text-ink-soft uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft">
                      {item.summary}
                    </p>

                    <p className="mt-6 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
                      {copy.work.didLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink sm:text-[0.95rem]">
                      {item.did.map((line) => (
                        <li key={line} className="border-l-2 border-brand pl-3">
                          {line}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink">
                      <span className="mr-2 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
                        {copy.work.shortLabel}
                      </span>
                      {item.short}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-brand">
                      {item.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-3 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.08em] text-ink-soft uppercase">
                      {copy.work.demoNote}
                    </p>
                    <Demo />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="craft-journey" className="site-container py-8 sm:py-12">
          <Separator className="mb-10 sm:mb-12" />
          <p className="section-kicker">{copy.journey.kicker}</p>
          <h2 className="section-title">{copy.journey.title}</h2>
          <p className="mt-4 text-ink-soft">{copy.journey.intro}</p>

          <ol className="mt-10 border-l border-line">
            {copy.journey.steps.map((step, index) => (
              <li key={step.role} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className={`absolute top-1.5 -left-[0.4rem] h-3 w-3 rounded-full border-2 ${
                    index === 0 ? "border-brand bg-brand" : "border-line bg-bg"
                  }`}
                />
                <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] text-ink-soft">
                  {step.period}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                  {step.role}
                  <span className="font-medium text-ink-soft"> · {step.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="craft-ai" className="site-container py-8 sm:py-12">
          <Separator className="mb-10 sm:mb-12" />
          <p className="section-kicker">{copy.ai.kicker}</p>
          <h2 className="section-title">{copy.ai.title}</h2>
          <p className="mt-4 text-ink-soft">{copy.ai.intro}</p>

          <p className="mt-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-brand uppercase">
            {copy.ai.methodLabel}
          </p>
          <div className="-mx-4 mt-6 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
            <ol className="grid min-w-[52rem] grid-cols-5 gap-6">
              {copy.ai.steps.map((step, index) => {
                const isLast = index === copy.ai.steps.length - 1;

                return (
                  <li key={step.title}>
                    <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.12em] text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <div className="relative my-4 h-3">
                      <span
                        className={`absolute top-1/2 left-0 h-px bg-line ${
                          isLast ? "right-0" : "-right-6"
                        }`}
                      />
                      <span
                        className={`absolute top-0 left-0 h-3 w-3 rounded-full border-2 ${
                          index === 0 ? "border-brand bg-brand" : "border-line bg-bg"
                        }`}
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-brand uppercase">
              {copy.ai.toolsLabel}
            </p>
            {copy.ai.tools.map((tool) => (
              <span key={tool} className="text-sm text-ink-soft">
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg font-medium tracking-tight text-ink">
            {copy.ai.closing}
          </p>
        </section>

        <section id="craft-stack" className="site-container py-8 sm:py-12">
          <Separator className="mb-10 sm:mb-12" />
          <p className="section-kicker">{copy.stack.kicker}</p>
          <h2 className="section-title">{copy.stack.title}</h2>
          <p className="mt-4 text-ink-soft">{copy.stack.intro}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {(Object.keys(levelLabel) as EvidenceLevel[]).map((level) => (
              <li
                key={level}
                className={`rounded-full border px-3 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] ${levelStyle[level]}`}
              >
                {levelLabel[level][locale]}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label} className="border-t border-line pt-5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      title={skill.where[locale]}
                      className={`rounded-md border px-2.5 py-1.5 text-sm ${levelStyle[skill.level]}`}
                    >
                      {skill.name}
                      {skill.version ? (
                        <span className="ml-1.5 font-[family-name:var(--font-mono)] text-[0.65rem] text-ink-soft">
                          {skill.version}
                        </span>
                      ) : null}
                      {skill.years ? (
                        <span className="ml-1.5 font-[family-name:var(--font-mono)] text-[0.65rem] text-brand">
                          {skill.years}
                          {locale === "es" ? " años" : " yrs"}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="site-container py-8 sm:py-12">
          <Separator className="mb-10 sm:mb-12" />
          <p className="section-kicker">{copy.practice.kicker}</p>
          <h2 className="section-title">{copy.practice.title}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {copy.practice.points.map((point) => (
              <article key={point.title} className="border-t border-line pt-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-base leading-relaxed text-ink sm:text-lg">
            {copy.contactBio}
          </p>
        </section>

        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
