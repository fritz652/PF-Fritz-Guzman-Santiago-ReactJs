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
          <Link to="/all">
            <li>All</li>
          </Link>
          <Link to="/category/hombre">
            <li>Hombre</li>
          </Link>
          <Link to="/category/mujer">
            <li>Mujer</li>
          </Link>
          <Link to="/category/kids">
            <li>Kids</li>
          </Link>
        </ul>
        <CardWidget />
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
