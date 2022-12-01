import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const HeaderStyled = styled.header`
  margin-bottom: 1rem;
  padding: 0 0 1rem 0;
  height: ${mainTheme.pxToRem(82)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__navigation {
    display: flex;
    gap: 10px;
  }

  .header__title {
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 56px;
    letter-spacing: 0.024px;
    color: ${mainTheme.colors.main};
    transform: matrix(1, -0.01, 0, 1, 0, 0);
  }

  .active {
    font-weight: bold;
  }
`;

export default HeaderStyled;
