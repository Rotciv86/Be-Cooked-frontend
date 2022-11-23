import axios from "axios";
import { UserRegisterData } from "../types/types";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserRegisterData) => {
    try {
      await axios.post(`${apiUrl}/users/sign-up`, userData);
    } catch (error: unknown) {
      throw new Error(
        `It was not possible to register: ${(error as Error).message}`
      );
    }
  };

  return { registerUser };
};

export default useUser;
