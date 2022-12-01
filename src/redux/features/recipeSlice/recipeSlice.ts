import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../../types/types";

export interface RecipeState {
  recipes: Recipe[];
}

export const RecipeInitialState: RecipeState = {
  recipes: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: RecipeInitialState,
  reducers: {
    loadAllRecipes: (initialState, action: PayloadAction<Recipe[]>) => ({
      ...initialState,
      recipes: [...action.payload],
    }),
  },
});

export const recipesReducer = recipesSlice.reducer;

export const { loadAllRecipes: loadAllRecipesActionCreator } =
  recipesSlice.actions;