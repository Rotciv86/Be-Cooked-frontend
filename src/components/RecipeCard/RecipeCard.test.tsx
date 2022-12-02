import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockRecipes } from "../../mocks/recipeMocks/mockRecipe";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RecipeCard from "./RecipeCard";

const mockDeleteRecipe = jest.fn();
jest.mock("../../hooks/useRecipe/useRecipe", () => {
  return () => ({
    deleteRecipe: mockDeleteRecipe,
  });
});

describe("Given the RecipeCard ui component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with a level 2 heading with text 'Arroz caldoso con bogavante'", () => {
      const recipeName = "Arroz caldoso con bogavante";

      renderWithProviders(
        <RecipeCard
          image={mockRecipes[0].image}
          name={mockRecipes[0].name}
          id={mockRecipes[0].id!}
        />
      );

      const recipeCard = screen.queryByRole("heading", {
        level: 2,
        name: recipeName,
      });

      expect(recipeCard).toHaveTextContent(recipeName);
    });

    test("Then it should call the action when clicked on the 'BORRAR' button", async () => {
      renderWithProviders(
        <RecipeCard
          image={mockRecipes[0].image}
          name={mockRecipes[0].name}
          id={mockRecipes[0].id!}
        />
      );

      const button = screen.queryByRole("button", {
        name: "BORRAR",
      });
      await userEvent.click(button!);

      expect(mockDeleteRecipe).toHaveBeenCalled();
    });
  });
});
