import React, { useState } from "react";
import useRecipe from "../../hooks/useRecipe/useRecipe";
import { Recipe, RecipePreForm } from "../../types/types";
import Button from "../Button/Button";
import RecipeFormStyled from "./RecipeFormStyled";

const initialFormData: RecipePreForm = {
  name: "",
  category: "",
  image: "",
  ingredients: "",
  steps: "",
};

const RecipeForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { createRecipe } = useRecipe();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const isNotEmpty = formData.name !== "" && formData.category !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formSubmitData: Recipe = {
      name: formData.name,
      category: formData.category,
      image: formData.image,
      ingredients: formData.ingredients.split(","),
      steps: formData.steps.split(","),
    };

    createRecipe(formSubmitData);
  };

  return (
    <RecipeFormStyled className="register-form" onSubmit={handleSubmit}>
      <div className="register-form__container">
        <div className="register-form__form-group">
          <label htmlFor="name">NOMBRE</label>
          <input
            className="register-form__input"
            type="text"
            id="name"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.name}
            required
          />
        </div>

        <div className="register-form__form-group">
          <label htmlFor="category">CATEGORÍA</label>
          <input
            className="register-form__input"
            id="category"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.category}
            required
          />
        </div>

        <div className="register-form__form-group">
          <label htmlFor="image">IMAGEN</label>
          <input
            className="register-form__input"
            type="text"
            id="image"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.image}
            required
          />
        </div>

        <div className="register-form__form-group">
          <label htmlFor="ingredients">INGREDIENTES</label>
          <input
            className="register-form__input"
            type="text"
            id="ingredients"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.ingredients}
            required
          />
        </div>

        <div className="register-form__form-group">
          <label htmlFor="steps">PASOS DE PREPARACIÓN</label>
          <input
            className="register-form__input"
            type="text"
            id="steps"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.steps}
            required
          />
        </div>
      </div>
      <Button
        text="CREAR RECETA"
        className="register-button"
        action={() => {}}
        isDisabled={!isNotEmpty}
      />
    </RecipeFormStyled>
  );
};

export default RecipeForm;
