import "modern-normalize";
import "@fontsource/roboto";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.secondary};
        font-family: ${(props) => props.theme.font.family};

  }
`;

export default GlobalStyles;
