"use client";

import {
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  LayoutDashboard,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { usePreferences } from "@/providers/PreferencesProvider";

const projectIcons = [LayoutDashboard, BriefcaseBusiness, Boxes] as const;

export function Projects() {
  const { dict } = usePreferences();
  const { projects } = dict;

  return (
    <section id="proyectos" className="site-container pt-16 sm:py-8">
      <Separator className="mb-10 sm:mb-12" />
      <p className="section-kicker">{projects.kicker}</p>
      <h2 className="section-title max-w-2xl lg:max-w-none">{projects.title}</h2>
      <p className="mt-4 max-w-2xl text-ink-soft lg:max-w-none">{projects.intro}</p>

      <div className="project-list mt-12 border-t border-line">
        {projects.items.map((project, index) => {
          const Icon = projectIcons[index] ?? Boxes;
          const isPublic = Boolean(project.href);

          const content = (
            <>
              <div className="flex min-w-0 items-start gap-3 sm:contents">
                <Icon
                  className="project-icon mt-0.5 h-7 w-7 shrink-0 text-brand"
                  strokeWidth={2.15}
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <h3 className="project-title flex min-w-0 items-center gap-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight sm:text-2xl">
                      {project.title}
                      {isPublic ? (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft" />
                      ) : null}
                    </h3>
                    <Badge className="shrink-0 uppercase">{project.status}</Badge>
                  </div>
                </div>
              </div>
              <div className="project-summary space-y-3 text-[0.98rem] leading-relaxed text-ink-soft">
                <p>{project.summary}</p>
                {"highlights" in project && project.highlights?.length ? (
                  <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-primary sm:justify-end sm:self-start">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          );

          if (isPublic) {
            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row grid-cols-1 border-0 sm:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-center"
              >
                {content}
              </a>
            );
          }

          return (
            <article
              key={project.title}
              className="project-row grid-cols-1 border-0 sm:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-center"
            >
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
