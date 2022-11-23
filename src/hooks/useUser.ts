import { UserRegisterData } from "../types/types";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserRegisterData) => {
    await fetch(`${apiUrl}/users/sign-up`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  };

  return { registerUser };
};

export default useUser;
