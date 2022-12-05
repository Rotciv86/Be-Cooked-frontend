import { Route, Routes } from "react-router-dom";
import CreateRecipePage from "../../pages/CreateRecipePage/CreateRecipePage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector(({ ui }) => ui);
  return (
    <LayoutStyled>
      <Header />
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateRecipePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
