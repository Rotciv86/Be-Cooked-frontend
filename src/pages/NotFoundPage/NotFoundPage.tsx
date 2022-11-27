import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";
import huevo from "./huevo-frito-404.jpg";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageStyled className="main-content">
      <div className="main-content__main-text">
        <span className="main-content__main-text--number">4</span>
        <img
          className="image"
          src={huevo}
          alt="huevo frito enplatado"
          width="482"
          height="321.33"
        />
        <span className="main-content__main-text--number">4</span>
      </div>
      <div className="main-content__last-information">
        <span>PAGE NOT FOUND</span>
        <Button text="VOLVER AL INICIO" action={() => navigate("/")} />
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
