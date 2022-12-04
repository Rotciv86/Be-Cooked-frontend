import axios, { AxiosError } from "axios";
import {
  closeLoadingActionCreator,
  openFeedbackActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { OpenFeedbackActionPayload, UserRegisterData } from "../../types/types";
import { AxiosResponseBody } from "../types";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL!;
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserRegisterData) => {
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

  return { registerUser };
};

export default useUser;
