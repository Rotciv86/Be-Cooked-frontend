import "styled-components";

const main = "#00A93D";
const upperMain = "#009A3D";
const secondary = "#113C2B";

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
