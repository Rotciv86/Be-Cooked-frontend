import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../mocks/providerWrapper";
import {
  openErrorFeedbackActionCreator,
  openSuccessFeedbackActionCreator,
} from "../redux/features/uiSlice/uiSlice";
import { store } from "../redux/store";
import { UiState, UserRegisterData } from "../types/types";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useUser custom hook", () => {
  const {
    result: {
      current: { registerUser },
    },
  } = renderHook(() => useUser(), {
    wrapper: ProviderWrapper,
  });

  describe("When its method registerUser is invoked with username 'jesus', password '1234'", () => {
    test("Then it should invoke dispatch with openSuccessFeedbackActionCreator", async () => {
      const newUser: UserRegisterData = {
        username: "jesus",
        password: "1234",
      };
      const feedbackPayload: UiState = {
        feedback: {
          isOpen: true,
          messageFeedback: `User ${newUser.username} registered successfully`,
          isError: false,
        },
        isLoading: false,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openSuccessFeedbackActionCreator(feedbackPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'Bertin Ousbourne'", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'It was not possible to register: This username is already registered'", async () => {
      const newUser: UserRegisterData = {
        username: "Bertin Ousbourne",
        password: "",
      };
      const feedbackPayload: UiState = {
        feedback: {
          isOpen: true,
          messageFeedback:
            "It was not possible to register: This username is already registered",
          isError: true,
        },
        isLoading: false,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openErrorFeedbackActionCreator(feedbackPayload)
      );
    });
  });
});
