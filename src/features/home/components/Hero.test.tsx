import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { profile } from "@/features/home/constants/content";

describe("Hero", () => {
  it("renders name, role and primary CTA", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: profile.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.role)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ver proyectos/i }),
    ).toHaveAttribute("href", "#proyectos");
  });
});
