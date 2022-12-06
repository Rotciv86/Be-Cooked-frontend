import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({ loginUser: mockRegisterAction });
});

describe("Given the RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with inputs fields 'username' and 'password'", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      });
      const passwordInput = screen.queryByLabelText("Introduce tu contraseña");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("when it's filled in and its button 'Register' is clicked", () => {
    test("Then the form should be submited", async () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      })!;
      await userEvent.type(usernameInput, "Joel");

      const passwordInput = screen.queryByLabelText("Introduce tu contraseña")!;
      await userEvent.type(passwordInput, "bulli");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
