import { rest } from "msw";
import { UserRegisterData } from "../types/types";
import mockRecipes from "./recipeMocks/mockRecipe";

const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.post(`${apiUrl}/users/sign-up`, async (req, res, ctx) => {
    const user = await req.json<UserRegisterData>();
    const { username } = user;
    if (username === "Bertin Ousbourne") {
      return res(
        ctx.status(409),
        ctx.json({ error: "This username is already registered" })
      );
    }
    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.get(`${apiUrl}/recipes`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(mockRecipes));
  }),

  rest.get(`${apiUrl}/recipes`, async (req, res, ctx) => {
    return res.once(
      ctx.status(404),
      ctx.json({ error: "¡Ups, no hay recetas para mostrar!" })
    );
  }),
];

export default handlers;
