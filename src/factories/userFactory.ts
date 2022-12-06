import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { UserState } from "../types/types";

const randomUserInitialState = Factory.define<UserState>(() => ({
  username: faker.internet.userName(),
  id: faker.random.alphaNumeric(13),
  accessToken: faker.random.alphaNumeric(10),
  isLogged: false,
}));

export const getRandomInitialUserState = () => randomUserInitialState.build();
