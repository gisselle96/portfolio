import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./Contact";
import { profile } from "@/features/home/constants/content";

describe("Contact", () => {
  it("renders email and social links", () => {
    render(<Contact />);

    expect(
      screen.getByRole("link", { name: profile.email }),
    ).toHaveAttribute("href", `mailto:${profile.email}`);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      profile.links.github,
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      profile.links.linkedin,
    );
  });
});
