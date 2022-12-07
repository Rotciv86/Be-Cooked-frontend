import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  return (
    <HeaderStyled>
      <div>
        <NavLink to={"/"} aria-label="Be Cooked" className="header__title">
          Be Cooked
        </NavLink>
      </div>

      <div className="header__navigation">
        <NavLink to={"/"}>Recetas</NavLink>
        {isLogged && <NavLink to={"/create"}>Crear receta</NavLink>}
        {!isLogged && <NavLink to={"/login"}>Inicia sesión</NavLink>}
      </div>
    </HeaderStyled>
  );
};

export default Header;
