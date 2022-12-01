import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import hero from "./hero-image-carrots.webp";

const HomePageStyled = styled.div`
  .header {
    margin: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url(${hero});
    height: ${mainTheme.pxToRem(274)};
    background-repeat: no-repeat;
    background-size: cover;

    &__main-title {
      position: absolute;
      margin: 0 auto;
      color: #fff;
      font-style: italic;
      font-size: ${mainTheme.pxToRem(30)};
      line-height: ${mainTheme.pxToRem(24)};
      line-height: 68%;
      align-items: left;
      vertical-align: center;
      letter-spacing: ${mainTheme.pxToRem(0.2)};
    }
  }
`;

export default HomePageStyled;
