import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../redux/hooks";
import ButtonStyled from "../Button/ButtonStyled";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  const { logoutUser } = useUser();

  return (
    <HeaderStyled>
      <div>
        <NavLink to={"/"} aria-label="Be Cooked" className="header__title">
          Be Cooked
        </NavLink>
      </div>

      <div className="header__navigation">
        <NavLink to={"/"}>Recetas</NavLink>
        {isLogged && (
          <ButtonStyled
            className="header__navigation-logout"
            onClick={() => logoutUser()}
          >
            Cerrar sesión
          </ButtonStyled>
        )}
        {!isLogged && <NavLink to={"/login"}>Inicia sesión</NavLink>}
      </div>
    </HeaderStyled>
  );
};

export default Header;
