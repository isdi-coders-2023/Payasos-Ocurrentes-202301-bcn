import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When the Header was rendered", () => {
    test("It should to show a 'heart icon' with a aria-label attribute: 'Favourites link'", () => {
      render(<Header />, { wrapper: BrowserRouter });

      const text = screen.getByRole("link", { name: "Favourites link" });

      expect(text).toBeInTheDocument();
    });
  });
});
