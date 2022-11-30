import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import { screen } from "@testing-library/react";
import RecipeList from "./RecipeList";
import { mockInitialUiState } from "../../mocks/uiMocks";
import userInitialStateMock from "../../mocks/userMocks/userInitialStateMock";
import { mockUseRecipes } from "../../mocks/recipeMocks/mockRecipe";

describe("Given a RecipeList component", () => {
  describe("When is rendered with a list of 2 recipes", () => {
    test("Then it should show a list with 2 recipes", () => {
      renderWithProviders(<RecipeList />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userInitialStateMock,
          recipes: mockUseRecipes,
        },
      });

      const recipesCards = screen.queryByRole("list");

      expect(recipesCards).toBeInTheDocument();
    });

    test("Then it should show 2 headings leves 2 with the received recipe names", () => {
      const firstRecipeName = mockUseRecipes.recipes[0].name;
      const secondRecipeName = mockUseRecipes.recipes[1].name;

      renderWithProviders(<RecipeList />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userInitialStateMock,
          recipes: mockUseRecipes,
        },
      });

      const firstHeading = screen.queryByRole("heading", {
        level: 2,
        name: firstRecipeName,
      });
      const secondHeading = screen.queryByRole("heading", {
        level: 2,
        name: secondRecipeName,
      });

      expect(firstHeading).toBeInTheDocument();
      expect(secondHeading).toBeInTheDocument();
    });
  });
});
