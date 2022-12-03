import {
  mockRecipe,
  mockRecipes,
  mockRecipesAdded,
} from "../../../mocks/recipeMocks/mockRecipe";
import recipeInitialStateMock from "../../../mocks/recipeMocks/recipeInitialState";
import {
  createRecipeActionCreator,
  deleteRecipeActionCreator,
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

  describe("When it's invoked with its method delteRecipe and a valid id in its payload", () => {
    test("Then it should return a new state without the received recipe", () => {
      const currentRecipesState: RecipeState = {
        recipes: mockRecipes,
      };
      const recipeToDelete = mockRecipes[1];
      const deleteRecipeAction = deleteRecipeActionCreator(
        recipeToDelete.id as string
      );
      const expectedRecipesState: RecipeState = { recipes: [mockRecipes[0]] };

      const newRecipesState = recipesReducer(
        currentRecipesState,
        deleteRecipeAction
      );

      expect(newRecipesState).toStrictEqual(expectedRecipesState);
    });
  });

  describe("When it's invoked with its reducer createRecipe reducer and a new recipe in its payload", () => {
    test("Then it should return a new state with the received recipe added in it", () => {
      const currentRecipesState: RecipeState = {
        recipes: mockRecipes,
      };
      const recipeToCreate = mockRecipe;

      const expectedRecipesState: RecipeState = { recipes: mockRecipesAdded };

      const recipesSliceState = recipesReducer(
        currentRecipesState,
        createRecipeActionCreator(recipeToCreate)
      );

      expect(recipesSliceState).toStrictEqual(expectedRecipesState);
    });
  });
});
