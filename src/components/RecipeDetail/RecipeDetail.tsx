import { Recipe } from "../../types/types";
import RecipeDetailStyled from "./RecipeDetailStyled";

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail = (recipe: RecipeDetailProps): JSX.Element => {
  const {
    recipe: { name, image, category, ingredients, steps },
  } = recipe;

  return (
    <RecipeDetailStyled className="recipe-detail">
      <div className="recipe-detail__image">
        <img src={image} alt={name} height="200" width="382" />
      </div>
      <h2 className="recipe-detail__title">{name}</h2>
      <h3 className="recipe-detail__category">{category}</h3>
      <h4 className="recipe_detail__ingredients">Ingredientes</h4>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h4 className="recipe_detail__steps">Preparación</h4>
      <ol>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ol>
    </RecipeDetailStyled>
  );
};

export default RecipeDetail;
