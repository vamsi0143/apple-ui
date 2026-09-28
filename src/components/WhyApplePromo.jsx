import React from "react";
import whyApplePhones from "../assets/why-apple-phones.png";
import magsafeCases from "../assets/magsafe-cases.png";
import "./WhyApplePromo.css";

export default function WhyApplePromo() {
  return (
    <section className="why-apple">
      <div className="why-apple__banner">
        <img
          src={whyApplePhones}
          alt="Several iPhones laid out showing colors and cameras"
          className="why-apple__image"
        />
        {/* <div className="why-apple__text">
          <h2 className="why-apple__title">
            Why Apple is the best
            <br />
            place to buy iPhone.
          </h2>
          <p className="why-apple__copy">
            You can choose a payment option that works for you, pay less with
            a trade‑in, connect your new iPhone to your carrier, and get set
            up quickly. You can also chat with a Specialist anytime.
          </p>
          <a href="#" className="link-arrow">
            Learn more
          </a>
        </div> */}
      </div>

      <div className="section-inner">
        <h2 className="why-apple__accessories-title">Featured accessories</h2>
        <div className="why-apple__accessory-card">
          <div className="why-apple__accessory-text">
            <h3 className="why-apple__accessory-name">MagSafe</h3>
            <p className="why-apple__copy">
              Snap on a magnetic case, wallet, or both. And get faster
              wireless charging.
            </p>
            <a href="#" className="link-arrow">
              Shop MagSafe accessories
            </a>
          </div>
          <img
            src={magsafeCases}
            alt="Three iPhones with MagSafe cases and wallet attached"
            className="why-apple__accessory-image"
          />
        </div>
      </div>
    </section>
  );
}
