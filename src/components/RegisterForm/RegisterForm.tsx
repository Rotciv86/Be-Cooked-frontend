import ButtonStyled from "../Button/ButtonStyled";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled>
      <form action="" className="register-form">
        <div className="register-form__container">
          <div className="register-form__form-group">
            <label htmlFor="username">Escribe tu nombre de usuario</label>
            <input
              className="register-form__input"
              type="text"
              id="username"
              autoComplete="off"
            />
          </div>

          <div className="register-form__form-group">
            <label htmlFor="password">Crea una contraseña</label>
            <input
              className="register-form__input"
              type="password"
              id="password"
              autoComplete="off"
              min="8"
            />
          </div>
        </div>
        <ButtonStyled>Registrate</ButtonStyled>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
