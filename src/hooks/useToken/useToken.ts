import { useCallback } from "react";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodeToken";
import { JwtCustomPayload } from "../types";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      const user: JwtCustomPayload = decodeToken(accessToken);

      dispatch(loginUserActionCreator({ ...user, accessToken }));
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;
