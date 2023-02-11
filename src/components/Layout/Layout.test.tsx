import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with the text `rick and morty - wiki`", () => {
      const expectedHeader = "rick and morty - wiki";

      render(<Layout />, { wrapper: BrowserRouter });

      const header = screen.getByText(expectedHeader);

      expect(header).toBeInTheDocument();
    });
  });
});
