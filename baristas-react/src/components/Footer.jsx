import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <div className="menu-footer">
          <div className="contact-info">
            <p className="title-footer">Información de Contacto</p>
            <ul>
              <li>Dirección: av. siempre viva 3240, CABA</li>
              <li>Teléfono: 0800-888-8100</li>
              <li>Email: baristas@baristas.com</li>
              <li>Lunes a sabados de 08:00 21:00</li>
            </ul>
          </div>

          <div className="information">
            <p className="title-footer">Información</p>
            <ul>
              <li><a href="#">Acerca de Nosotros</a></li>
              <li><a href="#">Politicas de Privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><Link to="/contacto">Contactános</Link></li>
            </ul>
          </div>

          <div className="my-account">
            <p className="title-footer">Mi cuenta</p>
            <ul>
              <li><a href="#">Mi cuenta</a></li>
              <li><a href="#">Historial de ordenes</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>Company Baristas. Reservados todos los derechos &copy; 2026</p>
          <img src="/img/payment.png" alt="Métodos de pago aceptados" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
