import ErrorPageStyled from "./ErrorPageStyled";

const ErrorPage = (): JSX.Element => {
  return (
    <ErrorPageStyled>
      <span className="error-404">404</span>
      <span className="error-text">
        Sorry, we were unable to find that page
      </span>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
