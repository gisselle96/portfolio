import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "./Projects";
import { projects } from "@/features/home/constants/content";

describe("Projects", () => {
  it("lists all projects", () => {
    render(<Projects />);

    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});
