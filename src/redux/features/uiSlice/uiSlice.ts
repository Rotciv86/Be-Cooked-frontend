import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../types/types";

const uiInitialState: UiState = {
  feedback: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openFeedback: (previousUi, action: PayloadAction<string>) => ({
      ...previousUi,
      feedback: action.payload,
    }),
    closeFeedback: (previousUi) => ({ ...previousUi, feedback: "" }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { openFeedback: openFeedbackActionCreator } = uiSlice.actions;
