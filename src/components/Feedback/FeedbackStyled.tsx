import styled from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

const FeedbackStyled = styled.div`
  position: absolute;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${mainTheme.pxToRem(18)};

  &.feedback-error {
    background-color: ${(props) => props.theme.colors.feedbackErrorBackground};
    color: ${(props) => props.theme.colors.feedbackError};
    border: 1px solid ${(props) => props.theme.colors.feedbackError};
  }
  &.feedback-success {
    background-color: ${(props) =>
      props.theme.colors.feedbackSuccessBackground};
    color: ${(props) => props.theme.colors.feedbackSuccess};
    border: 1px solid ${(props) => props.theme.colors.feedbackSuccess};
  }
  .feedback-text {
    padding: 1rem;
  }
`;

export default FeedbackStyled;
