"use client";

/**
 * PROTOTYPE craft variant — Bands.
 * Question: what should the craft landing look like?
 * Structure: full-width alternating work bands (demo first), AI as manifesto, skills as dense columns.
 * No side-by-side case/demo grid.
 */
import { PreferenceControls } from "@/components/PreferenceControls";
import { Contact } from "@/features/home/components/Contact";
import { profile } from "@/features/home/constants/content";
import { SiteFooter } from "@/layouts";
import { usePreferences } from "@/providers/PreferencesProvider";
import { AdminDemo } from "./craft/AdminDemo";
import { FormDemo } from "./craft/FormDemo";
import { TokensDemo } from "./craft/TokensDemo";

export const CRAFT_BANDS_LABEL = "Bands · demo primero";

const demos = [AdminDemo, FormDemo, TokensDemo] as const;

export function CraftVariantBands() {
  const { dict } = usePreferences();
  const { craft, skills } = dict;

  return (
    <>
      <header className="relative z-10 border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <p className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight">
            {profile.name}
          </p>
          <p className="hidden font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] text-ink-soft uppercase sm:block">
            {craft.hero.kicker}
          </p>
          <PreferenceControls />
        </div>
      </header>

      <main className="relative z-10 pb-24">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h1 className="max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(2.8rem,9vw,5.5rem)] leading-[0.94] font-bold tracking-[-0.05em]">
            {craft.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">{craft.hero.support}</p>
        </section>

        {craft.work.cases.map((project, index) => {
          const Demo = demos[index] ?? AdminDemo;
          const flip = index % 2 === 1;

          return (
            <section
              key={project.title}
              className={`border-y border-line ${
                flip ? "bg-bg-elevated/50" : "bg-transparent"
              }`}
            >
              <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-1">
                <div className={flip ? "lg:order-2" : undefined}>
                  <p className="font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] text-ink-soft uppercase">
                    {craft.work.demoNote}
                  </p>
                  <div className="mt-4 max-w-3xl">
                    <Demo />
                  </div>
                </div>
                <div className={flip ? "lg:order-1" : undefined}>
                  <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-brand uppercase">
                    {String(index + 1).padStart(2, "0")} · {project.status}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.4rem)] font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-ink-soft">{project.summary}</p>
                  <ul className="mt-5 max-w-2xl space-y-2 text-sm text-ink-soft">
                    {project.highlights.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 font-[family-name:var(--font-mono)] text-xs tracking-wide text-brand">
                    {project.stack.join(" · ")}
                  </p>
                </div>
              </div>
            </section>
          );
        })}

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-brand uppercase">
            {craft.ai.kicker}
          </p>
          <h2 className="mt-4 max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,4rem)] font-bold tracking-tight">
            {craft.ai.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{craft.ai.intro}</p>
          <p className="mt-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-brand uppercase">
            {craft.ai.methodLabel}
          </p>
          <ol className="mt-6 space-y-8">
            {craft.ai.steps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-6">
                <p className="font-[family-name:var(--font-mono)] text-[0.65rem] text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-lg font-medium text-ink">{step.title}</p>
                <p className="mt-2 max-w-2xl text-base text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-xl font-medium tracking-tight text-ink">
            {craft.ai.closing}
          </p>
        </section>

        <section className="border-t border-line bg-bg-elevated/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
              {skills.title}
            </h2>
            <p className="mt-3 max-w-2xl text-ink-soft">{skills.intro}</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.groups.map((group) => (
                <div key={group.label}>
                  <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
                    {group.label}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            {craft.origin.title}
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="text-ink-soft">
              <span className="font-medium text-ink">
                {craft.origin.eduengineTitle}.{" "}
              </span>
              {craft.origin.eduengineBody}
            </p>
            <p className="text-ink-soft">
              <span className="font-medium text-ink">
                {craft.origin.thesisTitle}.{" "}
              </span>
              {craft.origin.thesisBody}
            </p>
          </div>
          <h3 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-bold">
            {craft.build.title}
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {craft.build.points.map((point) => (
              <li key={point.title} className="border-t border-line pt-4 text-sm">
                <p className="font-medium text-ink">{point.title}</p>
                <p className="mt-1 text-ink-soft">{point.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-2xl text-ink-soft">{craft.contactBio}</p>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
