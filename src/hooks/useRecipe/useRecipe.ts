import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteRecipeActionCreator,
  loadAllRecipesActionCreator,
} from "../../redux/features/recipeSlice/recipeSlice";
import { openFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Recipe } from "../../types/types";
import { AxiosResponseBody } from "../types";

const useRecipe = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadAllRecipes = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/recipes/list`);

      const apiResponse = response.data;

      const { recipes } = apiResponse;

      dispatch(loadAllRecipesActionCreator(recipes));
    } catch (error: unknown) {
      dispatch(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: "¡Ups, no hay recetas para mostrar!",
        })
      );
    }
  }, [dispatch, apiUrl]);

  const deleteRecipe = async (recipeId: string) => {
    try {
      await axios.delete(`${apiUrl}/recipes/delete/${recipeId}`, {});
      dispatch(deleteRecipeActionCreator(recipeId));
      dispatch(
        openFeedbackActionCreator({
          isError: false,
          messageFeedback: "Your recipe was successfully deleted",
        })
      );
    } catch (error: unknown) {
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
    const feedbackCreated = {
      isError: false,
      messageFeedback: "La receta ha sido creada correctamente",
    };

    try {
      await axios.post(`${apiUrl}recipes/create`, recipeData);

      dispatch(openFeedbackActionCreator(feedbackCreated));
      navigate("/");
    } catch (error: unknown) {
      dispatch(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: "Error, no ha sido posible crear la receta",
        })
      );
    }
  };

  return { loadAllRecipes, deleteRecipe, createRecipe };
};

export default useRecipe;
