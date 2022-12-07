import { screen } from "@testing-library/react";
import recipeInitialStateMock from "../../mocks/recipeMocks/recipeInitialState";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccesRegister";
import userInitialStateMock from "../../mocks/userMocks/userInitialStateMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import HomePage from "./HomePage";

describe("Given the HomePage", () => {
  describe("When is rendered and the user is not logged", () => {
    test("Then it should show a heading level 1 with text 'Prepara tu propia receta...'", () => {
      const headingText = "Prepara tu propia receta...";

      renderWithProviders(<HomePage />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: userInitialStateMock,
          recipes: recipeInitialStateMock,
        },
      });

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: "Prepara tu propia receta...",
      });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(headingText);
    });
  });

  describe("When is rendered and the user is logged", () => {
    test("Then it should show a heading level 1 with text 'Prepara tu propia receta...' a button with the text 'Crea tu receta'", () => {
      const headingText = "Prepara tu propia receta...";
      const linkText = "Crea tu receta";
      renderWithProviders(<HomePage />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: { ...userInitialStateMock, isLogged: true },
          recipes: recipeInitialStateMock,
        },
      });

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: headingText,
      });
      const link = screen.queryByRole("link", { name: linkText });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(headingText);
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(linkText);
    });
  });
});
