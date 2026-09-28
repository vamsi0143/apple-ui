import React from "react";
import "./ServiceCard.css";

export default function ServiceCard({
  dark,
  logo,
  copy,
  tryLabel,
  image,
  alt,
}) {
  return (
    <div className={`service-card ${dark ? "service-card--dark" : ""}`}>
      <p className="service-card__logo">{logo}</p>
      <p className="service-card__copy">{copy}</p>
      <div className="service-card__links">
        <a href="#" className="link-arrow">
          {tryLabel}
        </a>
        <a href="#" className="link-arrow">
          Learn more
        </a>
      </div>
      {image && <img src={image} alt={alt} className="service-card__image" />}
    </div>
  );
}
