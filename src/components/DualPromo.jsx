
import React from "react";
import iphone14ProLineup from "../assets/iphone14pro-lineup.png";
import iphoneSeLineup from "../assets/iphoneSE-lineup.png";
import "./DualPromo.css";

export default function DualPromo() {
  return (
    <div className="dual-promo">

      {/* =========================================
          SECTION 1 - iPHONE 14 PRO
      ========================================== */}

      <section className="dual-promo-section dual-promo-section--dark">
        <div className="dual-promo__card dual-promo__card--dark">

          {/* LEFT CONTENT */}
          <div className="dual-promo__content">

            <p className="dual-promo__kicker">
              iPhone 14 Pro
            </p>

            <h2 className="dual-promo__title">
              Pro. Beyond.
            </h2>

            <p className="dual-promo__price">
              From $999 or $41.62/mo. for 24 mo. before trade-in
              <sup>2</sup>
            </p>

            <div className="dual-promo__actions">

              <button className="btn-pill btn-pill--primary">
                Buy
              </button>

              <a
                href="#"
                className="link-arrow link-arrow--light"
              >
                Learn more
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="dual-promo__visual">

            <img
              src={iphone14ProLineup}
              alt="iPhone 14 Pro lineup of colors"
              className="dual-promo__image"
            />

          </div>

        </div>
      </section>


      {/* =========================================
          SECTION 2 - iPHONE SE
      ========================================== */}

      <section className="dual-promo-section dual-promo-section--light">
        <div className="dual-promo__card dual-promo__card--light">

          {/* LEFT CONTENT */}
          <div className="dual-promo__content">

            <p className="dual-promo__kicker">
              iPhone SE
            </p>

            <h2 className="dual-promo__title">

              Love the{" "}
              <span className="dual-promo__title--blue">
                power.
              </span>

              <br />

              Love the{" "}
              <span className="dual-promo__title--blue">
                price.
              </span>

            </h2>

            <p className="dual-promo__price">
              From $429 or $17.87/mo. for 24 mo. before trade-in
              <sup>2</sup>
            </p>

            <div className="dual-promo__actions">

              <button className="btn-pill btn-pill--primary">
                Buy
              </button>

              <a
                href="#"
                className="link-arrow"
              >
                Learn more
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="dual-promo__visual">

            <img
              src={iphoneSeLineup}
              alt="iPhone SE lineup of colors"
              className="dual-promo__image"
            />

          </div>

        </div>
      </section>

    </div>
  );
}

