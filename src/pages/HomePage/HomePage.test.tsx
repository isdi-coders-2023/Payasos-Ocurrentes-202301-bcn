import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should render a heading element on the screen", () => {
      render(<HomePage />);

      const text = screen.getByRole("heading");

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a 'Characters' text", () => {
      const expectedOutput = "Characters";
      render(<HomePage />);

      const text = screen.getByText(expectedOutput);

      expect(text).toBeVisible();
    });
  });
});
