//estilos
import "./NavBar.css";
//componentes
import CardWidget from "../../Components/CardWidget/CardWidget";
//For router dom
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="logo">
          <a>Fritz</a>
        </ul>
        <ul className="navOne">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Hombre</a>
          </li>
          <li>
            <a>Mujer</a>
          </li>
          <li>
            <a>Kids</a>
          </li>
        </ul>
        <CardWidget />
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
