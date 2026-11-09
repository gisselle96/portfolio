import { ArrowRight, FileText } from "lucide-react";
import { profile } from "@/features/home/constants/content";
import { HeroMap } from "@/features/home/components/HeroMap";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-14 pt-28 sm:items-center sm:pb-20 sm:pt-24"
    >
      <HeroMap />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/35 via-bg/55 to-bg sm:from-transparent sm:via-bg/20 sm:to-bg/70"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="reveal section-kicker">{profile.role}</p>
        <h1 className="reveal reveal-delay-1 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(2.6rem,12vw,6.4rem)] leading-[0.94] font-bold tracking-[-0.045em] text-ink sm:max-w-3xl">
          {profile.name}
        </h1>
        <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-xl">
          {profile.tagline}
        </p>
        <div className="reveal reveal-delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-md px-5 text-base text-primary-foreground hover:text-primary-foreground sm:w-auto"
          >
            <a href="#proyectos" className="text-primary-foreground">
              Ver proyectos
              <ArrowRight className="h-4 w-4 text-primary-foreground" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 w-full rounded-md bg-bg-elevated/70 px-5 text-base backdrop-blur-sm sm:w-auto"
          >
            <a href="#caso">
              <FileText className="h-4 w-4" />
              Caso sanitizado
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
