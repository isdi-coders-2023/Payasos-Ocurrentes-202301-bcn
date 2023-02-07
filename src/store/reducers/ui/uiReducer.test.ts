import { UiActionType } from "../../actions/ui/types";
import isLoadingReducer from "./uiReducer";

describe("Given the 'uiReducer'", () => {
  describe("When called with setIsLoading action", () => {
    test("Then it should return true", () => {
      const setIsLoadingAction = {
        type: UiActionType.setIsLoading,
      };

      const currentIsLoading = false;

      const expectedResult = true;

      const result = isLoadingReducer(currentIsLoading, setIsLoadingAction);

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

      const result = isLoadingReducer(currentIsLoading, unsetIsLoadingAction);

      expect(result).toStrictEqual(expectedResult);
    });
  });
  describe("When called default action", () => {
    test("Then it should return 'currentIsLoading'", () => {
      const defaultAction = {
        type: UiActionType.defaultAction,
      };

      const currentIsLoading = true;

      const result = isLoadingReducer(currentIsLoading, defaultAction);

      expect(result).toStrictEqual(currentIsLoading);
    });
  });
});
