import {
  Code2,
  Database,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";
import { stackGroups } from "@/features/home/constants/content";
import { Separator } from "@/components/ui/separator";

const groupIcons = [PanelsTopLeft, Database, Code2, ShieldCheck] as const;

export function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="section-kicker">03 · Stack</p>
      <h2 className="section-title">Herramientas con las que construyo.</h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {stackGroups.map((group, index) => {
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
