import { useEffect } from "react";
import useRecipe from "../../hooks/useRecipe/useRecipe";
import { useAppSelector } from "../../redux/hooks";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeListStyled from "./RecipeListStyled";

const RecipeList = (): JSX.Element => {
  const recipesList = useAppSelector(({ recipes }) => recipes.recipes);
  const { loadAllRecipes } = useRecipe();
  useEffect(() => {
    loadAllRecipes();
  }, [loadAllRecipes]);

  return (
    <RecipeListStyled className="recipe-list">
      {recipesList.map((recipe, index) => (
        <li key={index}>
          <RecipeCard image={recipe.image} name={recipe.name} />
        </li>
      ))}
    </RecipeListStyled>
  );
};

export default RecipeList;
