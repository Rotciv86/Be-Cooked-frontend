import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteRecipeActionCreator,
  getRecipeByIdActionCreator,
  loadAllRecipesActionCreator,
} from "../../redux/features/recipeSlice/recipeSlice";
import {
  closeLoadingActionCreator,
  openFeedbackActionCreator,
  openLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Recipe } from "../../types/types";
import { AxiosResponseBody } from "../types";

const useRecipe = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const loadAllRecipes = useCallback(async () => {
    dispatch(openLoadingActionCreator());
    try {
      const response = await axios.get(`${apiUrl}/recipes/list`);

      const apiResponse = response.data;

      const { recipes } = apiResponse;
      dispatch(closeLoadingActionCreator());

      dispatch(loadAllRecipesActionCreator(recipes));
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());

      dispatch(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: "¡Ups, no hay recetas para mostrar!",
        })
      );
    }
  }, [dispatch, apiUrl]);

  const deleteRecipe = async (recipeId: string) => {
    dispatch(openLoadingActionCreator());
    try {
      await axios.delete(`${apiUrl}/recipes/delete/${recipeId}`, {});
      dispatch(deleteRecipeActionCreator(recipeId));
      dispatch(closeLoadingActionCreator());

      dispatch(
        openFeedbackActionCreator({
          isError: false,
          messageFeedback: "La receta ha sido borrada correctamente",
        })
      );
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());

      dispatch(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: (error as AxiosError<AxiosResponseBody>).response
            ?.data.error!,
        })
      );
    }
  };

  const createRecipe = async (recipeData: Recipe) => {
    dispatch(openLoadingActionCreator());
    try {
      await axios.post(`${apiUrl}/recipes/create`, recipeData);
      dispatch(closeLoadingActionCreator());

      dispatch(
        openFeedbackActionCreator({
          isError: false,
          messageFeedback: "La receta ha sido creada correctamente",
        })
      );
      navigate("/");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());

      dispatch(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: "Error, no ha sido posible crear la receta",
        })
      );
    }
  };

  const getRecipeById = useCallback(
    async (recipeId: string) => {
      dispatch(openLoadingActionCreator());
      try {
        const response = await axios.get(
          `${apiUrl}/recipes/detail/${recipeId}`
        );

        const apiResponse = response.data;

        const { recipe } = apiResponse;

        dispatch(closeLoadingActionCreator());
        dispatch(getRecipeByIdActionCreator(recipe));
      } catch (error: unknown) {
        dispatch(closeLoadingActionCreator());
        dispatch(
          openFeedbackActionCreator({
            isError: true,
            messageFeedback: "¡Ups, no se encuentra la receta a mostrar!",
          })
        );
      }
    },
    [apiUrl, dispatch]
  );

  return { loadAllRecipes, deleteRecipe, createRecipe, getRecipeById };
};

export default useRecipe;
