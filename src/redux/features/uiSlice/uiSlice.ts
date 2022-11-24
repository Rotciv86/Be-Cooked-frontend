import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenFeedbackActionPayload, UiState } from "../../../types/types";

const uiInitialState: UiState = {
  feedback: { isOpen: false, messageFeedback: "", isError: false },
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openFeedback: (
      previousUi,
      action: PayloadAction<OpenFeedbackActionPayload>
    ) => ({
      ...previousUi,
      feedback: {
        ...action.payload,
        isOpen: true,
      },
    }),
    closeFeedback: (previousUi) => ({
      ...previousUi,
      feedback: uiInitialState.feedback,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openFeedback: openFeedbackActionCreator,
  closeFeedback: closeFeedbackActionCreator,
} = uiSlice.actions;
