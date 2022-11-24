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
      feedbackError: string;
    };
    pxToRem: (value: number) => {};
  }
}
