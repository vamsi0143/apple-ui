import React from "react";
import "./FeatureTile.css";

export default function FeatureTile({ eyebrow, title, copy, image, alt }) {
  return (
    <div className="feature-tile">
      <div className="feature-tile__text">
        {eyebrow && <p className="feature-tile__eyebrow">{eyebrow}</p>}
        <h3 className="feature-tile__title">{title}</h3>
        {copy && <p className="feature-tile__copy">{copy}</p>}
        <a href="#" className="link-arrow">
          Learn more
        </a>
      </div>
      <img src={image} alt={alt} className="feature-tile__image" />
    </div>
  );
}
