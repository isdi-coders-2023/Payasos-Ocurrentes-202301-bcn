import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When the Button is render with the text 'clickButton'", () => {
    const insideText = "click here";
    const children = <span>{insideText}</span>;
    const action = jest.fn();
    test("Then it should render button with the text 'clickButton", () => {
      const className = "buttonPropertie";

      render(
        <Button className={className} action={action} children={children} />
      );

      const button = screen.getByRole("button", { name: insideText });

      expect(button).toBeInTheDocument();
    });
    test("should render a button with the class of primary", () => {
      const className = "primary";

      render(
        <Button className={className} action={action} children={children} />
      );
      const primaryButton = screen.getByRole("button", { name: insideText });
      expect(primaryButton).toHaveClass("primary");
    });
  });
});
