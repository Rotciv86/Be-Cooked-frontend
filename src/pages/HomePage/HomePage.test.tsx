import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import HomePage from "./HomePage";

describe("Given the HomePage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'Prepara tu propia receta...'", () => {
      const headingText = "Prepara tu propia receta...";

      renderWithProviders(<HomePage />);

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: "Prepara tu propia receta...",
      });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(headingText);
    });
  });
});
