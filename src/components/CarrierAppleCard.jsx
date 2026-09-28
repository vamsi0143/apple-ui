import React from "react";
import appleCardHands from "../assets/apple-card-hands.png";
import att from "../assets/att.png";
import tMobile from "../assets/t-mobile.png";
import verizon from "../assets/verizon.png";
import "./CarrierAppleCard.css";

const CARRIERS = [
  {
    name: "AT&T",
    image: att,
    credit: "Get up to $800 credit after trade-in",
  },
  {
    name: "T-Mobile",
    image: tMobile,
    credit: "Get up to $400 credit after trade-in",
  },
  {
    name: "Verizon",
    image: verizon,
    credit: "Get up to $800 credit after trade-in",
  },
];

export default function CarrierAppleCard() {
  return (
    <div className="carrier-apple">
      <div className="carrier-apple__card">
        <h3 className="carrier-apple__title">
          Save up to $800 with select carrier deals at Apple.
          <sup>8</sup>
        </h3>

        <p className="carrier-apple__copy">
          Get the carrier deals you love and save on a new iPhone when you
          trade in and purchase right here at Apple.
        </p>

        <a href="#" className="link-arrow">
          Find your deal
        </a>

        <div className="carrier-apple__logos">
          {CARRIERS.map((c) => (
            <div key={c.name} className="carrier-apple__logo-item">
              <img
                src={c.image}
                alt={c.name}
                className="carrier-apple__carrier-image"
              />

              <p className="carrier-apple__logo-credit">
                {c.credit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="carrier-apple__card">
        <h3 className="carrier-apple__title">
          Get 3% Daily Cash back with Apple Card.
        </h3>

        <p className="carrier-apple__copy">
          And pay for your new iPhone over 24 months, interest-free when you
          choose to check out with Apple Card Monthly Installments.**
        </p>

        <a href="#" className="link-arrow">
          Learn more
        </a>

        <img
          src={appleCardHands}
          alt="Hands holding a phone with Apple Card and the physical Apple Card"
          className="carrier-apple__image"
        />
      </div>
    </div>
  );
}