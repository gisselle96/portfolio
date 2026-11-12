import { describe, expect, it } from "vitest";
import { cv, cvByLocale, cvFileNameFor } from "./content";

describe("cv content", () => {
  it("keeps identity and downloadable pdf names", () => {
    expect(cv.name).toBe("Gisselle Barreto");
    expect(cv.role).toContain("Software Engineer");
    expect(cvFileNameFor("en")).toBe("gisselle-barreto-cv-ats-en.pdf");
  });

  it("has experience and skills to regenerate the pdf", () => {
    expect(cv.experience.length).toBeGreaterThan(0);
    expect(cv.skills.length).toBeGreaterThan(0);
    expect(cv.updatedAt.length).toBeGreaterThan(0);
  });

  it("keeps both locales aligned", () => {
    expect(cvByLocale.en.experience.length).toBe(cvByLocale.es.experience.length);
    expect(cvByLocale.en.skills.length).toBe(cvByLocale.es.skills.length);
  });
});
