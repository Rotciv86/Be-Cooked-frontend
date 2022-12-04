import { rest } from "msw";
import { Recipe, UserRegisterData } from "../types/types";
import { mockRecipes, mockUseRecipes } from "./recipeMocks/mockRecipe";

const apiUrl = process.env.REACT_APP_API_URL;
const { id } = mockRecipes[0];

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

  rest.get(`${apiUrl}/recipes/list`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(mockUseRecipes));
  }),

  rest.get(`${apiUrl}/recipes/list`, async (req, res, ctx) => {
    return res.once(
      ctx.status(404),
      ctx.json({ error: "¡Ups, no hay recetas para mostrar!" })
    );
  }),

  rest.delete(`${apiUrl}/recipes/delete/${id}`, async (req, res, ctx) => {
    return res.once(ctx.status(200));
  }),

  rest.delete(`${apiUrl}/recipes/delete/${id}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Something went wrong" })
    );
  }),

  rest.post(`${apiUrl}/recipes/create`, async (req, res, ctx) => {
    const recipe = await req.json<Recipe>();
    return res.once(ctx.status(201), ctx.json({ recipe }));
  }),

  rest.post(`${apiUrl}/recipes/create`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Error, no ha sido posible crear la receta" })
    );
  }),
];

export default handlers;
