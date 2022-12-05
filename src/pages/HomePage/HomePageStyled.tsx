import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import hero from "./hero-image-carrots.webp";

const HomePageStyled = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;

  .create-recipe {
    border-radius: ${(props) => props.theme.borderRadius.big};
    font-weight: 400;
    font-size: 20px;
    background-color: #fff;
    color: ${mainTheme.colors.upperMain};
    border: 2px solid ${mainTheme.colors.upperMain};
    text-align: center;
    padding: ${mainTheme.pxToRem(12)};
  }
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
      text-align: center;
      line-height: 1;
      margin: 0 auto;
      color: #fff;
      font-style: italic;
      font-size: ${mainTheme.pxToRem(30)};
      align-items: left;
      vertical-align: center;
      letter-spacing: ${mainTheme.pxToRem(0.2)};
    }
  }
`;

export default HomePageStyled;
