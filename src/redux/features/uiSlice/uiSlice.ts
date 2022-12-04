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
    ): UiState => ({
      ...previousUi,
      feedback: {
        ...action.payload,
        isOpen: true,
      },
    }),
    closeFeedback: (previousUi): UiState => ({
      ...previousUi,
      feedback: uiInitialState.feedback,
    }),

    openLoading: (previousUi): UiState => ({
      ...previousUi,
      isLoading: true,
    }),

    closeLoading: (previousUi): UiState => ({
      ...previousUi,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openFeedback: openFeedbackActionCreator,
  closeFeedback: closeFeedbackActionCreator,
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = uiSlice.actions;
