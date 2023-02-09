import { act, renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  mockDispatch,
  mockLoadCharactersAction,
  mockSetIsLoading,
  mockStore,
  mockUiDispatch,
  mockUiStore,
} from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import useApi from "./useApi";

beforeAll(() => jest.clearAllMocks());

const dispatcher = mockDispatch;
const store = mockStore;
const loadCharactersAction = mockLoadCharactersAction;

const uiStore = mockUiStore;
const uiDispatch = mockUiDispatch;
const setIsLoadingAction = mockSetIsLoading;

describe("Given the useApi custom hook", () => {
  describe("When the getCharactersApi function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getCharactersApi },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <Wrapper uiStore={uiStore} charactersStore={store}>
              {children}
            </Wrapper>
          );
        },
      });

      await act(async () => getCharactersApi());

      expect(dispatcher).toHaveBeenCalledWith(loadCharactersAction);
    });

    test("Then it should call the uiDispatch twice", async () => {
      const {
        result: {
          current: { getCharactersApi },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <Wrapper uiStore={uiStore} charactersStore={store}>
              {children}
            </Wrapper>
          );
        },
      });

      await act(async () => getCharactersApi());

      expect(uiDispatch).toHaveBeenCalledTimes(2);
      expect(uiDispatch).toHaveBeenCalledWith(setIsLoadingAction);
    });

    describe("When the getCharactersApi function is called and the response from the fetch is failed", () => {
      beforeEach(() => {
        server.resetHandlers(...errorHandlers);
      });
      test("Then it should not call the dispatch", async () => {
        const {
          result: {
            current: { getCharactersApi },
          },
        } = renderHook(() => useApi(), {
          wrapper({ children }) {
            return (
              <Wrapper uiStore={uiStore} charactersStore={store}>
                {children}
              </Wrapper>
            );
          },
        });

        await act(async () => getCharactersApi());

        expect(dispatcher).not.toBeCalled();
      });
    });
  });
});
