
import React from "react";
import TrustIcons from "./TrustIcons";
import FeatureTile from "./FeatureTile";
import ios16Lineup from "../assets/ios16-lineup.png";
import "./WhatMakesIphone.css";

export default function WhatMakesIphone() {
  return (
    <section className="what-makes">

      <div className="section-inner">

        {/* Trust Icons */}
        <TrustIcons />

        {/* Section Title */}
        <h2 className="what-makes__title">
          What makes an iPhone an iPhone?
        </h2>

        {/* Full Width Feature */}
        <div className="what-makes__feature">

          <FeatureTile
            eyebrow="iOS 16"
            title="Personal is powerful."
            image={ios16Lineup}
            alt="Five iPhones showing different iOS 16 lock screens"
          />

        </div>

      </div>

    </section>
  );
}

