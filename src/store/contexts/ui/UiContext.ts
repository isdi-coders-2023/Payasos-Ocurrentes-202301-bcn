import { createContext } from "react";
import { UiAction } from "../../actions/ui/types";

interface UiContextStructure {
  isLoading: boolean;
  dispatch: React.Dispatch<UiAction>;
}

const UiContext = createContext<UiContextStructure>({} as UiContextStructure);

export default UiContext;
