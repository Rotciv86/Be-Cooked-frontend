import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default GlobalStyles;
