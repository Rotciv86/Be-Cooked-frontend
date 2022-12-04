import { Link } from "react-router-dom";
import RecipeList from "../../components/RecipeList/RecipeList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <header className="header">
        <h1 className="header__main-title">Prepara tu propia receta...</h1>
      </header>
      <Link to={"/create"}>Crea tu receta</Link>
      <RecipeList />
    </HomePageStyled>
  );
};

export default HomePage;
