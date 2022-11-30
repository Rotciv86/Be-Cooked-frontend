import { mockRecipes } from "../../../mocks/recipeMocks/mockRecipe";
import recipeInitialStateMock from "../../../mocks/recipeMocks/recipeInitialState";
import {
  loadAllRecipesActionCreator,
  RecipeInitialState,
  recipesReducer,
  RecipeState,
} from "./recipeSlice";

describe("Given the function recipeSlice", () => {
  describe("When it receives an initial state and an unknown action", () => {
    test("Then it should return a copy of the initial state", () => {
      const unknownAction = {
        type: "recipe/unknownAction",
      };

      const newRecipeState = recipesReducer(
        recipeInitialStateMock,
        unknownAction
      );

      expect(newRecipeState).toStrictEqual(recipeInitialStateMock);
    });
  });

  describe("When it is invoked with loadAllRecipes", () => {
    test("Then it should receive a list with two recipes", () => {
      const action = loadAllRecipesActionCreator(mockRecipes);
      const expectedState: RecipeState = {
        recipes: mockRecipes,
      };

      const newState = recipesReducer(RecipeInitialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
