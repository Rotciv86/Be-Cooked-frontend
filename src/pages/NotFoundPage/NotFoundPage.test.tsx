import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with text 'VOLVER AL INICIO'", () => {
      const buttonText = "VOLVER AL INICIO";

      renderWithProviders(<NotFoundPage />);

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });
  });
});
