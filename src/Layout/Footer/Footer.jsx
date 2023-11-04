import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul>
          <li>Ayudas</li>
          <li>Términos y condiciones</li>
          <li>Medios de Pago</li>
        </ul>
        <ul>
          <li>Quienes Somos</li>
          <li>Quienes Somos</li>
          <li>Nuestras Tiendas</li>
          <li>Facturación electrónica</li>
        </ul>
        <ul>
          <li>Contactanos</li>
          <li>
            Escríbenos
            <a href="">fritz.guzman.santiago@gmail.com</a>
          </li>
          <li>
            Teléfonos
            <a href="">whatsapp: +51981659039</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
