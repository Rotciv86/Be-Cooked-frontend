import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { UserData } from "../../types/types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const initialFormData: UserData = {
  username: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { loginUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const isNotEmpty = formData.username !== "" && formData.password !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formSubmitData: UserData = {
      username: formData.username,
      password: formData.password,
    };

    loginUser(formSubmitData);
  };

  return (
    <LoginFormStyled className="register-form" onSubmit={handleSubmit}>
      <div className="register-form__container">
        <div className="register-form__form-group">
          <label htmlFor="username">Escribe tu nombre de usuario</label>
          <input
            className="register-form__input"
            type="text"
            id="username"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.username}
            required
          />
        </div>

        <div className="register-form__form-group">
          <label htmlFor="password">Introduce tu contraseña</label>
          <input
            className="register-form__input"
            type="password"
            id="password"
            autoComplete="off"
            minLength={4}
            onChange={handleFormChange}
            value={formData.password}
            required
          />
        </div>
      </div>
      <p className="register-form__introduction">
        ¿Aún no tienes cuenta?&nbsp;
        <Link className="register-form__link" to={"/register"}>
          Regístrate
        </Link>
      </p>
      <Button
        text="INICIA SESIÓN"
        className="register-button"
        action={() => {}}
        isDisabled={!isNotEmpty}
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
