import { screen } from "@testing-library/react";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccesRegister";
import { closeFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Feedback from "./Feedback";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));
// const dispatchSpy = jest.spyOn(store, "dispatch");

jest.useFakeTimers();

describe("Given the Feedback component", () => {
  describe("When it is rendered with the text '¡Bienvenido a Be Cooked!'", () => {
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
    test("Then it should show the received text", () => {
      const feedback = screen.queryByText(expectedFeedbackText);
      expect(feedback).toBeInTheDocument();
    });

    test("After 3.131 seconds, then it should invoke clodeFeedbackalActionCreator", () => {
      jest.advanceTimersByTime(3333);

      expect(mockDispatch).toHaveBeenCalledWith(closeFeedbackActionCreator());
    });
  });
});
