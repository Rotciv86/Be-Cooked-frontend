import RecipeCardStyled from "./RecipeCardStyled";

interface RecipeCardProps {
  name: string;
  image: string;
}

const RecipeCard = ({ name, image }: RecipeCardProps): JSX.Element => {
  return (
    <RecipeCardStyled className="recipe-card">
      <div className="recipe-card__image">
        <img src={image} alt={name} height="200" width="382" />
      </div>
      <h2 className="recipe-card__title">{name}</h2>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
