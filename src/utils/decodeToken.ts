import jwtDecode from "jwt-decode";
import { JwtPayload } from "../types/types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayload = jwtDecode(token);

  return {
    id: jwtPayload.id,
    username: jwtPayload.username,
  };
};

export default decodeToken;
