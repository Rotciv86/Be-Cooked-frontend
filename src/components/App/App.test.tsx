import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import App from "./App";
import { screen } from "@testing-library/react";
import userInitialStateMock from "../../mocks/userMocks/userInitialStateMock";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccesRegister";
import recipeInitialStateMock from "../../mocks/recipeMocks/recipeInitialState";

describe("Given an App component", () => {
  describe("When is rendered and isOpen is true", () => {
    test("Then it should show a Feedback component", () => {
      const feedbackText = "¡Bienvenido a Be Cooked!";

      renderWithProviders(<App />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: userInitialStateMock,
          recipes: recipeInitialStateMock,
        },
      });

      const feedback = screen.queryByText(feedbackText);
      expect(feedback).toBeInTheDocument();
    });
  });
});
