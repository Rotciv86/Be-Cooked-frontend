import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RecipeDetail from "./RecipeDetail";
import { mockRecipes } from "../../mocks/recipeMocks/mockRecipe";

describe("Given the RecipeDetail user interface component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with text 'Paella'", () => {
      const recipeTitle = "Paella";

      renderWithProviders(<RecipeDetail recipe={mockRecipes[1]} />);

      const recipeDetailCard = screen.queryByRole("heading", {
        level: 2,
        name: recipeTitle,
      });

      expect(recipeDetailCard).toHaveTextContent(recipeTitle);
    });
  });
});
