import axios, { AxiosError } from "axios";
import {
  closeLoadingActionCreator,
  openFeedbackActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  JwtPayload,
  OpenFeedbackActionPayload,
  UserData,
} from "../../types/types";
import decodeToken from "../../utils/decodeToken";
import { AxiosResponseBody } from "../types";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL!;
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserData) => {
    dispatch(openLoadingActionCreator());
    try {
      await axios.post(`${apiUrl}/users/sign-up`, userData);

      const feedbackSuccessPayload: OpenFeedbackActionPayload = {
        messageFeedback: `User ${userData.username} registered successfully`,
        isError: false,
      };
      dispatch(closeLoadingActionCreator());
      dispatch(openFeedbackActionCreator(feedbackSuccessPayload));
    } catch (error: unknown) {
      const feedbackErrorPayload: OpenFeedbackActionPayload = {
        messageFeedback: `It was not possible to register: ${(
          error as AxiosError<AxiosResponseBody>
        ).response?.data.error!}`,
        isError: true,
      };
      dispatch(closeLoadingActionCreator());

      dispatch(openFeedbackActionCreator(feedbackErrorPayload));
    }
  };

  const loginUser = async (userLoginData: UserData) => {
    try {
      const response = await axios.post(`${apiUrl}/users/login`, userLoginData);

      const { token } = await response.data;
      const loggedUser: JwtPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
      dispatch(
        openFeedbackActionCreator({
          isError: false,
          messageFeedback: `Bienvenido de nuevo ${userLoginData.username}!`,
        })
      );
    } catch (error: unknown) {
      dispatch(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: "Credenciales erroneas",
        })
      );
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
