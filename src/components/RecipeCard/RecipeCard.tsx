import { Link } from "react-router-dom";
import useRecipe from "../../hooks/useRecipe/useRecipe";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import RecipeCardStyled from "./RecipeCardStyled";

interface RecipeCardProps {
  name: string;
  image: string;
  id: string;
}

const RecipeCard = ({ name, image, id }: RecipeCardProps): JSX.Element => {
  const { deleteRecipe } = useRecipe();
  const { isLogged } = useAppSelector(({ user }) => user);

  return (
    <RecipeCardStyled className="recipe-card">
      <Link to={`/detail/${id}`}>
        <div className="recipe-card__image">
          <img src={image} alt={name} height="200" width="382" />
        </div>
      </Link>
      <h2 className="recipe-card__title">{name}</h2>
      {isLogged && (
        <Button
          text="BORRAR"
          className="recipe-card__delete-button"
          action={() => deleteRecipe(id)}
        />
      )}
    </RecipeCardStyled>
  );
};

export default RecipeCard;
