import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <p className="section-kicker">01 · Proyectos propios</p>
      <h2 className="section-title max-w-2xl">
        Piezas personales que demuestran el craft — sin código del cliente.
      </h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Reemplazá los links cuando los publiques. Cada uno replica patrones del
        trabajo real con datos inventados.
      </p>

      <div className="mt-12">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="project-row grid-cols-1 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-start"
          >
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] text-accent uppercase">
                {project.status}
              </p>
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
        ))}
      </div>
    </section>
  );
}
