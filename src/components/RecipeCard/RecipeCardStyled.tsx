import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const RecipeCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  text-align: center;
  border-radius: ${mainTheme.pxToRem(6)};
  overflow: hidden;
  :hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
  }
  h2 {
    font-size: ${mainTheme.pxToRem(24)};
  }
`;

export default RecipeCardStyled;
