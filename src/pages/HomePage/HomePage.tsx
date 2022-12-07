import { Link } from "react-router-dom";
import RecipeList from "../../components/RecipeList/RecipeList";
import { useAppSelector } from "../../redux/hooks";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  return (
    <HomePageStyled>
      <header className="header">
        <h1 className="header__main-title">Prepara tu propia receta...</h1>
      </header>
      {isLogged && (
        <Link to={"/create"} className="create-recipe">
          Crea tu receta
        </Link>
      )}
      <RecipeList />
    </HomePageStyled>
  );
};

export default HomePage;
