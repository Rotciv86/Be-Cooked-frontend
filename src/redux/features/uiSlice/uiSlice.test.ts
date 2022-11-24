import { emptyFeedbackMock } from "../../../mocks/uiMocks";
import { OpenFeedbackActionPayload, UiState } from "../../../types/types";
import {
  closeFeedbackActionCreator,
  openFeedbackActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given uiReducer", () => {
  const currentUiState = emptyFeedbackMock;

  describe("When it recieves an initial state with an empty feedback and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty feedback", () => {
      const unknownAction = {
        type: "unknownAction",
        payload: emptyFeedbackMock,
      };

      const newUiState = uiReducer(currentUiState, unknownAction);

      expect(newUiState).toStrictEqual(currentUiState);
    });
  });

  describe("When it recieves an initial state and 'openFeedback' action with a messageFeedback with 'Register was successful' and is error false", () => {
    test("Then it should return a new state with the isOpen property with value 'true' and the text and isError information received", () => {
      const expectedState: UiState = {
        feedback: {
          isOpen: true,
          messageFeedback: "Register was successful",
          isError: false,
        },
        isLoading: false,
      };

      const openFeedbackPayload: OpenFeedbackActionPayload = {
        isError: expectedState.feedback.isError,
        messageFeedback: expectedState.feedback.messageFeedback,
      };

      const newUiState: UiState = uiReducer(
        currentUiState,
        openFeedbackActionCreator(openFeedbackPayload)
      );

      expect(newUiState).toStrictEqual(expectedState);
    });
  });

  describe("When it recieves an initial state and 'openFeedback' action with a messageFeedback with 'There was an error on registration' and is error with value 'true'", () => {
    test("Then it should return a new state with the isOpen property with value 'true' and the text and isError information received", () => {
      const expectedState: UiState = {
        feedback: {
          isOpen: true,
          messageFeedback: "There was an error on registration",
          isError: true,
        },
        isLoading: false,
      };

      const openFeedbackPayload: OpenFeedbackActionPayload = {
        isError: expectedState.feedback.isError,
        messageFeedback: expectedState.feedback.messageFeedback,
      };

      const newUiState: UiState = uiReducer(
        currentUiState,
        openFeedbackActionCreator(openFeedbackPayload)
      );

      expect(newUiState).toStrictEqual(expectedState);
    });
  });

  describe("When it recieves an initial state and 'closeFeedback' action", () => {
    test("Then it should return a new state been a copy of initial state", () => {
      const expectedState: UiState = {
        feedback: {
          isOpen: false,
          messageFeedback: "",
          isError: false,
        },
        isLoading: false,
      };

      const newUiState: UiState = uiReducer(
        currentUiState,
        closeFeedbackActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedState);
    });
  });
});
