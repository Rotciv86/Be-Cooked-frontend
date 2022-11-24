import { DefaultTheme } from "styled-components";

const main = "#00A93D";
const upperMain = "#009A3D";
const secondary = "#113C2B";

const mainTheme: DefaultTheme = {
  font: {
    base: 16,
    family: "Roboto",
  },
  colors: {
    main: main,
    upperMain: upperMain,
    secondary: secondary,
    gray: "#B1B1B1",
    feedbackSuccess: "#A2C6BA",
    feedbackError: "#F6A8A8",
  },
  pxToRem: (value: number): string => `${value / mainTheme.font.base}rem`,
};

export { mainTheme };
