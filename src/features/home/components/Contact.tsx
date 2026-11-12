"use client";

import { useState } from "react";
import Script from "next/script";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { getRecaptchaSiteKey, RECAPTCHA_ACTION } from "@/lib/recaptcha";
import { getWeb3FormsAccessKey } from "@/lib/web3forms";
import { usePreferences } from "@/providers/PreferencesProvider";
import { ContactLinks } from "./ContactLinks";

type FormStatus = "idle" | "loading";

async function waitForGrecaptcha(timeoutMs = 8000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (window.grecaptcha?.execute) {
      return window.grecaptcha;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return null;
}

async function getCaptchaToken(siteKey: string) {
  const api = await waitForGrecaptcha();
  if (!api?.execute) {
    throw new Error("recaptcha-unavailable");
  }

  await new Promise<void>((resolve) => {
    api.ready(() => resolve());
  });

  const token = await api.execute(siteKey, { action: RECAPTCHA_ACTION });
  if (!token) {
    throw new Error("recaptcha-empty-token");
  }
  return token;
}

export function Contact() {
  const { dict } = usePreferences();
  const { contact } = dict;
  const [status, setStatus] = useState<FormStatus>("idle");
  const siteKey = getRecaptchaSiteKey();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    let captchaToken = "";
    try {
      captchaToken = await getCaptchaToken(siteKey);
    } catch {
      toast.error(contact.captchaRequired);
      setStatus("idle");
      return;
    }

    if (!captchaToken) {
      toast.error(contact.captchaRequired);
      setStatus("idle");
      return;
    }

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const company = String(formData.get("company") ?? "");
    const accessKey = getWeb3FormsAccessKey();

    if (!accessKey) {
      toast.error(
        "Falta NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Configurala en Vercel y redeploy.",
      );
      setStatus("idle");
      return;
    }

    try {
      // 1) Server: honeypot + reCAPTCHA
      const verifyResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
          captchaToken,
        }),
      });

      const verifyPayload = (await verifyResponse.json()) as { error?: string };

      if (!verifyResponse.ok) {
        toast.error(verifyPayload.error ?? "No se pudo enviar el mensaje.");
        setStatus("idle");
        return;
      }

      // 2) Browser: Web3Forms (free plan blocks server-side calls)
      const mailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio · mensaje de ${name}`,
          from_name: "Portfolio Gisselle",
        }),
      });

      const mailPayload = (await mailResponse.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!mailResponse.ok || mailPayload.success === false) {
        toast.error(
          mailPayload.message ||
            "No se pudo enviar ahora. Probá de nuevo o escribime directo.",
        );
        setStatus("idle");
        return;
      }

      form.reset();
      toast.success(contact.success);
      setStatus("idle");
    } catch {
      toast.error(contact.networkError);
      setStatus("idle");
    }
  }

  return (
    <section
      id="contacto"
      className="site-container py-16 sm:py-8"
    >
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`}
        strategy="afterInteractive"
      />
      <Separator className="mb-10 sm:mb-12" />
      <p className="section-kicker">{contact.kicker}</p>
      <h2 className="section-title max-w-3xl lg:max-w-none lg:text-[clamp(2rem,2.8vw,2.85rem)]">
        {contact.title}
      </h2>
      <p className="mt-4 text-ink-soft">
        {contact.intro}
      </p>
      <div className="mt-6 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)] md:items-center md:gap-12 lg:gap-16">
        <div>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="space-y-2">
              <Label htmlFor="name">{contact.name}</Label>
              <Input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder={contact.namePlaceholder}
                className="h-11 bg-bg-elevated"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{contact.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={contact.emailPlaceholder}
                className="h-11 bg-bg-elevated"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{contact.message}</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={contact.messagePlaceholder}
                className="bg-bg-elevated"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="h-12 w-full rounded-md px-5 text-base text-primary-foreground hover:text-primary-foreground sm:w-auto"
            >
              <Send className="h-4 w-4 text-primary-foreground" />
              {status === "loading" ? contact.sending : contact.send}
            </Button>

            <p className="text-xs leading-relaxed text-ink-soft">
              {contact.captchaNotice}{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink"
              >
                Privacy
              </a>
              {" · "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink"
              >
                Terms
              </a>
            </p>
          </form>
        </div>

        <div className="flex w-full items-center justify-center border-t border-line pt-10 md:border-t-0 md:pt-0">
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
