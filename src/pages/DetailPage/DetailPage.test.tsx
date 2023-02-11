import { render, screen } from "@testing-library/react";
import { DetailPage } from "./DetailPage";

describe("Given a Detail Page component", () => {
  describe("When rendered with a character", () => {
    test("Then it should show a detail page of the character with an 'h2' on it", () => {
      render(<DetailPage />);
      const expectedResultDetail = screen.getByRole("heading", { level: 2 });

      const resultStatus = screen.getByText("Alive");

      expect(resultStatus).toBeInTheDocument();
      expect(expectedResultDetail).toBeInTheDocument();
    });
  });
});
