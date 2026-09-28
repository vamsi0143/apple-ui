import React from "react";
import ServiceCard from "./ServiceCard";
import tvPlusShows from "../assets/tvplus-shows.png";
import musicMixes from "../assets/music-mixes.png";
import newsPlusCovers from "../assets/newsplus-covers.png";
import arcadeIcon from "../assets/arcade-icon.png";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  return (
    <section className="services-grid">
      <div className="section-inner services-grid__inner">
        <ServiceCard
          dark
          logo=" tv+"
          copy="Get 3 months of Apple TV+ free when you buy an iPhone.10"
          tryLabel="Try it free"
          image={tvPlusShows}
          alt="Posters for Apple TV+ shows including Ted Lasso"
        />
        <ServiceCard
          logo=" Music"
          copy="Over 100 million songs. Start listening for free today."
          tryLabel="Try it free11"
          image={musicMixes}
          alt="Apple Music playlist artwork tiles"
        />
        <ServiceCard
          logo=" News+"
          copy="Get 3 months of Apple News+ free when you buy an iPhone.12"
          tryLabel="Learn more"
          image={newsPlusCovers}
          alt="Magazine covers available in Apple News+"
        />
        <ServiceCard
          logo=" Arcade"
          copy="Get 3 months of Apple Arcade free when you buy an iPhone."
          tryLabel="Try it free"
          image={arcadeIcon}
          alt="Apple Arcade game controller icon"
        />
      </div>
    </section>
  );
}
