import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("renders copyright year without name", () => {
    renderWithPreferences(<SiteFooter />);
    expect(screen.getByText("© 2026")).toBeInTheDocument();
    expect(screen.queryByText(/gisselle/i)).not.toBeInTheDocument();
  });
});
