import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { UserData } from "../../types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialFormData: UserData = {
  username: "",
  password: "",
};

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { registerUser } = useUser();

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

    registerUser(formSubmitData);
  };

  return (
    <RegisterFormStyled className="register-form" onSubmit={handleSubmit}>
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
          <label htmlFor="password">Crea una contraseña</label>
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
        ¿Ya dispones de cuenta?&nbsp;
        <Link className="register-form__link" to={"/login"}>
          Inicia sesión
        </Link>
      </p>
      <Button
        text="REGÍSTRATE"
        className="register-button"
        action={() => {}}
        isDisabled={!isNotEmpty}
      />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
