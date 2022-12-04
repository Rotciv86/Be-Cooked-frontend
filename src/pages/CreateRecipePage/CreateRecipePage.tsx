import RecipeForm from "../../components/RecipeForm/RecipeForm";
import CreateRecipePageStyled from "./CreateRecipePageStyled";

const CreateRecipePage = (): JSX.Element => {
  return (
    <CreateRecipePageStyled>
      <header className="header">
        <h1 className="header__main-title">Crea tu propia receta...</h1>
      </header>
      <RecipeForm />
    </CreateRecipePageStyled>
  );
};

export default CreateRecipePage;
