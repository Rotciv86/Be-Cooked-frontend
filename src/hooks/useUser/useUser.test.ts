import { act, renderHook, waitFor } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import mockLoginUser from "../../mocks/userMocks/mockLoginUser";
import { openFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import {
  JwtPayload,
  OpenFeedbackActionPayload,
  UserData,
} from "../../types/types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "PacoId", username: "Paco" } as JwtPayload);
});

describe("Given a useUser custom hook", () => {
  const {
    result: {
      current: { registerUser, loginUser },
    },
  } = renderHook(() => useUser(), {
    wrapper: ProviderWrapper,
  });

  describe("When its method registerUser is invoked with username 'jesus', password '1234'", () => {
    test("Then it should invoke dispatch with openFeedbackActionCreator", async () => {
      const newUser: UserData = {
        username: "jesus",
        password: "1234",
      };
      const feedbackSuccessPayload: OpenFeedbackActionPayload = {
        messageFeedback: `Bienvenido ${newUser.username}, ha sido registrado correctamente`,
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
      const newUser: UserData = {
        username: "Bertin Ousbourne",
        password: "",
      };
      const feedbackErrorPayload: OpenFeedbackActionPayload = {
        messageFeedback:
          "No ha sido posible el registro: Este usuario ya ha sido registrado",
        isError: true,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(feedbackErrorPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with a correct username 'Paco' and password '1234'", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'Welcome back Paco!'", async () => {
      const user = mockLoginUser;
      const loginActionPayload = {
        username: "Paco",
        id: "PacoId",
        accessToken: "PacoToken",
      };
      const feedbackPayload: OpenFeedbackActionPayload = {
        isError: false,
        messageFeedback: `Bienvenido ${user.username}!`,
      };

      await act(async () => await loginUser(user));
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openFeedbackActionCreator(feedbackPayload)
        )
      );
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          loginUserActionCreator(loginActionPayload)
        )
      );
    });
  });

  describe("When its method loginUser is invoked with correct username 'Gerard' and incorrect password '3333'", () => {
    test("Then it should invoke dispatch with openModalActionCreator and text 'Sorry, wrong credentials'", async () => {
      const user = { ...mockLoginUser, password: "3333" };
      const feedbackPayload: OpenFeedbackActionPayload = {
        isError: true,
        messageFeedback: "Credenciales erroneas",
      };

      await act(async () => await loginUser(user));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openFeedbackActionCreator(feedbackPayload)
        )
      );
    });
  });
});
