//estilos
import "./NavBar.css";
//componentes
import CardWidget from "../../Components/CardWidget/CardWidget";
//For router dom
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="logo">
          <Link to="/"   className="h-color">Huellas</Link>
        </ul>
        <ul className="navOne">
          <Link to="/all">
            <li   className="h-color">All</li>
          </Link>
          <Link to="/category/hombre">
            <li   className="h-color">Hombre</li>
          </Link>
          <Link to="/category/mujer">
            <li   className="h-color">Mujer</li>
          </Link>
          <Link to="/category/kids">
            <li   className="h-color">Kids</li>
          </Link>
        </ul>
        <CardWidget/>
      </nav>
    </>
  );
};

export default NavBar;
