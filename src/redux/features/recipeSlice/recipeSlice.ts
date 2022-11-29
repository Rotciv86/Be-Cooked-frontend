import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../../types/types";

interface RecipeState {
  recipes: Recipe[];
}

export const RecipeInitialState: RecipeState = {
  recipes: [],
};

const recipesSlice = createSlice({
  name: "recipe",
  initialState: RecipeInitialState,
  reducers: {
    loadAllRecipes: (initialState, action: PayloadAction<Recipe[]>) => ({
      ...initialState,
      contacts: [...action.payload],
    }),
    loadRecipe: (initialState, action: PayloadAction<Recipe[]>) => ({
      ...initialState,
      contacts: [...action.payload],
    }),
  },
});

export const recipesReducer = recipesSlice.reducer;

export const {
  loadAllRecipes: loadAllRecipesActionCreator,
  loadRecipe: loadRecipeActionCreator,
} = recipesSlice.actions;
