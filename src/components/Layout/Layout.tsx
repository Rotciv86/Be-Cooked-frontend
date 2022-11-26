import { Route, Routes } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
