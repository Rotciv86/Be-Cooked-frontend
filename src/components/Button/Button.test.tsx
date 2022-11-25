import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Button from "./Button";

describe("Given the component Button", () => {
  describe("When it is rendered with the text 'Register'", () => {
    test("Then it should show the text 'Register' in it", () => {
      const expectedText = "Register";

      renderWithProviders(<Button action={() => {}} text="Register" />);

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives an ction", () => {
    test("Then it should call an action on click", async () => {
      const expectedButtonAction = jest.fn();

      renderWithProviders(
        <Button action={expectedButtonAction} text="Register" />
      );

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(expectedButtonAction).toHaveBeenCalled();
    });
  });
});
