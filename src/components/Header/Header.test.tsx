import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import recipeInitialStateMock from "../../mocks/recipeMocks/recipeInitialState";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccesRegister";
import userInitialStateMock from "../../mocks/userMocks/userInitialStateMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";

const mockLogout = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    logoutUser: mockLogout,
  });
});

describe("Given the Header component", () => {
  describe("When it is rendered and a user is logged", () => {
    test("Then it should show the title 'Be Cooked'", () => {
      const expectedTitleText = "Be Cooked";
      renderWithProviders(<Header />);

      const title = screen.queryByLabelText(expectedTitleText) as HTMLElement;

      expect(title).toBeInTheDocument();
    });

    test("Then it should show two anchor links with the texts 'Recetas' and 'Crear receta'", () => {
      const recipes = "Recetas";
      const logout = "Cerrar sesión";

      renderWithProviders(<Header />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: { ...userInitialStateMock, isLogged: true },
          recipes: recipeInitialStateMock,
        },
      });

      const recipesLink = screen.queryByRole("link", { name: recipes });
      const logoutButton = screen.queryByRole("button", { name: logout });

      expect(recipesLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and a user is not logged", () => {
    test("Then it should show two anchor links with the texts 'Recetas' and 'Inicia sesión'", () => {
      const recipes = "Recetas";
      const login = "Inicia sesión";

      renderWithProviders(<Header />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: userInitialStateMock,
          recipes: recipeInitialStateMock,
        },
      });

      const recipesLink = screen.queryByRole("link", { name: recipes });
      const registerLink = screen.queryByRole("link", { name: login });

      expect(recipesLink).toBeInTheDocument();
      expect(registerLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the 'Cerrar sesión' button is clicked", () => {
    test("Then it should call the 'Cerrar sesión' action", async () => {
      renderWithProviders(<Header />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: { ...userInitialStateMock, isLogged: true },
          recipes: recipeInitialStateMock,
        },
      });

      const button = screen.queryByRole("button", { name: "Cerrar sesión" });
      await userEvent.click(button!);

      expect(mockLogout).toHaveBeenCalled();
    });
  });
});
