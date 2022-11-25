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

  .container{
    padding: 0 1rem;
  }
`;

export default GlobalStyles;
