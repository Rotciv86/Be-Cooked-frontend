import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered and receives the route '/'", () => {
    test("Then it should show a RegisterForm component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/"] });
      const usernameInput = screen.queryByRole("textbox", {
        name: "Escribe tu nombre de usuario",
      });
      const passwordInput = screen.queryByLabelText("Crea una contraseña");

      expect(passwordInput).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
    });
  });

  describe("When its rendered and receives the route '*'", () => {
    test("Then it should show a NotFoundPage component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/*"] });
      const expectedText = "VOLVER AL INICIO";
      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });
});
