import "modern-normalize";
import "@fontsource/roboto";
import { createGlobalStyle } from "styled-components";
import { mainTheme } from "./mainTheme";

const GlobalStyles = createGlobalStyle`
:focus{
  outline: none;
}
  body {
    
    font-family: roboto, sans-serif;

  }

  a{
    text-decoration: none;
    color: ${mainTheme.colors.secondary};
  }

  ul {
    list-style: none;
  }

  .container{
    padding: 1rem;
  }
`;

export default GlobalStyles;
