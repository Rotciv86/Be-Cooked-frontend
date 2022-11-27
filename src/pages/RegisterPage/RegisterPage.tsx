import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <h2 className="register-heading">
        ¡ÚNETE A BE COOKED, LA MEJOR PLATAFORMA DE RECETAS!
      </h2>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
