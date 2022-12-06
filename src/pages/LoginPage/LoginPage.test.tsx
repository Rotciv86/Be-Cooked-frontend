import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 2 with text '¡ÚNETE A BE COOKED, LA MEJOR PLATAFORMA DE RECETAS!'", () => {
      const headingText = "¡ÚNETE A BE COOKED, LA MEJOR PLATAFORMA DE RECETAS!";

      renderWithProviders(<LoginPage />);

      const heading = screen.queryByRole("heading", { level: 2 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});
