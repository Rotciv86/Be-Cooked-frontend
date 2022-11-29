import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { recipesReducer } from "./features/recipeSlice/recipeSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: { ui: uiReducer, user: userReducer, recipes: recipesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
