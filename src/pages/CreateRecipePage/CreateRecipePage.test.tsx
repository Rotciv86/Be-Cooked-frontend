import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import CreateRecipePage from "./CreateRecipePage";

describe("Given the CreateRecipePage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'Crea tu propia receta...'", () => {
      const headingText = "Crea tu propia receta...";

      renderWithProviders(<CreateRecipePage />);

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: "Crea tu propia receta...",
      });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(headingText);
    });
  });
});
