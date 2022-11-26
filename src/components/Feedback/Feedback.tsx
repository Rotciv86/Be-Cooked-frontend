import { useEffect } from "react";
import { closeFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import FeedbackStyled from "./FeedbackStyled";

interface FeedackProps {
  isOpen: boolean;
  messageFeedback: string;
  isError: boolean;
}

const Feedback = ({ messageFeedback, isOpen, isError }: FeedackProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(closeFeedbackActionCreator());
      }, 3131);
    }
  }, [dispatch, isOpen]);

  return (
    <FeedbackStyled className={isError ? "feedback-error" : "feedback-success"}>
      <span className="feedback-text">{messageFeedback}</span>
    </FeedbackStyled>
  );
};

export default Feedback;
