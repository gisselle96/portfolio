import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 {profile.name}
        </p>
        <p>Portafolio personal · sin assets confidenciales</p>
      </div>
    </footer>
  );
}
