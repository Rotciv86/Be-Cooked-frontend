import "modern-normalize";
import "@fontsource/roboto";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:focus{
  outline: none;
}
  body {
    
    font-family: roboto, sans-serif;

  }

  ul {
    list-style: none;
  }

  .container{
    padding: 1rem;
  }
`;

export default GlobalStyles;
