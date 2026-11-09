import { render, screen } from "@testing-library/react";

describe("Vitest + Testing Library setup", () => {
  it("renders a React component in jsdom environment", () => {
    const TestComponent = () => <p data-testid="probe">hello</p>;
    render(<TestComponent />);
    expect(screen.getByTestId("probe")).toBeInTheDocument();
  });
});
