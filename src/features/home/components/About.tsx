"use client";

import { Download } from "lucide-react";
import { profile } from "@/features/home/constants/content";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePreferences } from "@/providers/PreferencesProvider";

export function About() {
  const { dict } = usePreferences();
  const { about } = dict;

  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-8"
    >
      <Separator className="mb-10 sm:mb-12" />
      <p className="section-kicker">{about.kicker}</p>
      <h2 className="section-title max-w-3xl lg:max-w-none">{about.title}</h2>

      <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg lg:max-w-none">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-md px-5 text-base text-primary-foreground hover:text-primary-foreground"
        >
          <a
            href={profile.cvPath}
            download
            className="text-primary-foreground"
          >
            <Download className="h-4 w-4 text-primary-foreground" />
            {about.downloadCv}
          </a>
        </Button>
      </div>

      <Separator className="mt-12" />

      <div className="py-10">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
          {about.experienceTitle}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-mono)] text-sm text-ink-soft">
          {about.experienceLabel}
        </p>

        <div className="mt-8 space-y-6">
          {about.roles.map((role) => (
            <article
              key={`${role.title}-${role.company}`}
              className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] sm:gap-8"
            >
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                  {role.title}
                  <span className="font-medium text-ink-soft">
                    {" "}
                    @ {role.company}
                  </span>
                </h4>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-sm text-ink-soft">
                  {role.period}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-brand">
                  {role.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                {role.points.map((point) => (
                  <li key={point} className="border-l-2 border-line pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-6 border-y border-line py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            {about.educationTitle}
          </h3>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-sm text-ink-soft">
            {about.educationSchool}
          </p>
          <p className="mt-3 text-lg text-ink">{about.educationDegree}</p>
        </div>
        <p className="leading-relaxed text-ink-soft">{about.educationDetail}</p>
      </div>

      <div className="grid gap-6 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
          {about.workStyleTitle}
        </h3>
        <div>
          <ul className="space-y-2">
            {about.workStyle.map((item) => (
              <li key={item} className="border-l-2 border-brand pl-3 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
