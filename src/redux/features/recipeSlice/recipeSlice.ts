import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../../types/types";

export interface RecipeState {
  recipes: Recipe[];
  recipe?: Recipe;
}

export const RecipeInitialState: RecipeState = {
  recipes: [],
  recipe: {} as Recipe,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: RecipeInitialState,
  reducers: {
    loadAllRecipes: (initialState, action: PayloadAction<Recipe[]>) => ({
      ...initialState,
      recipes: [...action.payload],
    }),
    deleteRecipe: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      recipes: [
        ...initialState.recipes.filter(
          (recipe) => recipe.id !== action.payload
        ),
      ],
    }),
    createRecipe: (initialState, action: PayloadAction<Recipe>) => ({
      ...initialState,
      recipes: [...initialState.recipes, action.payload],
    }),

    getRecipeById: (initialState, action: PayloadAction<Recipe>) => ({
      ...initialState,
      recipe: { ...action.payload },
    }),
  },
});

export const recipesReducer = recipesSlice.reducer;

export const {
  loadAllRecipes: loadAllRecipesActionCreator,
  deleteRecipe: deleteRecipeActionCreator,
  createRecipe: createRecipeActionCreator,
  getRecipeById: getRecipeByIdActionCreator,
} = recipesSlice.actions;
