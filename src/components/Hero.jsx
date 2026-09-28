import React from "react";
import iphone14Lineup from "../assets/iphone14-lineup.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="section-inner hero__inner">
        <p className="hero__eyebrow">New</p>
        <h1 className="hero__title">
          iPhone 14
          <br />
          Two great sizes.
          <br />
          Now with a splash of yellow.
        </h1>
        <p className="hero__subtitle">
          From $799 or $33.29/mo. for 24 mo. before trade‑in
          <sup>2</sup>
        </p>
        <div className="hero__actions">
          <button className="btn-pill btn-pill--primary">Buy</button>
          <a href="#" className="link-arrow">
            Learn more
          </a>
        </div>
      </div>

      <div className="hero__image-wrap">
        <img
          src={iphone14Lineup}
          alt="iPhone 14 lineup in six colors fanned out"
          className="hero__image"
        />
      </div>
    </section>
  );
}
