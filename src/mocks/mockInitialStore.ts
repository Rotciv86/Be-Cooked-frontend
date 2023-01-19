import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "../redux/features/recipeSlice/recipeSlice";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { store } from "../redux/store";
import recipeInitialStateMock from "./recipeMocks/recipeInitialState";
import { mockInitialUiState } from "./uiMocks";
import userInitialStateMock from "./userMocks/userInitialStateMock";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    recipes: recipesReducer,
  },
  preloadedState: {
    ui: mockInitialUiState,
    user: userInitialStateMock,
    recipes: recipeInitialStateMock,
  },
});

export default mockInitialStore;
