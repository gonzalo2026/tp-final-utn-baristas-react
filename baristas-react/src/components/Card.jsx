import '../styles/Card.css';

function Card({ img, alt, title, price, oldPrice, discount, stars = 5 }) {
  return (
    <div className="card-product">
      <div className="container-img">
        <img src={img} alt={alt} />
        {discount && <span className="discount">{discount}</span>}
        <div className="button-group">
          <span tabIndex={0} role="button" aria-label="Vista rápida">
            <i className="fa-regular fa-eye"></i>
          </span>
          <span tabIndex={0} role="button" aria-label="Agregar a favoritos">
            <i className="fa-regular fa-heart"></i>
          </span>
          <span tabIndex={0} role="button" aria-label="Comparar producto">
            <i className="fa-solid fa-code-compare"></i>
          </span>
        </div>
      </div>
      <div className="content-card-product">
        <div className="stars">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={i < stars ? 'fa-solid fa-star' : 'fa-regular fa-star'}
            ></i>
          ))}
        </div>
        <h3>{title}</h3>
        <span className="add-cart" tabIndex={0} role="button" aria-label={`Agregar ${title} al carrito`}>
          <i className="fa-solid fa-basket-shopping"></i>
        </span>
        <p className="price">
          {price} {oldPrice && <span>{oldPrice}</span>}
        </p>
      </div>
    </div>
  );
}

export default Card;
