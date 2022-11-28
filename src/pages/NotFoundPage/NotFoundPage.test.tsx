import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

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

  describe("When its rendered and it's 'VOLVER AL INICIO' button is clicked", () => {
    test("Then useNavigate should be called", async () => {
      renderWithProviders(<NotFoundPage />);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
