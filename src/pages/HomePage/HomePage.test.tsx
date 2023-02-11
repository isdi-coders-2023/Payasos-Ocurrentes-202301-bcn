import { render, screen } from "@testing-library/react";
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
});
