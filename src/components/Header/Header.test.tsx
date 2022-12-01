import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Be Cooked'", () => {
      const expectedTitleText = "Be Cooked";
      renderWithProviders(<Header />);

      const title = screen.queryByLabelText(expectedTitleText) as HTMLElement;

      expect(title).toBeInTheDocument();
    });

    test("Then it should show two anchor links with the texts 'Recetas' and 'Regístrate'", () => {
      const recipes = "Recetas";
      const register = "Regístrate";

      renderWithProviders(<Header />);

      const recipesLink = screen.queryByRole("link", { name: recipes });
      const registerLink = screen.queryByRole("link", { name: register });

      expect(recipesLink).toBeInTheDocument();
      expect(registerLink).toBeInTheDocument();
    });
  });
});
