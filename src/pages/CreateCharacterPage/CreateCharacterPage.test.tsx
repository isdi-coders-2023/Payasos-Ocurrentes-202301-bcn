import { render, screen } from "@testing-library/react";
import CreateCharacterPage from "./CreateCharacterPage";

describe("Given a form component in the Character Page", () => {
  describe("When it is rendered", () => {
    test("Then it should an input element with the arial-label 'Field of status character' and the role 'textbox'", () => {
      render(<CreateCharacterPage />);

      const expectedOutput = screen.getByRole("textbox", {
        name: "Field of status character",
      });

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
