//estilos
import "./NavBar.css";
//componentes
import CardWidget from "../../Components/CardWidget/CardWidget";
//For router dom
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="logo">
          <Link to="/">Fritz</Link>
        </ul>
        <ul className="navOne">
          <li>
            <Link to="/all">All</Link>
          </li>
          <li>
            <Link to="">Hombre</Link>
          </li>
          <li>
            <Link to="">Mujer</Link>
          </li>
          <li>
            <Link to="">Kids</Link>
          </li>
        </ul>
        <CardWidget />
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
