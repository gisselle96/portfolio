import { FolderGit2, Link2, Mail } from "lucide-react";
import { profile } from "@/features/home/constants/content";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contacto"
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="section-kicker">04 · Contacto</p>
      <h2 className="section-title max-w-3xl">
        ¿Hablamos de un rol o un proyecto?
      </h2>
      <p className="mt-4 max-w-xl text-ink-soft">
        {profile.location}. Editá email y redes en{" "}
        <code className="break-all font-[family-name:var(--font-mono)] text-sm text-ink">
          src/features/home/constants/content.ts
        </code>
        .
      </p>

      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-md px-5 text-base text-primary-foreground hover:text-primary-foreground sm:w-auto"
        >
          <a href={`mailto:${profile.email}`} className="text-primary-foreground">
            <Mail className="h-4 w-4 text-primary-foreground" />
            {profile.email}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 w-full rounded-md bg-bg-elevated/70 px-5 text-base sm:w-auto"
        >
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <FolderGit2 className="h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 w-full rounded-md bg-bg-elevated/70 px-5 text-base sm:w-auto"
        >
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <Link2 className="h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
