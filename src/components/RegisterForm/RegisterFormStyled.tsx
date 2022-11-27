import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const RegisterFormStyled = styled.form`
  .register-heading {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-style: Regular;
    font-size: 30px;
    line-height: 33.88px;
    line-height: 98%;
    align-content: center;
    vertical-align: top;
    color: ${(props) => props.theme.colors.secondary};
  }
  .register-form {
    display: flex;
    flex-direction: column;
    padding: 0 16;
    &__container {
      display: flex;
      flex-direction: column;
      gap: ${mainTheme.pxToRem(27)};
    }
    &__form-group {
      display: flex;
      flex-direction: column;
      gap: ${mainTheme.pxToRem(5)};
    }
    &__input {
      height: ${mainTheme.pxToRem(50)};
      border-radius: ${mainTheme.borderRadius.small};
      border: 1px solid ${mainTheme.colors.gray};
      padding: 1rem;
      &:hover,
      &:focus {
        border: 1px solid ${mainTheme.colors.main};
      }
    }
  }

  label {
    font-size: ${mainTheme.pxToRem(20)};
  }

  .register-button {
    &:hover,
    &:focus {
      background-color: #fff;
      color: ${mainTheme.colors.upperMain};
      border: 1px solid ${mainTheme.colors.upperMain};
    }
  }
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: ${mainTheme.pxToRem(81)};
`;

export default RegisterFormStyled;
