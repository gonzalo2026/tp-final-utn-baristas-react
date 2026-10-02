import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container-hero">
        <div className="container hero">
          <div className="customer-support">
            <i className="fa-solid fa-headset"></i>
            <div className="content-customer-support">
              <span className="text">Soporte al cliente</span>
              <span className="number">0800-888-8100</span>
            </div>
          </div>

          <div className="container-logo">
            <i className="fa-solid fa-mug-hot"></i>
            <p className="logo">
              <Link to="/">Baristas</Link>
            </p>
          </div>

          <div className="container-user">
            <i className="fa-solid fa-user" tabIndex={0} role="button" aria-label="Mi cuenta"></i>
            <i className="fa-solid fa-basket-shopping" tabIndex={0} role="button" aria-label="Ver carrito"></i>
            <div className="content-shopping-cart" tabIndex={0} role="button" aria-label="Ver carrito de compras">
              <span className="text">Carrito</span>
              <span className="number">(0)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-navbar">
        <nav className="navbar container">
          <i
            className="fa-solid fa-bars"
            tabIndex={0}
            role="button"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          ></i>
          <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Inicio</Link>
            </li>
            <li>
              <Link to="/#mejores-categorias" onClick={closeMenu}>Mejores categorias</Link>
            </li>
            <li>
              <Link to="/#mejores-productos" onClick={closeMenu}>Mejores productos</Link>
            </li>
            <li>
              <Link to="/#especiales" onClick={closeMenu}>Especiales</Link>
            </li>
            <li>
              <Link to="/#ultimos-comentarios" onClick={closeMenu}>Ultimos comentarios</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
