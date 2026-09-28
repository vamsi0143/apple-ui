import React from "react";
import tradeInPhones from "../assets/tradein-phones.png";
import CarrierAppleCard from "./CarrierAppleCard";
import "./SavingsSection.css";

export default function SavingsSection() {
  return (
    <section id="save" className="savings">
      <div className="section-inner">
        <h2 className="savings__title">Ways to save on iPhone</h2>

        <div className="savings__card">
          <h3 className="savings__card-title">
            Trade in your current phone
            <br />
            for credit toward a new one.
          </h3>
          <p className="savings__card-copy">
            Get $200-$600 in credit when you trade in iPhone 11 or higher and
            upgrade to iPhone 14 or iPhone 14 Pro.<sup>1</sup>
          </p>
          <a href="#" className="link-arrow">
            Learn more
          </a>
          <img
            src={tradeInPhones}
            alt="A hand holding an iPhone next to a new iPhone in its box"
            className="savings__image"
          />
        </div>

        <CarrierAppleCard />
      </div>
    </section>
  );
}
