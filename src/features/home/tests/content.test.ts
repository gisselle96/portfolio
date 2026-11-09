import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { profile } from "@/features/home/constants/content";

describe("home content", () => {
  it("exposes profile basics", () => {
    expect(profile.name).toBe("Gisselle Barreto");
    expect(profile.role).toContain("Software Engineer");
    expect(profile.cvPath).toBe("/cv/gisselle-barreto.pdf");
  });

  it("has spanish and english dictionaries", () => {
    expect(dictionaries.es.projects.items.length).toBeGreaterThan(0);
    expect(dictionaries.en.projects.items.length).toBeGreaterThan(0);
    expect(dictionaries.en.nav.about).toBe("About");
    expect(dictionaries.es.nav.about).toBe("Sobre mí");
  });

  it("keeps recent experience copy", () => {
    expect(dictionaries.es.about.experienceTitle.toLowerCase()).toContain(
      "experiencia",
    );
    expect(dictionaries.en.about.experienceTitle.toLowerCase()).toContain(
      "experience",
    );
  });

  it("groups the skills", () => {
    expect(dictionaries.es.skills.groups.length).toBeGreaterThan(0);
    expect(
      dictionaries.es.skills.groups.every((group) => group.items.length > 0),
    ).toBe(true);
  });
});
