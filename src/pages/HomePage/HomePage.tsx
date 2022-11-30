import RecipeList from "../../components/RecipeList/RecipeList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="home-page">
      <div className="home-hero-image">
        <h1 className="home-heading">Prepara tu propia receta... </h1>
      </div>
      <RecipeList />
    </HomePageStyled>
  );
};

export default HomePage;
