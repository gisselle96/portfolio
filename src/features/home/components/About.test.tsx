import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import { About } from "./About";

describe("About", () => {
  it("renders download CV action", () => {
    renderWithPreferences(<About />);
    expect(screen.getByRole("link", { name: /descargar cv/i })).toHaveAttribute(
      "href",
      "/cv/gisselle-barreto.pdf",
    );
  });
});
