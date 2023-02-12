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
import { CharactersActionType } from "../../store/actions/characters/types";
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

  describe("When the getSingleCharacter function is called", () => {
    test("Then it should call the dispatch and the uiDispatch twice", async () => {
      const loadCharacterAction = {
        type: CharactersActionType.loadCharacter,
        payload: {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1",
          },
          location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/37",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/50",
            "https://rickandmortyapi.com/api/episode/51",
          ],
          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z",
        },
      };

      const {
        result: {
          current: { getSingleCharacter },
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

      await act(async () => getSingleCharacter(1));

      expect(dispatcher).toBeCalled();
      expect(dispatcher).toHaveBeenCalledWith(loadCharacterAction);
      expect(uiDispatch).toHaveBeenCalledTimes(2);
    });
  });

  describe("When the getSingleCharacter function is called and the response from the fetch is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getSingleCharacter },
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

      await act(async () => getSingleCharacter(1));

      expect(dispatcher).not.toBeCalled();
    });
  });
});
