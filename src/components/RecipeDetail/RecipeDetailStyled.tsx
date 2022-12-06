import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const RecipeDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  padding: ${mainTheme.pxToRem(16)};
  border-radius: ${mainTheme.pxToRem(6)};
  overflow: hidden;

  h2,
  h3,
  h4,
  li {
    &::first-letter {
      text-transform: capitalize;
    }
  }

  .recipe-detail__image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    padding-left: ${mainTheme.pxToRem(15)};
  }

  ol {
    padding-left: ${mainTheme.pxToRem(30)};
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: ${mainTheme.pxToRem(6)};
  }
`;

export default RecipeDetailStyled;
