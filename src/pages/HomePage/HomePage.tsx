import RecipeList from "../../components/RecipeList/RecipeList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <header className="header">
        <h1 className="header__main-title">Prepara tu propia receta...</h1>
      </header>
      <RecipeList />
    </HomePageStyled>
  );
};

export default HomePage;
