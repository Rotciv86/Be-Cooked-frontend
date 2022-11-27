import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
