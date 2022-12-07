import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 47px;
  margin-top: 7rem;

  .main-content {
    &__main-text {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &--number {
        color: ${(props) => props.theme.colors.main};
        font-style: SemiBold;
        font-size: 96px;
        line-height: 56px;
        line-height: 50%;
        align-content: left;
        vertical-align: Top;
        letter-spacing: 0.02px;
      }
    }

    &__last-information {
      display: flex;
      flex-direction: column;
      gap: 47px;
    }
  }
  span {
    font-style: Regular;
    font-size: 37px;
    line-height: 40.7px;
    line-height: 96%;
    align-content: center;
    vertical-align: top;
    color: ${(props) => props.theme.colors.secondary};
  }

  .image {
    max-width: 50%;
    height: auto;
    border-radius: 50%;
  }
`;

export default NotFoundPageStyled;
