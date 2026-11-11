"use client";

import { useState } from "react";
import { usePreferences } from "@/providers/PreferencesProvider";
import { DemoChrome } from "./DemoChrome";

type Step = 0 | 1 | 2;

export function FormDemo() {
  const { dict } = usePreferences();
  const t = dict.craft.demos.form;
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const nameInvalid = touched && name.trim().length === 0;
  const emailInvalid =
    touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const steps = [t.stepData, t.stepReview, t.stepDone];

  function goNext() {
    setTouched(true);
    if (name.trim().length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return;
    }
    setStep(1);
  }

  function restart() {
    setStep(0);
    setName("");
    setEmail("");
    setTouched(false);
  }

  return (
    <DemoChrome label={t.chrome}>
      <div className="p-4 sm:p-5">
        <ol className="flex flex-wrap gap-2">
          {steps.map((label, index) => (
            <li
              key={label}
              className={`rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] ${
                index === step
                  ? "bg-brand/15 text-brand"
                  : index < step
                    ? "bg-bg text-ink"
                    : "bg-bg text-ink-soft"
              }`}
            >
              {String(index + 1).padStart(2, "0")} · {label}
            </li>
          ))}
        </ol>

        {step === 0 ? (
          <div className="mt-5 space-y-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-ink">{t.nameLabel}</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t.namePlaceholder}
                className="h-10 w-full rounded-md border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand"
              />
              {nameInvalid ? (
                <span className="block text-xs text-[color-mix(in_oklab,#b42318_90%,var(--ink))]">
                  {t.nameError}
                </span>
              ) : null}
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-ink">{t.emailLabel}</span>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t.emailPlaceholder}
                className="h-10 w-full rounded-md border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand"
              />
              {emailInvalid ? (
                <span className="block text-xs text-[color-mix(in_oklab,#b42318_90%,var(--ink))]">
                  {t.emailError}
                </span>
              ) : null}
            </label>
            <button
              type="button"
              onClick={goNext}
              className="h-10 rounded-md bg-brand px-4 text-sm font-medium text-primary-foreground"
            >
              {t.next}
            </button>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="mt-5 space-y-4">
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              {t.reviewTitle}
            </p>
            <dl className="space-y-3 rounded-lg border border-line bg-bg p-4 text-sm">
              <div>
                <dt className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-wide text-ink-soft uppercase">
                  {t.nameLabel}
                </dt>
                <dd className="mt-1 text-ink">{name}</dd>
              </div>
              <div>
                <dt className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-wide text-ink-soft uppercase">
                  {t.emailLabel}
                </dt>
                <dd className="mt-1 text-ink">{email}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="h-10 rounded-md border border-line px-4 text-sm text-ink"
              >
                {t.back}
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="h-10 rounded-md bg-brand px-4 text-sm font-medium text-primary-foreground"
              >
                {t.submit}
              </button>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-5 space-y-4">
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              {t.doneTitle}
            </p>
            <p className="text-sm leading-relaxed text-ink-soft">{t.doneBody}</p>
            <button
              type="button"
              onClick={restart}
              className="h-10 rounded-md border border-line px-4 text-sm text-ink hover:border-brand hover:text-brand"
            >
              {t.restart}
            </button>
          </div>
        ) : null}
      </div>
    </DemoChrome>
  );
}
