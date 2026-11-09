import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./SiteFooter";
import { profile } from "@/features/home/constants/content";

describe("SiteFooter", () => {
  it("renders copyright with profile name", () => {
    render(<SiteFooter />);
    expect(screen.getByText(new RegExp(profile.name))).toBeInTheDocument();
  });
});
