import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action: () => void;
  className?: string;
  isDisabled?: boolean;
}

const Button = ({
  action,
  text,
  className,
  isDisabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={`button ${className}`}
      onClick={action}
      disabled={isDisabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
