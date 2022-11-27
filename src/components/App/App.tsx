import { useAppSelector } from "../../redux/hooks";
import Feedback from "../Feedback/Feedback";
import Layout from "../Layout/Layout";

const App = () => {
  const {
    feedback: { isOpen, messageFeedback, isError },
  } = useAppSelector(({ ui }) => ui);

  return (
    <div className="container">
      {isOpen && (
        <Feedback
          messageFeedback={messageFeedback}
          isOpen={isOpen}
          isError={isError}
        />
      )}
      <Layout />
    </div>
  );
};

export default App;
