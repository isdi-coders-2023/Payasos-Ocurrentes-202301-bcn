import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When the Header was rendered", () => {
    test("It should to show a 'heart icon' with a aria-label attribute: 'Favourites link'", () => {
      render(<Header />);

      const text = screen.getByRole("link", { name: "Favourites link" });

      expect(text).toBeInTheDocument();
    });
  });
});
