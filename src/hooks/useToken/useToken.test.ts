import ProviderWrapper from "../../mocks/providerWrapper";
import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { JwtCustomPayload } from "../types";
import { store } from "../../redux/store";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockUser: JwtCustomPayload = {
  username: "admin",
  id: "12314214",
  accessToken: "1234567",
};

jest.mock("jwt-decode", () => {
  return () =>
    ({ id: mockUser.id, username: mockUser.username } as JwtCustomPayload);
});

const mockLocalStorage = (() => {
  let store = {} as Storage;

  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {} as Storage;
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("token", "1234567");
});

afterAll(() => {
  mockLocalStorage.clear();
});

const dispatch = jest.spyOn(store, "dispatch");

describe("Given the useToken custom hook", () => {
  describe("When its method getToken is invoked", () => {
    test("Then its should call it's dispatch method", () => {
      mockLocalStorage.setItem("token", "1234567");
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When its method getToken is invokedk", () => {
    test("Then its should  call not the dispatch", () => {
      mockLocalStorage.setItem("token", "");

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
