import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When the Footer is rendered", () => {
    test("Then it will be show an element image with an arial-label with the text: 'Rick and Morty Footer'", () => {
      const textLabel = "Rick and Morty Footer";

      render(<Footer />);

      const result = screen.getByLabelText(textLabel);
      expect(result).toBeInTheDocument();
    });
  });
});
