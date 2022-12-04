import { act, renderHook, waitFor } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import { mockRecipe, mockRecipes } from "../../mocks/recipeMocks/mockRecipe";
import {
  deleteRecipeActionCreator,
  loadAllRecipesActionCreator,
} from "../../redux/features/recipeSlice/recipeSlice";
import { openFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import { OpenFeedbackActionPayload } from "../../types/types";
import useRecipe from "./useRecipe";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useRecipe custom hook", () => {
  const {
    result: {
      current: { loadAllRecipes },
    },
  } = renderHook(() => useRecipe(), {
    wrapper: ProviderWrapper,
  });

  describe("When it's method loadAllRecipes is invoked", () => {
    test("Then it should invoke dispatch with loadAllRecipesActionCreator and a list of recipes", async () => {
      await loadAllRecipes();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadAllRecipesActionCreator(mockRecipes)
      );
    });
  });

  describe("When its method loadAllRecipes is invoked and axios rejects it", () => {
    test("Then it should invoke dispatch with openFeedbacklActionCreator with text '¡Ups, no hay recetas para mostrar!' and isError true", async () => {
      const expectedFeedbackPayload: OpenFeedbackActionPayload = {
        isError: true,
        messageFeedback: "¡Ups, no hay recetas para mostrar!",
      };
      await loadAllRecipes();

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator(expectedFeedbackPayload)
      );
    });
  });

  describe("When it's method deleteRecipe is invoked with a recipeId", () => {
    test("Then it should invoke dispatch with deleteRecipeActionCreator and the received recipeId", async () => {
      const {
        result: {
          current: { deleteRecipe },
        },
      } = renderHook(() => useRecipe(), {
        wrapper: ProviderWrapper,
      });
      const { id: testRecipeId } = mockRecipes[0];

      await deleteRecipe(testRecipeId as string);

      expect(dispatchSpy).toHaveBeenCalledWith(
        deleteRecipeActionCreator(testRecipeId as string)
      );
    });
  });

  describe("When it's method deleteRecipe is invoked and the request fails", () => {
    test("Then it shoould invoke dispatch with openFeedbackActionCreator with and error", async () => {
      const {
        result: {
          current: { deleteRecipe },
        },
      } = renderHook(() => useRecipe(), {
        wrapper: ProviderWrapper,
      });
      const { id: testRecipeId } = mockRecipes[0];

      await deleteRecipe(testRecipeId as string);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openFeedbackActionCreator({
          isError: true,
          messageFeedback: "Something went wrong",
        })
      );
    });
  });

  describe("When it's method createRecipe is invoked with a correct recipe type", () => {
    test("Then it should invoke dispatch with openFeedbackActionCreator with text 'La receta ha sido creada correctamente'", async () => {
      const {
        result: {
          current: { createRecipe },
        },
      } = renderHook(() => useRecipe(), {
        wrapper: ProviderWrapper,
      });
      const newRecipe = mockRecipe;
      const feedbackPayload: OpenFeedbackActionPayload = {
        isError: false,
        messageFeedback: "La receta ha sido creada correctamente",
      };

      await act(async () => await createRecipe(newRecipe));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openFeedbackActionCreator(feedbackPayload)
        )
      );
    });
  });

  describe("When it's method createRecipe is invoked and rejects it", () => {
    test("Then it should invoke dispatch with openFeedbackActionCreator with text 'Error, no ha sido posible crear la receta'", async () => {
      const {
        result: {
          current: { createRecipe },
        },
      } = renderHook(() => useRecipe(), {
        wrapper: ProviderWrapper,
      });
      const newRecipe = mockRecipe;
      const feedbackPayload: OpenFeedbackActionPayload = {
        isError: true,
        messageFeedback: "Error, no ha sido posible crear la receta",
      };

      await act(async () => await createRecipe(newRecipe));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openFeedbackActionCreator(feedbackPayload)
        )
      );
    });
  });
});
