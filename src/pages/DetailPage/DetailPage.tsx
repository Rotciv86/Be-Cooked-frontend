import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";
import useRecipe from "../../hooks/useRecipe/useRecipe";
import { useAppSelector } from "../../redux/hooks";

const DetailPage = (): JSX.Element => {
  const { getRecipeById } = useRecipe();
  const { id } = useParams();

  useEffect(() => {
    getRecipeById(id!);
  }, [getRecipeById, id]);

  const recipe = useAppSelector(({ recipes }) => recipes.recipe!);

  return <RecipeDetail recipe={recipe} />;
};

export default DetailPage;
