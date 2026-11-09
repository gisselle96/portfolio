import { describe, expect, it } from "vitest";
import {
  caseStudy,
  profile,
  projects,
  stackGroups,
} from "@/features/home/constants/content";

describe("home content", () => {
  it("exposes profile basics", () => {
    expect(profile.name).toBe("Gisselle Barreto");
    expect(profile.role).toBe("Frontend Engineer");
    expect(profile.links.github).toContain("gisselle96");
  });

  it("has project placeholders", () => {
    expect(projects.length).toBeGreaterThan(0);
    expect(projects.every((project) => project.title.length > 0)).toBe(true);
  });

  it("keeps the case study sanitized", () => {
    expect(caseStudy.note.toLowerCase()).toContain("sin código");
    expect(caseStudy.role.toLowerCase()).not.toContain("admin");
    expect(caseStudy.role.toLowerCase()).not.toContain("business");
  });

  it("groups the stack", () => {
    expect(stackGroups.length).toBeGreaterThan(0);
    expect(stackGroups.every((group) => group.items.length > 0)).toBe(true);
  });
});
