"use client";

import {
  Code2,
  Database,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePreferences } from "@/providers/PreferencesProvider";

const groupIcons = [PanelsTopLeft, Database, Code2, ShieldCheck] as const;

export function Skills() {
  const { dict } = usePreferences();
  const { skills } = dict;

  return (
    <section
      id="skills"
      className="site-container pt-16 sm:py-8"
    >
      <Separator className="mb-10 sm:mb-12" />
      <p className="section-kicker">{skills.kicker}</p>
      <h2 className="section-title max-w-2xl lg:max-w-none">{skills.title}</h2>
      <p className="mt-4 max-w-2xl text-ink-soft lg:max-w-none">{skills.intro}</p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {skills.groups.map((group, index) => {
          const Icon = groupIcons[index] ?? Code2;

          return (
            <div key={group.label}>
              <Separator />
              <div className="pt-5">
                <h3 className="flex items-center gap-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                  <Icon className="h-4 w-4 text-brand" />
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-ink-soft">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
