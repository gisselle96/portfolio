import { stackGroups } from "@/data/content";

export function Stack() {
  return (
    <section id="stack" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <p className="section-kicker">03 · Stack</p>
      <h2 className="section-title">Herramientas con las que construyo.</h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.label} className="border-t border-line pt-5">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-ink-soft">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
