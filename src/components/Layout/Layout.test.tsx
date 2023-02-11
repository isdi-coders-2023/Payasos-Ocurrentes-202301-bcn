import { render, screen } from "@testing-library/react";
import { mockStore, mockUiStoreTrue } from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import Layout from "./Layout";

const store = mockStore;

const uiStore = mockUiStoreTrue;

describe("Given a Layout component", () => {
  render(
    <Wrapper charactersStore={store} uiStore={uiStore}>
      <Layout />
    </Wrapper>
  );
  describe("When rendered", () => {
    test("Then it should show a header with the text `rick and morty - wiki`", () => {
      const expectedHeader = "rick and morty - wiki";

      const header = screen.getByText(expectedHeader);

      expect(header).toBeInTheDocument();
    });
  });

  describe("When rendered and the aplication is loading data", () => {
    test("Then it should render a loader", () => {});

    const text = screen.getByRole("dialog", {
      name: "The page is loading",
    });

    expect(text).toBeInTheDocument();
  });
});
