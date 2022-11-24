export interface UserRegisterData {
  username: string;
  password: string;
}

export interface UiState {
  feedback: {
    isOpen: boolean;
    messageFeedback: string;
    isError: boolean;
  };
  isLoading: boolean;
}

export interface OpenFeedbackActionPayload {
  feedback: {
    messageFeedback: string;
    isError: boolean;
  };
}
