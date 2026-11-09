import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <p className="section-kicker">04 · Contacto</p>
      <h2 className="section-title max-w-3xl">
        ¿Hablamos de un rol o un proyecto?
      </h2>
      <p className="mt-4 max-w-xl text-ink-soft">
        {profile.location}. Editá email y redes en{" "}
        <code className="font-[family-name:var(--font-mono)] text-sm text-ink">
          src/data/content.ts
        </code>
        .
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="cta-primary">
          {profile.email}
        </a>
        <a
          href={profile.links.github}
          className="cta-secondary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          className="cta-secondary"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
