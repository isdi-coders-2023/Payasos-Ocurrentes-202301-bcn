import { act, renderHook } from "@testing-library/react";
import {
  mockDispatch,
  mockLoadCharactersAction,
  mockStore,
} from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import useApi from "./useApi";

beforeAll(() => jest.clearAllMocks());

const dispatcher = mockDispatch;
const store = mockStore;
const loadCharactersAction = mockLoadCharactersAction;

describe("Given the useApi custom hook", () => {
  describe("When the getCharactersApi function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getCharactersApi },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper store={store}>{children}</Wrapper>;
        },
      });

      await act(async () => getCharactersApi());

      expect(dispatcher).toHaveBeenCalledWith(loadCharactersAction);
    });
  });
});
