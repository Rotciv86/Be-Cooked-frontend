import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const registerUser = async (userData: UserData) => {
    dispatch(openLoadingActionCreator());
    try {
      await axios.post(`${apiUrl}/users/sign-up`, userData);

      const feedbackSuccessPayload: OpenFeedbackActionPayload = {
        messageFeedback: `Bienvenido ${userData.username}, ha sido registrado correctamente`,
        isError: false,
      };
      dispatch(closeLoadingActionCreator());
      dispatch(openFeedbackActionCreator(feedbackSuccessPayload));
      navigate("/login");
    } catch (error: unknown) {
      const feedbackErrorPayload: OpenFeedbackActionPayload = {
        messageFeedback: `No ha sido posible el registro: ${(
          error as AxiosError<AxiosResponseBody>
        ).response?.data.error!}`,
        isError: true,
      };
      dispatch(closeLoadingActionCreator());

      dispatch(openFeedbackActionCreator(feedbackErrorPayload));
    }
  };

  const loginUser = async (userLoginData: UserData) => {
    dispatch(openLoadingActionCreator());
    try {
      const response = await axios.post(`${apiUrl}/users/login`, userLoginData);

      const { accessToken } = await response.data;
      const loggedUser: JwtPayload = decodeToken(accessToken);

      dispatch(closeLoadingActionCreator());
      dispatch(
        loginUserActionCreator({ ...loggedUser, accessToken: accessToken })
      );
      localStorage.setItem("token", accessToken);
      dispatch(
        openFeedbackActionCreator({
          isError: false,
          messageFeedback: `Bienvenido de nuevo ${userLoginData.username}!`,
        })
      );
      navigate("/");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
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
