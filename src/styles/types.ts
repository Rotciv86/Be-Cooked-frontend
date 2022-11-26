import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      base: number;
      family: string;
    };
    colors: {
      main: string;
      upperMain: string;
      secondary: string;
      gray: string;
      feedbackSuccess: string;
      feedbackSuccessBackground: string;
      feedbackError: string;
      feedbackErrorBackground: string;
    };
    borderRadius: {
      big: string;
      small: string;
    };
    pxToRem: (value: number) => {};
  }
}
