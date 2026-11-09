import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { profile } from "@/features/home/constants/content";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders welcome content and CTAs", () => {
    renderWithPreferences(<Hero />);

    expect(
      screen.getByRole("heading", { name: profile.name }),
    ).toBeInTheDocument();
    expect(screen.getByText("Hola, soy")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /ver proyectos/i })[0],
    ).toHaveAttribute("href", "#proyectos");
    expect(screen.getAllByRole("link", { name: /sobre mí/i })[0]).toHaveAttribute(
      "href",
      "#sobre-mi",
    );
  });
});
