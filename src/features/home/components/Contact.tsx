"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { usePreferences } from "@/providers/PreferencesProvider";
import { ProfilePhoto } from "./ProfilePhoto";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { dict } = usePreferences();
  const { contact } = dict;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload.error ?? "No se pudo enviar el mensaje.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Error de red. Intentá de nuevo.");
    }
  }

  return (
    <section
      id="contacto"
      className="site-container py-16 sm:py-8"
    >
      <Separator className="mb-10 sm:mb-12" />
      <p className="section-kicker">{contact.kicker}</p>
      <h2 className="section-title max-w-3xl lg:max-w-none lg:text-[clamp(2rem,2.8vw,2.85rem)]">
        {contact.title}
      </h2>
      <p className="mt-4 max-w-xl text-ink-soft lg:max-w-none">
        {contact.intro}
      </p>
      <div className="mt-6 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)] md:items-center md:gap-12 lg:gap-16">
        <div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
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

            {status === "success" ? (
              <p className="text-sm text-brand" role="status">
                {contact.success}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-700 dark:text-red-400" role="alert">
                {errorMessage}
              </p>
            ) : null}
          </form>
        </div>

        <div className="flex w-full items-center justify-center border-t border-line pt-10 md:border-t-0 md:pt-0">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
