import "./Footer.css";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
            <div className="footer-title">Huellas</div>
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
        </Container>
      </footer>
    </>
  );
};

export default Footer;
