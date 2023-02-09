import { render, screen } from "@testing-library/react";
import UiContextProvider from "../../store/contexts/ui/UiContextProvider";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When the Button is render with the text 'clickButton'", () => {
    test("Then it should render button with the text 'clickButton", () => {
      const className = "buttonPropertie";
      const action = jest.fn();
      const children = <></>;
      const text = "clickButton";

      render(
        <UiContextProvider>
          <Button
            className={className}
            action={action}
            children={children}
            text={text}
          />
        </UiContextProvider>
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
    test("should render a button with the class of primary", () => {
      const className = "primary";
      const action = jest.fn();
      const children = <></>;
      const text = "primary";
      render(
        <Button
          className={className}
          action={action}
          children={children}
          text={text}
        />
      );
      const primaryButton = screen.getByRole("button", { name: text });
      expect(primaryButton).toHaveClass("primary");
    });
  });
});
