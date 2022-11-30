import axios from "axios";
import { useCallback } from "react";
import { loadAllRecipesActionCreator } from "../../redux/features/recipeSlice/recipeSlice";
import { openFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

const useRecipe = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

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

  return { loadAllRecipes };
};

export default useRecipe;
