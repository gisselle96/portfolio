import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithPreferences } from "@/test/renderWithPreferences";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("lists all projects", () => {
    renderWithPreferences(<Projects />);

    for (const project of dictionaries.es.projects.items) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});
