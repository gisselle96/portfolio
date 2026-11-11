"use client";

/**
 * PROTOTYPE host — craft landing looks.
 * Question: "What should the craft-builder portfolio look like
 * (work demos + AI contract + skills), without copying Nelson?"
 * Three structurally different variants via ?variant= + bottom bar.
 * Run: yarn prototype → http://127.0.0.1:3000
 */
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PrototypeSwitcher } from "@/components/PrototypeSwitcher";
import {
  CraftVariantBands,
  CRAFT_BANDS_LABEL,
} from "./CraftVariantBands";
import {
  CraftVariantDesk,
  CRAFT_DESK_LABEL,
} from "./CraftVariantDesk";
import {
  CraftVariantMatch,
  CRAFT_MATCH_LABEL,
} from "./CraftVariantMatch";
import {
  CraftVariantScan,
  CRAFT_SCAN_LABEL,
} from "./CraftVariantScan";
import {
  LandingCraft,
  LANDING_CRAFT_LABEL,
} from "./LandingCraft";

const VARIANTS = [
  { key: "evidence", label: LANDING_CRAFT_LABEL },
  { key: "scan", label: CRAFT_SCAN_LABEL },
  { key: "match", label: CRAFT_MATCH_LABEL },
  { key: "desk", label: CRAFT_DESK_LABEL },
  { key: "bands", label: CRAFT_BANDS_LABEL },
] as const;

function HomePrototypeInner() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("variant") ?? "evidence";
  const key = raw === "craft" ? "evidence" : raw;

  const view =
    key === "scan" ? (
      <CraftVariantScan />
    ) : key === "match" ? (
      <CraftVariantMatch />
    ) : key === "desk" ? (
      <CraftVariantDesk />
    ) : key === "bands" ? (
      <CraftVariantBands />
    ) : (
      <LandingCraft />
    );

  return (
    <>
      {/* Surface prototype state for judging */}
      <p className="pointer-events-none fixed top-3 right-3 z-[100] rounded-md bg-[#101820]/90 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-wide text-white">
        proto · craft · {key}
      </p>
      {view}
      <PrototypeSwitcher variants={VARIANTS} />
    </>
  );
}

export function HomePrototype() {
  return (
    <Suspense fallback={<LandingCraft />}>
      <HomePrototypeInner />
    </Suspense>
  );
}
