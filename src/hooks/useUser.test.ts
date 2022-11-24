import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../mocks/providerWrapper";
import { openFeedbackActionCreator } from "../redux/features/uiSlice/uiSlice";
import { store } from "../redux/store";
import { OpenFeedbackActionPayload, UserRegisterData } from "../types/types";
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
    test("Then it should invoke dispatch with openFeedbackActionCreator", async () => {
      const newUser: UserRegisterData = {
        username: "jesus",
        password: "1234",
      };
      const feedbackSuccessPayload: OpenFeedbackActionPayload = {
        messageFeedback: `User ${newUser.username} registered successfully`,
        isError: false,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackSuccessPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'Bertin Ousbourne'", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'It was not possible to register: This username is already registered'", async () => {
      const newUser: UserRegisterData = {
        username: "Bertin Ousbourne",
        password: "",
      };
      const feedbackErrorPayload: OpenFeedbackActionPayload = {
        messageFeedback:
          "It was not possible to register: This username is already registered",
        isError: true,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackErrorPayload)
      );
    });
  });
});
