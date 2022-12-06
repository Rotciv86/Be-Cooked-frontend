export interface UserData {
  username: string;
  password: string;
}

export interface JwtPayload {
  id: string;
  username: string;
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
  messageFeedback: string;
  isError: boolean;
}

export interface UserLoginData {
  username: string;
  id: string;
  accessToken: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}

export interface Recipe {
  name: string;
  category: string;
  image: string;
  ingredients: string[];
  steps: string[];
  imageBackup?: string;
  owner?: string;
  id?: string;
}

export interface RecipePreForm {
  name: string;
  category: string;
  image: string;
  ingredients: string;
  steps: string;
  imageBackup?: string;
  owner?: string;
  id?: string;
}
