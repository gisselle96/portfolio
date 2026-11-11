"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { profile } from "@/features/home/constants/content";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

/** Contact identity + socials, without profile photo. */
export function ContactLinks() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <aside
      aria-label="Contacto y redes"
      className="flex flex-col items-center justify-center gap-4 text-center"
    >
      <div>
        <p className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
          {profile.name}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{profile.role}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={copyEmail}
          aria-label={`Copiar email ${profile.email}`}
          className="group relative text-ink transition-colors hover:text-brand focus-visible:text-brand"
        >
          <Mail className="h-6 w-6" strokeWidth={2} />
          <span
            className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-bg-elevated px-2.5 py-1 text-xs text-ink shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            {copied ? "Copiado" : profile.email}
          </span>
        </button>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-ink transition-colors hover:text-brand"
        >
          <GitHubIcon className="h-6 w-6" />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-ink transition-colors hover:text-brand"
        >
          <LinkedInIcon className="h-6 w-6" />
        </a>
      </div>
    </aside>
  );
}
