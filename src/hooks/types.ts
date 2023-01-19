import { JwtPayload } from "jwt-decode";

export interface AxiosResponseBody {
  error: string;
}

export interface JwtCustomPayload extends JwtPayload {
  id: string;
  username: string;
}
