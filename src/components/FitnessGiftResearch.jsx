import React from "react";
import fitnessVideo from "../assets/fitness-workout.png";
import giftCardApple from "../assets/gift-card-apple.png";
import researchApp from "../assets/research-app-phones.png";
import "./FitnessGiftResearch.css";

export default function FitnessGiftResearch() {
  return (
    <section className="fgr">
      <div className="section-inner fgr__row">
        <div className="fgr__card">
          <p className="fgr__logo"> Fitness+</p>
          <p className="fgr__copy">Fitness for everyone. Now all you need is iPhone.</p>
          <div className="fgr__links">
            <a href="#" className="link-arrow">Learn more</a>
            <a href="#" className="link-arrow">Try it free¹⁴</a>
          </div>
          <img src={fitnessVideo} alt="Apple Fitness+ workout playing on iPhone" className="fgr__image" />
        </div>

        <div className="fgr__card">
          <p className="fgr__logo">Gift Card</p>
          <p className="fgr__copy">For everything and everyone.</p>
          <div className="fgr__links">
            <a href="#" className="link-arrow">Learn more</a>
            <a href="#" className="link-arrow">Buy</a>
          </div>
          <img src={giftCardApple} alt="Colorful Apple Gift Cards" className="fgr__image" />
        </div>
      </div>

      <div className="section-inner">
        <div className="fgr__research">
          <div className="fgr__research-text">
            <h3 className="fgr__research-title">
              Introducing the
              <br />
              Apple Research app.
            </h3>
            <p className="fgr__copy">The future of health research is you.</p>
            <a href="#" className="link-arrow">Learn more</a>
          </div>
          <img
            src={researchApp}
            alt="Three iPhones showing the Apple Research app studies screens"
            className="fgr__research-image"
          />
        </div>
      </div>
    </section>
  );
}
