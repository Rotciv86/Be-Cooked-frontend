import { screen } from "@testing-library/react";
import mockRecipes from "../../mocks/recipeMocks/mockRecipe";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RecipeCard from "./RecipeCard";

describe("Given the RecipeCard ui component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with a level 2 heading with text 'Arroz caldoso con bogavante'", () => {
      const recipeName = "Arroz caldoso con bogavante";

      renderWithProviders(
        <RecipeCard image={mockRecipes[0].image} name={mockRecipes[0].name} />
      );

      const recipeCard = screen.queryByRole("heading", {
        level: 2,
        name: recipeName,
      });

      expect(recipeCard).toHaveTextContent(recipeName);
    });
  });
});
