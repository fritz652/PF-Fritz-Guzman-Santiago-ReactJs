/* import { Link, Outlet } from "react-router-dom"; */
//estilos
import "./NavBar.css"
//componentes
import CardWidget from "../../Components/CardWidget/CardWidget"

const NavBar = () => {
  return (
    <>
        <nav>
            <ul className='logo' ><a>Fritz</a></ul>
            <ul className="navOne">
                <li><a>Hombre</a></li>
                <li><a>Mujer</a></li>
                <li><a>Kids</a></li>
            </ul>
            <CardWidget/>
        </nav>

    </>
  )
}

export default NavBar