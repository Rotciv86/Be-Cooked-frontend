import { getRandomInitialUserState } from "../../../factories/userFactory";
import mockLoggedUser from "../../../mocks/userMocks/mockLoggedUser";
import userInitialStateMock from "../../../mocks/userMocks/userInitialStateMock";
import { UserLoginData, UserState } from "../../../types/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given the function userSlice", () => {
  describe("When it is called and recieves an initial state with an empty feedback and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty user login state", () => {
      const unknownAction = {
        type: "user/unknownAction",
        payload: userInitialStateMock,
      };

      const newUserState = userReducer(userInitialStateMock, unknownAction);

      expect(newUserState).toStrictEqual(userInitialStateMock);
    });
  });

  describe("When it receives an empty initial state and a loginUser action with a new user as payload", () => {
    test("Then it should return a new state with the received user and isLogged property true", () => {
      const newUserState = getRandomInitialUserState();

      const expectedState: UserState = {
        ...newUserState,
        isLogged: true,
      };
      const loginActionPayload: UserLoginData = {
        username: newUserState.username,
        id: newUserState.id,
        accessToken: newUserState.accessToken,
      };
      const loginUserAction = loginUserActionCreator(loginActionPayload);
      const newState = userReducer(newUserState, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives an inital state with an user logged and a logoutUser action", () => {
    test("Then it should return a copy of at userInitialState", () => {
      const currentState: UserState = mockLoggedUser;
      const logoutUserAction = logoutUserActionCreator();
      const newState = userReducer(currentState, logoutUserAction);

      expect(newState).toStrictEqual(userInitialStateMock);
    });
  });
});
