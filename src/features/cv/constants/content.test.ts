import { describe, expect, it } from "vitest";
import { cv, cvFileName } from "./content";

describe("cv content", () => {
  it("keeps identity and downloadable pdf name", () => {
    expect(cv.name).toBe("Gisselle Barreto");
    expect(cv.role).toContain("Software Engineer");
    expect(cvFileName.endsWith(".pdf")).toBe(true);
  });

  it("has experience and skills to regenerate the pdf", () => {
    expect(cv.experience.length).toBeGreaterThan(0);
    expect(cv.skills.length).toBeGreaterThan(0);
    expect(cv.updatedAt.length).toBeGreaterThan(0);
  });
});
