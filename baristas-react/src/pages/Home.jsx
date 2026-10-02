import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Gallery from '../components/Gallery.jsx';
import '../styles/Home.css';

const topProducts = [
  { title: 'Cafe Irlandes', img: '/img/cafe-irish.jpg', alt: 'Cafe Irlandes en taza de vidrio', discount: '-19%', price: '$8000', oldPrice: '$9.900', stars: 4 },
  { title: 'Cafe Inglés', img: '/img/cafe-ingles.jpg', alt: 'Cafe Ingles servido en taza blanca', discount: '-15%', price: '$17000', oldPrice: '$20000', stars: 3 },
  { title: 'Cafe Australiano', img: '/img/cafe-australiano.jpg', alt: 'Cafe Australiano en vaso alto', price: '$18000', stars: 5 },
  { title: 'Cafe Helado', img: '/img/cafe-helado.jpg', alt: 'Cafe Helado con hielo y crema', price: '$15000', stars: 4 },
];

const specialProducts = [
  { title: 'Cafe Irlandes', img: '/img/cafe-irish.jpg', alt: 'Cafe Irlandes con descuento', discount: '-19%', price: '$8000', oldPrice: '$9900', stars: 4 },
  { title: 'Cafe Inglés', img: '/img/cafe-ingles.jpg', alt: 'Cafe Ingles con descuento', discount: '-15%', price: '$17000', oldPrice: '$20000', stars: 3 },
  { title: 'Moka latte', img: '/img/moka latte.jpg', alt: 'Moka Latte', discount: '-10%', price: '$8000', oldPrice: '$9000', stars: 5 },
  { title: 'Frappuccino', img: '/img/frapucchino.jpg', alt: 'Frappuccino helado con crema batida', price: '$12000', stars: 5 },
];

const reviews = [
  { name: 'Belen', date: '29 marzo 2026', img: '/img/belen-1.jpg', text: 'Muy bueno! Me encantó el café y el lugar y la atención' },
  { name: 'Vanesa', date: '15 abril 2026', img: '/img/vanesa-2.jpg', text: 'Todo implacable y atención súper amable. Me encantó el lugar.' },
  { name: 'Pablo', date: '10 mayo 2026', img: '/img/pablo-3.jpg', text: 'Excelente café y atención.' },
];

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Esperamos un tick a que el DOM de la página esté montado
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 0);

    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <section className="banner" id="inicio">
        <div className="content-banner">
          <p>Café Delicioso</p>
          <h1>
            Baristas <br />100% Natural Café Fresco
          </h1>
          <a href="#mejores-productos">Comprar ahora</a>
        </div>
      </section>

      <div className="main-content">
        <section className="container container-features">
          <div className="card-feature">
            <i className="fa-solid fa-truck-fast"></i>
            <div className="feature-content">
              <span>Envío a domicilio</span>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-wallet"></i>
            <div className="feature-content">
              <span>Reembolso de la compra</span>
              <p>100% garantía de devolución de dinero</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-gift"></i>
            <div className="feature-content">
              <span>Tarjeta regalo especial</span>
              <p>Ofrece bonos especiales con regalo</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-headset"></i>
            <div className="feature-content">
              <span>Servicio al cliente</span>
              <p>LLáme 0800-888-8100</p>
            </div>
          </div>
        </section>

        <section className="container top-categories" id="mejores-categorias">
          <h2 className="heading-1">Mejores Categorías</h2>
          <div className="container-categories">
            <div className="card-category category-moca">
              <p>Café moca</p>
            </div>
            <div className="card-category category-expreso">
              <p>Expreso Americano</p>
            </div>
            <div className="card-category category-capuchino">
              <p>Capuchino</p>
            </div>
          </div>
        </section>

        <section className="container top-products" id="mejores-productos">
          <h2 className="heading-1">Mejores Productos</h2>
          <div className="container-products">
            {topProducts.map((product) => (
              <Card key={product.title} {...product} />
            ))}
          </div>
        </section>

        <Gallery />

        <section className="container specials" id="especiales">
          <h2 className="heading-1">Especiales</h2>
          <div className="container-products">
            {specialProducts.map((product) => (
              <Card key={product.title} {...product} />
            ))}
          </div>
        </section>

        <section className="container blogs" id="ultimos-comentarios">
          <h2 className="heading-1">Últimos comentarios</h2>
          <div className="container-blogs">
            {reviews.map((review) => (
              <div className="card-blog" key={review.name}>
                <div className="container-img">
                  <img src={review.img} alt={`Foto de perfil de ${review.name}, cliente`} />
                </div>
                <div className="content-blog">
                  <h3>{review.name}</h3>
                  <span>{review.date}</span>
                  <p>&quot;{review.text}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
