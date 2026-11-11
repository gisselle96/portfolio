"use client";

import { useMemo, useState } from "react";
import { usePreferences } from "@/providers/PreferencesProvider";
import { DemoChrome } from "./DemoChrome";

type Filter = "all" | "active" | "error";
type RowStatus = "active" | "draft" | "error";

const ROWS: { id: string; name: string; status: RowStatus }[] = [
  { id: "A-104", name: "Alta de módulo", status: "active" },
  { id: "A-118", name: "Filtro por fecha", status: "draft" },
  { id: "A-132", name: "Export CSV", status: "error" },
  { id: "A-141", name: "Detalle de cliente", status: "active" },
];

export function AdminDemo() {
  const { dict } = usePreferences();
  const t = dict.craft.demos.admin;
  const [filter, setFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(false);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.filterAll },
    { key: "active", label: t.filterActive },
    { key: "error", label: t.filterError },
  ];

  const statusLabel: Record<RowStatus, string> = {
    active: t.statusActive,
    draft: t.statusDraft,
    error: t.statusError,
  };

  const rows = useMemo(() => {
    if (filter === "all") return ROWS;
    if (filter === "active") return ROWS.filter((row) => row.status === "active");
    return ROWS.filter((row) => row.status === "error");
  }, [filter]);

  return (
    <DemoChrome label={t.chrome}>
      <div className="grid gap-0 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
        <div className="border-b border-line p-4 sm:border-r sm:border-b-0">
          <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] text-brand uppercase">
            {t.filtersLabel}
          </p>
          <div className="mt-3 space-y-2" role="listbox" aria-label={t.filtersLabel}>
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                role="option"
                aria-selected={filter === item.key}
                onClick={() => setFilter(item.key)}
                className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  filter === item.key
                    ? "bg-brand/15 font-medium text-brand"
                    : "bg-bg text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setLoading((value) => !value)}
            className="mt-4 w-full rounded-md border border-line px-3 py-2 font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-soft transition-colors hover:border-brand hover:text-brand"
          >
            {loading ? t.showData : t.toggleLoading}
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              {t.title}
            </p>
            <span className="rounded-full bg-brand/15 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.65rem] text-brand">
              {loading ? "…" : rows.length}
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-line">
            <div className="grid grid-cols-[4.5rem_minmax(0,1fr)_5.5rem] gap-2 border-b border-line bg-bg px-3 py-2 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-wide text-ink-soft uppercase">
              <span>{t.colId}</span>
              <span>{t.colName}</span>
              <span>{t.colStatus}</span>
            </div>

            {loading ? (
              <div className="space-y-2 p-3" aria-live="polite" aria-busy="true">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="h-9 animate-pulse rounded-md bg-[color-mix(in_oklab,var(--ink)_8%,transparent)]"
                  />
                ))}
                <p className="pt-1 font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-soft">
                  {t.loading}
                </p>
              </div>
            ) : rows.length === 0 ? (
              <p className="px-3 py-8 text-center text-sm text-ink-soft">{t.empty}</p>
            ) : (
              <ul>
                {rows.map((row) => (
                  <li
                    key={row.id}
                    className="grid grid-cols-[4.5rem_minmax(0,1fr)_5.5rem] gap-2 border-b border-line px-3 py-2.5 text-sm last:border-b-0"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-ink-soft">
                      {row.id}
                    </span>
                    <span className="truncate font-medium text-ink">{row.name}</span>
                    <span
                      className={`font-[family-name:var(--font-mono)] text-[0.7rem] ${
                        row.status === "error"
                          ? "text-[color-mix(in_oklab,#b42318_90%,var(--ink))]"
                          : row.status === "active"
                            ? "text-brand"
                            : "text-ink-soft"
                      }`}
                    >
                      {statusLabel[row.status]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </DemoChrome>
  );
}
