import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import { SiteHeader } from "./SiteHeader";

const es = dictionaries.es;

describe("SiteHeader", () => {
  it("renders home brand and desktop navigation labels", () => {
    renderWithPreferences(<SiteHeader />);

    expect(
      screen.getByRole("link", { name: es.brandLabel }),
    ).toHaveAttribute("href", "#welcome");
    expect(screen.getByRole("link", { name: es.nav.about })).toHaveAttribute(
      "href",
      "#sobre-mi",
    );
    expect(screen.getByRole("link", { name: es.nav.contact })).toHaveAttribute(
      "href",
      "#contacto",
    );
  });

  it("opens mobile menu with expected sections", async () => {
    const user = userEvent.setup();
    renderWithPreferences(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: /abrir menú/i }));

    const menu = screen.getByRole("dialog", { name: /navegación/i });
    expect(menu).toHaveTextContent(es.nav.welcome);
    expect(menu).toHaveTextContent(es.nav.about);
    expect(menu).toHaveTextContent(es.nav.contact);
  });
});
