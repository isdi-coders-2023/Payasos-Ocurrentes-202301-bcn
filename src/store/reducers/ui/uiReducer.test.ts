import { UiActionType } from "../../actions/ui/types";
import uiReducer from "./uiReducer";

describe("Given the 'uiReducer'", () => {
  describe("When called with setIsLoading action", () => {
    test("Then it should return true", () => {
      const setIsLoadingAction = {
        type: UiActionType.setIsLoading,
      };

      const currentIsLoading = false;

      const expectedResult = true;

      const result = uiReducer(currentIsLoading, setIsLoadingAction);

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When called with unsetIsLoading action", () => {
    test("Then it should return false", () => {
      const unsetIsLoadingAction = {
        type: UiActionType.unsetIsLoading,
      };

      const currentIsLoading = true;

      const expectedResult = false;

      const result = uiReducer(currentIsLoading, unsetIsLoadingAction);

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When called default action", () => {
    test("Then it should return 'currentIsLoading'", () => {
      const defaultAction = {
        type: UiActionType.defaultAction,
      };

      const currentIsLoading = true;

      const result = uiReducer(currentIsLoading, defaultAction);

      expect(result).toStrictEqual(currentIsLoading);
    });
  });
});
