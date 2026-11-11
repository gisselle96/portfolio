"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PrototypeSwitcherProps = {
  variants: readonly { key: string; label: string }[];
  param?: string;
};

export function PrototypeSwitcher({
  variants,
  param = "variant",
}: PrototypeSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isProd = process.env.NODE_ENV === "production";

  const currentKey = searchParams.get(param) ?? variants[0]?.key ?? "A";
  const index = Math.max(
    0,
    variants.findIndex((variant) => variant.key === currentKey),
  );
  const current = variants[index] ?? variants[0];

  function go(nextIndex: number) {
    const wrapped = (nextIndex + variants.length) % variants.length;
    const next = variants[wrapped];
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, next.key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    if (isProd) return;

    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(index + 1);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- prototype: rebind on index change only
  }, [isProd, index, pathname, searchParams, param]);

  if (isProd) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] flex justify-center px-3">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/20 bg-[#101820] px-2 py-1.5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          aria-label="Variante anterior"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
          onClick={() => go(index - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <p className="min-w-[11rem] text-center font-[family-name:var(--font-mono)] text-xs tracking-wide">
          {current.key} · {current.label}
        </p>
        <button
          type="button"
          aria-label="Variante siguiente"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
          onClick={() => go(index + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
