import React, { useState } from "react";
import { UserRegisterData } from "../../types/types";
import ButtonStyled from "../Button/ButtonStyled";
import RegisterFormStyled from "./RegisterFormStyled";

const initialFormData: UserRegisterData = {
  username: "",
  password: "",
};

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
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
        <ButtonStyled>Regístrate</ButtonStyled>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
