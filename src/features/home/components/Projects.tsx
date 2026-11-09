import { ArrowUpRight, Boxes, LayoutDashboard, Map } from "lucide-react";
import { projects } from "@/features/home/constants/content";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projectIcons = [LayoutDashboard, Map, Boxes] as const;

export function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="section-kicker">01 · Proyectos propios</p>
      <h2 className="section-title max-w-2xl">
        Piezas personales que demuestran el craft — sin código del cliente.
      </h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Reemplazá los links cuando los publiques. Cada uno replica patrones del
        trabajo real con datos inventados.
      </p>

      <div className="mt-12">
        <Separator />
        {projects.map((project, index) => {
          const Icon = projectIcons[index] ?? Boxes;

          return (
            <div key={project.title}>
              <a
                href={project.href}
                className="project-row grid-cols-1 border-0 sm:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-start"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-line bg-bg-elevated/70 text-brand">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft" />
                  </h3>
                  <Badge variant="secondary" className="mt-2 uppercase">
                    {project.status}
                  </Badge>
                </div>
                <p className="text-[0.98rem] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink sm:justify-end">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </a>
              <Separator />
            </div>
          );
        })}
      </div>
    </section>
  );
}
