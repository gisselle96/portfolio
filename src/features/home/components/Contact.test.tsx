import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
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
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
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

  it("shows success after a successful submit", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });
    vi.stubGlobal("fetch", fetchMock);

    renderWithPreferences(<Contact />);
    await fillAndSubmit();

    expect(await screen.findByRole("status")).toHaveTextContent(contact.success);
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Ana",
          email: "ana@mail.com",
          message: "Hola, me interesa tu perfil",
        }),
      }),
    );
    await waitFor(() => {
      expect(screen.getByRole("textbox", { name: /nombre/i })).toHaveValue("");
    });
  });

  it("shows api error message when the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: "Completá nombre, email y mensaje." }),
      }),
    );

    renderWithPreferences(<Contact />);
    await fillAndSubmit();

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Completá nombre, email y mensaje.",
    );
  });

  it("shows network error when fetch throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    renderWithPreferences(<Contact />);
    await fillAndSubmit();

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Error de red. Intentá de nuevo.",
    );
  });
});
