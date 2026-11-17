import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the landing without prototype controls", () => {
    renderWithPreferences(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.queryByText(/proto ·/i)).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /variante/i }),
    ).not.toBeInTheDocument();
  });

  it("lists Zustand and Zod in the portals stack", () => {
    renderWithPreferences(<Home />);

    expect(screen.getAllByText("Zustand").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Zod").length).toBeGreaterThan(0);
  });
});
