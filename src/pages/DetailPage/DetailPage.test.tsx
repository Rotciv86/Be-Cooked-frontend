import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import DetailPage from "./DetailPage";

describe("Given the DetailPage user interface component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a RecipeDetail component having an article html tag in it", () => {
      renderWithProviders(<DetailPage />);

      const usernameInput = screen.queryByRole("article");

      expect(usernameInput).toBeInTheDocument();
    });
  });
});
