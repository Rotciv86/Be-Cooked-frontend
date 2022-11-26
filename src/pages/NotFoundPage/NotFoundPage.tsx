import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageStyled>
      <div>
        <div>
          <span></span>
          <img
            src="public\images\huevo-frito-404.jpg"
            alt="huevo frito enplatado"
            width="50"
            height="50"
          />
          <span></span>
        </div>
        <div>
          <span>PAGE NOT FOUND</span>
          <Button text="VOLVER AL INICIO" action={() => navigate("/")} />
        </div>
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
