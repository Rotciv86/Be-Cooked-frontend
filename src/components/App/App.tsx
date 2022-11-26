import { useAppSelector } from "../../redux/hooks";
import Feedback from "../Feedback/Feedback";
import RegisterForm from "../RegisterForm/RegisterForm";

const App = () => {
  const {
    feedback: { isOpen, messageFeedback, isError },
  } = useAppSelector(({ ui }) => ui);

  return (
    <div className="container">
      <h1>Be Cooked</h1>
      {isOpen && (
        <Feedback
          messageFeedback={messageFeedback}
          isOpen={isOpen}
          isError={isError}
        />
      )}
      <RegisterForm />
    </div>
  );
};

export default App;
