import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const ButtonStyled = styled.button`
  border-radius: ${mainTheme.borderRadius.big};
  background-color: ${mainTheme.colors.upperMain};
  color: #fff;
  height: 50px;
  width: 328px;
  font-weight: 400;
  font-size: 20px;
  border: 2px solid transparent;
`;

export default ButtonStyled;
