import { useEffect } from "react";
import { closeFeedbackActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

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

  return <span className="feedback-text">{messageFeedback}</span>;
};

export default Feedback;
