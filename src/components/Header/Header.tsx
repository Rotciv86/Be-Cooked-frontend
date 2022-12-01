import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div>
        <NavLink to={"/"} aria-label="Be Cooked" className="header__title">
          Be Cooked
        </NavLink>
      </div>

      <div className="header__navigation">
        <NavLink to={"/"}>Recetas</NavLink>
        <NavLink to={"/register"}>Regístrate</NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;
