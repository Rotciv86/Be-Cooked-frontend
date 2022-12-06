import { getRandomInitialUserState } from "../../../factories/userFactory";
import userInitialStateMock from "../../../mocks/userMocks/userInitialStateMock";
import { UserLoginData, UserState } from "../../../types/types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the function userSlice", () => {
  const currentUserState = userInitialStateMock;

  describe("When it is called and recieves an initial state with an empty feedback and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty user login state", () => {
      const unknownAction = {
        type: "user/unknownAction",
        payload: currentUserState,
      };

      const newUserState = userReducer(currentUserState, unknownAction);

      expect(newUserState).toStrictEqual(currentUserState);
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
});
