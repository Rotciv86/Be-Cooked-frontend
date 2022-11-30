import { useEffect } from "react";
import useRecipe from "../../hooks/useRecipe/useRecipe";
import { useAppSelector } from "../../redux/hooks";
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
          <img
            src={recipe.image}
            alt={recipe.name}
            width="300"
            height="300"
            className="img-fluid"
          />
          <h2>{recipe.name}</h2>
        </li>
      ))}
    </RecipeListStyled>
  );
};

export default RecipeList;
