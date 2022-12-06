import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginData, UserState } from "../../../types/types";

const userInitialState: UserState = {
  username: "",
  id: "",
  accessToken: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<UserLoginData>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
