import { UiState } from "../../types/types";

const mockErrorRegister: UiState = {
  feedback: {
    isError: true,
    isOpen: true,
    messageFeedback: "It was not possible to register",
  },
  isLoading: false,
};

export default mockErrorRegister;
