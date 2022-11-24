import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: ${(props) => props.theme.borderRadius.big};
  background-color: ${(props) => props.theme.colors.upperMain};
  color: #fff;
  height: 50px;
  width: 328px;
  font-weight: 400;
  font-size: 20px;
  border: 2px solid transparent;
`;

export default ButtonStyled;
