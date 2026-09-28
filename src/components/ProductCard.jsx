import React from "react";
import "./ProductCard.css";

export default function ProductCard({
  image,
  colors,
  name,
  badge,
  tagline,
  price,
  isNew,
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card__image" />

      <div className="product-card__dots">
        {colors.map((c) => (
          <span
            key={c}
            className="product-card__dot"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>

      {isNew && <p className="product-card__badge">New</p>}

      <h3 className="product-card__name">
        {name}
        {badge && <sup className="product-card__badge-sup">{badge}</sup>}
      </h3>
      <p className="product-card__tagline">{tagline}</p>
      <p className="product-card__price">{price}</p>

      <button className="btn-pill btn-pill--primary product-card__buy">
        Buy
      </button>
      <a href="#" className="link-arrow product-card__learn">
        Learn more
      </a>
    </div>
  );
}
