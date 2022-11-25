import { render, screen } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with inputs fields 'username' and 'password'", () => {
      render(
        <ProviderWrapper>
          <RegisterForm />
        </ProviderWrapper>
      );

      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      });
      const passwordInput = screen.queryByLabelText("Crea una contraseña");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });
});
