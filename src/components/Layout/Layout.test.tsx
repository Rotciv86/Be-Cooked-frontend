import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered and receives the route '/'", () => {
    test("Then it should show a RegisterForm component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/"] });

      const usernameInput = screen.queryByLabelText("Crea una contraseña");

      expect(usernameInput).toBeInTheDocument();
    });
  });
});
