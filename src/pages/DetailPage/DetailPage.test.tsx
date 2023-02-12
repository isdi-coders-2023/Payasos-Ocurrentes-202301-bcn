import { render, screen } from "@testing-library/react";
import { mockStore, mockUiStore } from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import { DetailPage } from "./DetailPage";

const store = mockStore;
const uiStore = mockUiStore;

describe("Given a Detail Page component", () => {
  describe("When rendered with a character", () => {
    test("Then it should show a detail page of the character with an 'h2' on it", async () => {
      render(
        <Wrapper charactersStore={store} uiStore={uiStore}>
          <DetailPage></DetailPage>
        </Wrapper>
      );

      const expectedResultDetail = screen.getByRole("heading", { level: 2 });

      const resultStatus = screen.getByText("Status");

      expect(resultStatus).toBeInTheDocument();
      expect(expectedResultDetail).toBeInTheDocument();
    });
  });
});
