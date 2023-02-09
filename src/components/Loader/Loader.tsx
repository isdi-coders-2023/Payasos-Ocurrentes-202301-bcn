import { DotSpinner } from "@uiball/loaders";
import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      {
        <DotSpinner
          size={40}
          speed={0.9}
          color="black"
          aria-label="The content is loading"
        />
      }
    </LoaderStyled>
  );
};

export default Loader;
