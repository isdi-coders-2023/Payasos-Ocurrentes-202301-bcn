import { render, screen } from "@testing-library/react";
import { mockStore, mockUiStore } from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import HomePage from "./HomePage";

const store = mockStore;
const uiStore = mockUiStore;

describe("Given a Character provider", () => {
  describe("When rendered", () => {
    test("Then it should show the HomePage component", () => {
      render(
        <Wrapper charactersStore={store} uiStore={uiStore}>
          <HomePage></HomePage>
        </Wrapper>
      );

      const result = screen.getByRole("heading", { level: 1 });

      expect(result).toBeInTheDocument();
    });
  });
});
