import { render, screen } from "@testing-library/react";
import GlobalStyles from "../../styles/GlobalStyles";
import ErrorPage from "./ErrorPage";

describe("Given a ErrorPage component", () => {
  describe("When rendered with GlobalStyles component", () => {
    test("Then it should show a text with `404`and `Sorry, we were unable to find that page`", () => {
      const expectedError = "404";
      const expectedTextError = "Sorry, we were unable to find that page";

      render(
        <>
          <GlobalStyles />
          <ErrorPage />
        </>
      );

      const error = screen.getByText(expectedError);
      const textError = screen.getByText(expectedTextError);

      expect(error).toBeInTheDocument();
      expect(textError).toBeInTheDocument();
    });
  });
});
