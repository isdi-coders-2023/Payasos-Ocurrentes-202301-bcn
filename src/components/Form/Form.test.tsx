import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When the user make click on gender button", () => {
    test("Then it should to return an input label with a arial-label 'Field of origin character'", () => {
      const label = "Field of origin character";

      render(<Form />);

      const result = screen.getByLabelText(label);

      expect(result).toBeInTheDocument();
    });
  });
});
