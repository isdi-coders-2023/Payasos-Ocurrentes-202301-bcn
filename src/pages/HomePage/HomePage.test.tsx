import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockStore, mockUiStore } from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import HomePage from "./HomePage";

const store = mockStore;
const uiStore = mockUiStore;

describe("Given a HomePage component", () => {
  describe("When rendered with is context provider", () => {
    test("Then it should show a level 1 heading", () => {
      render(
        <Wrapper charactersStore={store} uiStore={uiStore}>
          <HomePage></HomePage>
        </Wrapper>
      );

      const result = screen.getByRole("heading", { level: 1 });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When rendered and the data needed to render a list is avaliable", () => {
    test("Then it should show a character with the name `Rick`", () => {
      const expectedName = "Rick";

      render(
        <Wrapper charactersStore={store} uiStore={uiStore}>
          <HomePage></HomePage>
        </Wrapper>
      );

      const resultedName = screen.getByText(expectedName);

      expect(resultedName).toBeInTheDocument();
    });
  });

  describe("When rendered", () => {
    test("Then it should show two buttons with the text `Previous` and `Next` that should be clickeable", () => {
      const expectedButtonPrevText = "Previous";
      const expectedButtonNextText = "Next";

      render(
        <Wrapper charactersStore={store} uiStore={uiStore}>
          <HomePage></HomePage>
        </Wrapper>
      );

      const previousButton = screen.getByRole("button", {
        name: expectedButtonPrevText,
      });
      const nextButton = screen.getByRole("button", {
        name: expectedButtonNextText,
      });

      userEvent.click(previousButton);
      userEvent.click(nextButton);

      expect(previousButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });
  });
});
