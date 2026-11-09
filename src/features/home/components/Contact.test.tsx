import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import { Contact } from "./Contact";

const { contact } = dictionaries.es;

async function fillAndSubmit() {
  const user = userEvent.setup();

  await user.type(screen.getByRole("textbox", { name: /nombre/i }), "Ana");
  await user.type(screen.getByRole("textbox", { name: /^email$/i }), "ana@mail.com");
  await user.type(
    screen.getByRole("textbox", { name: /mensaje/i }),
    "Hola, me interesa tu perfil",
  );
  await user.click(screen.getByRole("button", { name: /enviar mensaje/i }));

  return user;
}

describe("Contact", () => {
  beforeEach(() => {
    window.grecaptcha = {
      ready: (callback) => callback(),
      execute: vi.fn().mockResolvedValue("test-captcha-token"),
    };
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    delete window.grecaptcha;
  });

  it("renders contact form fields", () => {
    renderWithPreferences(<Contact />);
    expect(screen.getByRole("textbox", { name: /nombre/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /^email$/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /mensaje/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /enviar mensaje/i }),
    ).toBeInTheDocument();
  });

  it("shows success toast after a successful submit", async () => {
    const successSpy = vi.spyOn(toast, "success");
    const errorSpy = vi.spyOn(toast, "error");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });
    vi.stubGlobal("fetch", fetchMock);

    renderWithPreferences(<Contact />);
    await fillAndSubmit();

    await waitFor(() => {
      expect(successSpy).toHaveBeenCalledWith(contact.success);
    });
    expect(errorSpy).not.toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          name: "Ana",
          email: "ana@mail.com",
          message: "Hola, me interesa tu perfil",
          company: "",
          captchaToken: "test-captcha-token",
        }),
      }),
    );
  });

  it("shows error toast when the request fails", async () => {
    const errorSpy = vi.spyOn(toast, "error");

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: "Completá nombre, email y mensaje." }),
      }),
    );

    renderWithPreferences(<Contact />);
    await fillAndSubmit();

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith("Completá nombre, email y mensaje.");
    });
  });

  it("shows captcha toast when token is missing", async () => {
    window.grecaptcha = {
      ready: (callback) => callback(),
      execute: vi.fn().mockResolvedValue(""),
    };
    const errorSpy = vi.spyOn(toast, "error");

    renderWithPreferences(<Contact />);
    await fillAndSubmit();

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith(contact.captchaRequired);
    });
  });
});
