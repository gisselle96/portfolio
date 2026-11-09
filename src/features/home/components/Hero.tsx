"use client";

import Image from "next/image";
import { ArrowRight, UserRound } from "lucide-react";
import { profile } from "@/features/home/constants/content";
import { Button } from "@/components/ui/button";
import { usePreferences } from "@/providers/PreferencesProvider";

function HeroActions({ className = "" }: { className?: string }) {
  const { dict } = usePreferences();

  return (
    <div className={className}>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="h-12 w-full rounded-md border-line bg-bg-elevated/80 px-5 text-base backdrop-blur-sm hover:border-brand hover:bg-accent hover:text-brand sm:w-auto"
      >
        <a href="#sobre-mi">
          <UserRound className="h-4 w-4" />
          {dict.hero.aboutCta}
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="h-12 w-full rounded-md px-5 text-base text-primary-foreground hover:text-primary-foreground sm:w-auto"
      >
        <a href="#proyectos" className="text-primary-foreground">
          {dict.hero.projectsCta}
          <ArrowRight className="h-4 w-4 text-primary-foreground" />
        </a>
      </Button>
    </div>
  );
}

export function Hero() {
  const { dict } = usePreferences();

  return (
    <section
      id="welcome"
      className="relative z-10 flex items-start overflow-x-clip pb-8 pt-14 sm:min-h-[100svh] sm:items-center sm:pb-20 sm:pt-24"
    >
      <div className="site-container relative grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 xl:gap-14">
        <div className="relative z-10 min-w-0">
          <p className="reveal mt-4 mb-3 font-[family-name:var(--font-mono)] text-[0.95rem] tracking-[0.04em] text-brand">
            {dict.hero.kicker}
          </p>
          <h1 className="reveal reveal-delay-1 max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(2.5rem,9vw,4.75rem)] leading-[0.96] font-bold tracking-[-0.05em] text-ink lg:max-w-none lg:text-[clamp(2.75rem,4.2vw,4.85rem)]">
            {profile.name}
          </h1>
          <p className="reveal reveal-delay-2 mt-2 text-lg font-medium text-brand sm:text-xl">
            {dict.hero.role}
          </p>
          <p className="reveal reveal-delay-2 mt-1 font-[family-name:var(--font-mono)] text-sm tracking-[0.04em] text-ink-soft sm:text-base">
            {dict.hero.focus}
          </p>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-xl lg:max-w-none">
            {dict.hero.tagline}
          </p>
          <HeroActions className="reveal reveal-delay-3 mt-8 hidden w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap lg:flex" />
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-lg lg:mx-0 lg:max-w-none">
          <Image
            src={profile.heroVisualPath}
            alt=""
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="h-auto w-full object-contain"
          />
        </div>

        <HeroActions className="reveal reveal-delay-3 flex w-full flex-col gap-3 lg:hidden" />
      </div>
    </section>
  );
}
