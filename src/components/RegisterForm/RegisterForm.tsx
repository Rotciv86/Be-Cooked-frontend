import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import { UserRegisterData } from "../../types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialFormData: UserRegisterData = {
  username: "",
  password: "",
};

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { registerUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formSubmitData: UserRegisterData = {
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
      <Button text="Regístrate" className="register-button" action={() => {}} />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
