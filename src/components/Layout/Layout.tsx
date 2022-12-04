import { Route, Routes } from "react-router-dom";
import CreateRecipePage from "../../pages/CreateRecipePage/CreateRecipePage";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateRecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
