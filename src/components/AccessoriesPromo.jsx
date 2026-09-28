import React from "react";
import airtagKeys from "../assets/airtag-keys.png";
import airpodsFamily from "../assets/airpods-family.png";
import "./AccessoriesPromo.css";

export default function AccessoriesPromo() {
  return (
    <section className="accessories-promo">
      <div className="accessories-promo__airtag">
        <img
          src={airtagKeys}
          alt="AirTags attached to keys and a backpack"
          className="accessories-promo__airtag-image"
        />
        <div className="accessories-promo__airtag-text">
          <h3 className="accessories-promo__title">AirTag</h3>
          <p className="accessories-promo__copy">
            Attach one to your keys. Put another in your backpack. If they're
            misplaced, just use the Find My app.
          </p>
          <div className="accessories-promo__links">
            <a href="#" className="link-arrow">
              Buy
            </a>
            <a href="#" className="link-arrow">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="accessories-promo__airpods">
        <h2 className="accessories-promo__title accessories-promo__title--center">
          Magic runs
          <br />
          in the family.
        </h2>
        <img
          src={airpodsFamily}
          alt="AirPods Max, AirPods Pro, and AirPods lineup"
          className="accessories-promo__airpods-image"
        />
      </div>
    </section>
  );
}
