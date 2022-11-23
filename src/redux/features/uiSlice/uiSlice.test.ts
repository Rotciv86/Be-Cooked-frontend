import { emptyFeedbackMock, mockInitialUiState } from "../../../mocks/uiMocks";
import { UiState } from "../../../types/types";
import {
  openErrorFeedbackActionCreator,
  openSuccessFeedbackActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given uiReducer", () => {
  describe("When it recieves an initial state with an empty feedback and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty feedback", () => {
      const unknownAction = {
        type: "unknownAction",
        payload: emptyFeedbackMock,
      };

      const currentUiState = emptyFeedbackMock;

      const newUiState = uiReducer(currentUiState, unknownAction);

      expect(newUiState).toStrictEqual(currentUiState);
    });
  });

  describe("When it recieves an initial state and 'openSuccessFeedback' action with a messageFeedback with 'Register was successful'", () => {
    test("Then it should return a new state with the feedback received", () => {
      const currentUiState: UiState = emptyFeedbackMock;
      const newFeedback: UiState = {
        feedback: {
          isOpen: true,
          messageFeedback: "Register was successful",
          isError: false,
        },
        isLoading: false,
      };
      const newUiState: UiState = uiReducer(
        currentUiState,
        openSuccessFeedbackActionCreator(newFeedback)
      );

      expect(newUiState).toStrictEqual(newFeedback);
    });
  });

  describe("When it recieves an initial state and 'openErrorFeedback' action with a messageFeedback with 'It succeded an error on registration'", () => {
    test("Then it should return a new state with the feedback received", () => {
      const currentUiState = emptyFeedbackMock;
      const newFeedback = {
        feedback: {
          isOpen: true,
          messageFeedback: "There was an error on registration",
          isError: true,
        },
        isLoading: false,
      };

      const newUiState = uiReducer(
        currentUiState,
        openErrorFeedbackActionCreator(newFeedback)
      );

      expect(newUiState).toStrictEqual(newFeedback);
    });
  });

  describe("When it recieves an initial state and 'closeFeedback' action", () => {
    test("Then it should return a new state with the feedback received", () => {
      const currentUiState = mockInitialUiState;
      const newFeedback = {
        feedback: {
          isOpen: false,
          messageFeedback: "",
          isError: false,
        },
        isLoading: false,
      };

      const newUiState = uiReducer(
        currentUiState,
        openErrorFeedbackActionCreator(newFeedback)
      );

      expect(newUiState).toStrictEqual(newFeedback);
    });
  });
});
