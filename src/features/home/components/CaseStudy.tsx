import {
  BriefcaseBusiness,
  CircleAlert,
  ListChecks,
  Sparkles,
} from "lucide-react";
import { caseStudy } from "@/features/home/constants/content";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function CaseStudy() {
  return (
    <section
      id="caso"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="section-kicker">02 · Experiencia</p>
      <h2 className="section-title max-w-3xl">{caseStudy.title}</h2>
      <p className="mt-3 font-[family-name:var(--font-mono)] text-sm text-ink-soft">
        {caseStudy.clientLabel}
      </p>

      <Separator className="mt-12" />

      <div className="grid gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-brand uppercase">
              <BriefcaseBusiness className="h-4 w-4" />
              Rol
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              {caseStudy.role}
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-brand uppercase">
              <CircleAlert className="h-4 w-4" />
              Problema
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {caseStudy.problem}
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-brand uppercase">
              <Sparkles className="h-4 w-4" />
              Impacto
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {caseStudy.impact}
            </p>
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-brand uppercase">
            <ListChecks className="h-4 w-4" />
            Enfoque
          </h3>
          <ol className="mt-4 space-y-4">
            {caseStudy.approach.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-line pb-4">
                <span className="font-[family-name:var(--font-mono)] text-sm text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-[0.08em] text-brand uppercase">
              Stack genérico
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {caseStudy.stack.map((item) => (
                <li key={item}>
                  <Badge variant="outline">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 border-l-2 border-brand pl-4 text-sm leading-relaxed text-ink-soft">
            {caseStudy.note}
          </p>
        </div>
      </div>

      <Separator />
    </section>
  );
}
