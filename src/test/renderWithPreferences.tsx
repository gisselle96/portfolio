import { render, type RenderOptions } from "@testing-library/react";
import { PreferencesProvider } from "@/providers/PreferencesProvider";

export function renderWithPreferences(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, {
    ...options,
    wrapper: ({ children }) => (
      <PreferencesProvider>{children}</PreferencesProvider>
    ),
  });
}
