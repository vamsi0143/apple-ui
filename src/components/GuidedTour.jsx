import React from "react";
import guidedTourBg from "../assets/guided-tour-bg.png";
import "./GuidedTour.css";

export default function GuidedTour() {
  return (
    <section className="guided-tour">
      <div
        className="guided-tour__card"
        style={{
          backgroundImage: `url(${guidedTourBg})`,
        }}
      >
        <div className="guided-tour__overlay"></div>

        <div className="guided-tour__text">
          <p className="guided-tour__kicker">
            A Guided Tour of
          </p>

          <h2 className="guided-tour__title">
            iPhone 14 &amp;
            <br />
            iPhone 14 Pro
          </h2>

          <button
            type="button"
            className="btn-pill btn-pill--light"
          >
            Watch the film
          </button>
        </div>
      </div>
    </section>
  );
}