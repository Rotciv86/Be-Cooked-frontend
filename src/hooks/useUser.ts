import axios, { AxiosError } from "axios";
import {
  openErrorFeedbackActionCreator,
  openSuccessFeedbackActionCreator,
} from "../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../redux/hooks";
import { UserRegisterData } from "../types/types";
import { AxiosResponseBody } from "./types";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL!;
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserRegisterData) => {
    try {
      await axios.post(`${apiUrl}/users/sign-up`, userData);
      dispatch(
        openSuccessFeedbackActionCreator({
          feedback: {
            isOpen: true,
            messageFeedback: `User ${userData.username} registered successfully`,
            isError: false,
          },
          isLoading: false,
        })
      );
    } catch (error: unknown) {
      dispatch(
        openErrorFeedbackActionCreator({
          feedback: {
            isOpen: true,
            messageFeedback: `It was not possible to register: ${(
              error as AxiosError<AxiosResponseBody>
            ).response?.data.error!}`,
            isError: true,
          },
          isLoading: false,
        })
      );
    }
  };

  return { registerUser };
};

export default useUser;
