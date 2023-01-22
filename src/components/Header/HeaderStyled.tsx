import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const HeaderStyled = styled.header`
  margin-bottom: 1rem;
  padding: 0 0 1rem 0;
  height: ${mainTheme.pxToRem(82)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${mainTheme.pxToRem(-16)};
  border-bottom: 0.5px solid ${mainTheme.colors.secondary};

  .header__navigation {
    &-logout {
      color: #113c2b;
      background-color: #fff;
      font-weight: 400;
      font-size: 1rem;
      border: none;
      height: auto;
    }

    &-logout:hover {
      cursor: pointer;
      color: #113c2b;
      background-color: #fff;
      font-weight: 700;
      font-size: 1rem;
      border: none;
      height: auto;
    }

    padding: 0 1rem 0 0;
    display: flex;
    gap: 10px;
  }

  .header__title {
    padding: 16px 0 16px 16px;
    font-style: normal;
    font-weight: 700;
    font-size: ${mainTheme.pxToRem(32)};
    line-height: 56px;
    letter-spacing: 0.024px;
    color: ${mainTheme.colors.main};
    transform: matrix(1, -0.01, 0, 1, 0, 0);
  }

  .active {
    font-weight: bold;
  }
  @media (max-width: 340px) {
    .header__title {
      font-size: ${mainTheme.pxToRem(25)};
    }
  }
`;

export default HeaderStyled;
