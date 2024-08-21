import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

import './Layout.css';

const Layout = () => {
  return (
    <div>
      <div className="containerNav" style={{ height: "10vh" }}>
        <NavBar />
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
