import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const RecipeCardStyled = styled.article`
  display: flex;

  color: ${(props) => props.theme.colors.secondary};
  gap: ${mainTheme.pxToRem(10)};
  text-align: center;
`;

export default RecipeCardStyled;
