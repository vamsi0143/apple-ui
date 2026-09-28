import React from "react";
import switchingPhones from "../assets/switching-phones.png";
import appleOneIcons from "../assets/apple-one-icons.png";
import "./SwitchAndAppleOne.css";

export default function SwitchAndAppleOne() {
  return (
    <section className="switch-section">
      <div className="section-inner">

        {/* Switching to iPhone */}
        <div className="switch-section__intro">
          <div className="switch-section__intro-text">
            <h2 className="switch-section__title">
              Switching to iPhone
              <br />
              is super simple.
            </h2>

            <a href="#" className="link-arrow">
              Learn more
            </a>
          </div>

          <img
            src={switchingPhones}
            alt="Several phones showing the switch to iPhone"
            className="switch-section__image"
          />
        </div>

        {/* Get more out of your iPhone */}
        <h2 className="switch-section__title switch-section__title--center">
          Get more out of your iPhone.
        </h2>

        {/* Apple One */}
        <div className="switch-section__apple-one">

          {/* Single Apple One image */}
          <div className="switch-section__icons">
            <img
              src={appleOneIcons}
              alt="Apple One services"
            />
          </div>

          {/* Apple One text */}
          <div className="switch-section__one-text">
            <p className="switch-section__one-logo">
              Apple One
            </p>

            <p className="switch-section__one-copy">
              Bundle up to six Apple services. And enjoy more for less.
            </p>

            <div className="switch-section__links">
              <a href="#" className="link-arrow">
                Try it free⁹
              </a>

              <a href="#" className="link-arrow">
                Learn more
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}