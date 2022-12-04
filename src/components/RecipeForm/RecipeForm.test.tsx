import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RecipeForm from "./RecipeForm";

const mockCreateRecipeAction = jest.fn();

jest.mock("../../hooks/useRecipe/useRecipe", () => {
  return () => ({ createRecipe: mockCreateRecipeAction });
});

describe("Given the RecipeForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with inputs fields 'name','category','image','ingredients' and 'steps'", () => {
      renderWithProviders(<RecipeForm />);
      const expectedTotalInputs = 5;
      const totalInputs = screen.queryAllByRole("textbox");
      const nameInput = screen.queryByRole("textbox", {
        name: "NOMBRE",
      });
      const categoryInput = screen.queryByRole("textbox", {
        name: "CATEGORÍA",
      });
      const imageInput = screen.queryByRole("textbox", {
        name: "IMAGEN",
      });
      const ingredientsInput = screen.queryByRole("textbox", {
        name: "INGREDIENTES",
      });
      const stepsInput = screen.queryByRole("textbox", {
        name: "PASOS DE PREPARACIÓN",
      });

      expect(totalInputs).toHaveLength(expectedTotalInputs);
      expect(nameInput).toBeInTheDocument();
      expect(categoryInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(ingredientsInput).toBeInTheDocument();
      expect(stepsInput).toBeInTheDocument();
    });
  });

  describe("When it's filled in and its button 'CREAR RECETA' is clicked", () => {
    test("Then the form should be submited", async () => {
      renderWithProviders(<RecipeForm />);

      const nameInput = screen.queryByRole("textbox", {
        name: "NOMBRE",
      })!;
      await userEvent.type(nameInput, "Arroces");
      const categoryInput = screen.queryByRole("textbox", {
        name: "CATEGORÍA",
      })!;
      await userEvent.type(categoryInput, "Arroces");
      const imageInput = screen.queryByRole("textbox", {
        name: "IMAGEN",
      })!;
      await userEvent.type(imageInput, "http://arroz.adsfad.io");

      const ingredientsInput = screen.queryByRole("textbox", {
        name: "INGREDIENTES",
      })!;
      await userEvent.type(ingredientsInput, "arroz, bogavante, fumet");

      const stepsInput = screen.queryByRole("textbox", {
        name: "PASOS DE PREPARACIÓN",
      })!;
      await userEvent.type(
        stepsInput,
        "calentar el agua, echar arroz, remover"
      );

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockCreateRecipeAction).toHaveBeenCalled();
    });
  });
});
