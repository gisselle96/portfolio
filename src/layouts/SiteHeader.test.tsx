import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";
import { siteConfig } from "@/config/site";
import { profile } from "@/features/home/constants/content";

describe("SiteHeader", () => {
  it("renders brand and desktop navigation", () => {
    render(<SiteHeader />);

    expect(screen.getByText(profile.name)).toBeInTheDocument();
    for (const link of siteConfig.nav) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });
});
