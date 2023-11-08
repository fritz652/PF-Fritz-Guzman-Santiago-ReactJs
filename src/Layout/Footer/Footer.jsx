import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-title">Fritz</div>
        <div className="footer-box">
          <ul className="f-1">
            <li>Ayuda</li>
            <li>Términos y condiciones</li>
            <li>Medios de Pago</li>
          </ul>
          <ul className="f-1">
            <li>Quienes Somos</li>
            <li>Nuestras Tiendas</li>
            <li>Facturación electrónica</li>
          </ul>
          <ul className="f-1">
            <li>Escríbenos a: fritz.guzman.santiago@gmail.com</li>
            <li>Teléfonos / whatsapp: +51-981659039</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
