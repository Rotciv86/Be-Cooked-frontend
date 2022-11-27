import styled from "styled-components";

const RegisterPageStyled = styled.main`
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
`;

export default RegisterPageStyled;
