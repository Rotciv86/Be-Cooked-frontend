import { screen } from "@testing-library/react";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccesRegister";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Feedback from "./Feedback";

describe("Given the Feedback component", () => {
  describe("When it is rendered with the text '¡Bienvenido a Be Cooked!'", () => {
    test("Then it should show the received text", () => {
      const expectedFeedbackText = "¡Bienvenido a Be Cooked!";

      renderWithProviders(
        <Feedback
          messageFeedback={expectedFeedbackText}
          isOpen={true}
          isError={false}
        />,
        {
          preloadedState: { ui: mockSuccessRegister },
        }
      );

      const feedback = screen.queryByText(expectedFeedbackText);
      expect(feedback).toBeInTheDocument();
    });
  });
});
