import { profile } from "@/data/content";
import { HeroMap } from "@/components/HeroMap";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-20 sm:pt-24"
    >
      <HeroMap />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="reveal section-kicker">{profile.role}</p>
        <h1 className="reveal reveal-delay-1 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(3.2rem,10vw,6.4rem)] leading-[0.92] font-bold tracking-[-0.045em] text-ink">
          {profile.name}
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          {profile.tagline}
        </p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
          <a href="#proyectos" className="cta-primary">
            Ver proyectos
          </a>
          <a href="#caso" className="cta-secondary">
            Caso sanitizado
          </a>
        </div>
      </div>
    </section>
  );
}
