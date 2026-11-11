"use client";

/**
 * PROTOTYPE craft variant — Desk.
 * Question: what should the craft landing look like?
 * Structure: sticky identity rail + one active case (not stacked evidence pairs).
 */
import { useState } from "react";
import { PreferenceControls } from "@/components/PreferenceControls";
import { Contact } from "@/features/home/components/Contact";
import { profile } from "@/features/home/constants/content";
import { SiteFooter } from "@/layouts";
import { usePreferences } from "@/providers/PreferencesProvider";
import { AdminDemo } from "./craft/AdminDemo";
import { FormDemo } from "./craft/FormDemo";
import { TokensDemo } from "./craft/TokensDemo";

export const CRAFT_DESK_LABEL = "Desk · caso activo";

const demos = [AdminDemo, FormDemo, TokensDemo] as const;

export function CraftVariantDesk() {
  const { dict } = usePreferences();
  const { craft, skills } = dict;
  const [active, setActive] = useState(0);
  const project = craft.work.cases[active] ?? craft.work.cases[0];
  const Demo = demos[active] ?? AdminDemo;

  return (
    <>
      <div className="relative z-10 min-h-svh lg:grid lg:grid-cols-[minmax(15rem,22rem)_minmax(0,1fr)]">
        <aside className="border-b border-line bg-bg-elevated/70 px-5 py-6 lg:sticky lg:top-0 lg:h-svh lg:overflow-y-auto lg:border-r lg:border-b-0 lg:px-6 lg:py-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.16em] text-brand uppercase">
                {craft.hero.kicker}
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm text-ink-soft">{craft.hero.focus}</p>
            </div>
            <PreferenceControls />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            {craft.hero.support}
          </p>

          <nav className="mt-8 space-y-1">
            <p className="mb-2 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
              {craft.nav.work}
            </p>
            {craft.work.cases.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`block w-full rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                  active === index
                    ? "bg-brand/15 font-medium text-brand"
                    : "text-ink-soft hover:bg-bg hover:text-ink"
                }`}
              >
                <span className="font-[family-name:var(--font-mono)] text-[0.65rem] opacity-70">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {item.title}
              </button>
            ))}
          </nav>

          <div className="mt-8 border-t border-line pt-6">
            <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
              {craft.ai.kicker}
            </p>
            <p className="mt-2 text-sm font-medium text-ink">{craft.ai.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              {craft.ai.closing}
            </p>
          </div>

          <div className="mt-6">
            <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
              {skills.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.groups
                .flatMap((group) => group.items)
                .slice(0, 14)
                .map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line px-2 py-1 font-[family-name:var(--font-mono)] text-[0.65rem] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </aside>

        <main className="px-5 py-8 pb-28 sm:px-8 lg:py-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-brand uppercase">
            {project.status}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">{project.summary}</p>
          <ul className="mt-6 max-w-2xl space-y-2 text-sm text-ink-soft">
            {project.highlights.map((item) => (
              <li key={item} className="border-l-2 border-brand pl-3">
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-brand">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 max-w-3xl">
            <p className="mb-3 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.08em] text-ink-soft uppercase">
              {craft.work.demoNote}
            </p>
            <Demo />
          </div>

          <div className="mt-16 grid gap-8 border-t border-line pt-10 lg:grid-cols-2">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {craft.origin.eduengineTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {craft.origin.eduengineBody}
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {craft.origin.thesisTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {craft.origin.thesisBody}
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
              {craft.build.title}
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {craft.build.points.map((point) => (
                <li key={point.title} className="text-sm">
                  <p className="font-medium text-ink">{point.title}</p>
                  <p className="mt-1 text-ink-soft">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 max-w-2xl text-ink-soft">{craft.contactBio}</p>
          <Contact />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
