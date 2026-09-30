
import React from "react";
import LegalFootnotes from "./LegalFootnotes";
import "./SiteFooter.css";

const COLUMNS = [
  {
    heading: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    heading: "Account",
    links: ["Account Overview", "Order History", "Shopping Bag"],
  },
  {
    heading: "Entertainment",
    links: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    heading: "Apple Wallet",
    links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    heading: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    heading: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    heading: "For Education",
    links: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    heading: "For Healthcare",
    links: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  {
    heading: "For Government",
    links: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    heading: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Supplier Responsibility",
    ],
  },
  {
    heading: "About",
    links: [
      "Project Information",
      "Design",
      "Development",
      "Contact",
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner">
        <LegalFootnotes />

        <div className="site-footer__breadcrumb">
          <span className="site-footer__apple-mark"></span>
          <span className="site-footer__crumb">iPhone UI Recreation</span>
        </div>

        <div className="site-footer__grid">
          {COLUMNS.map((col) => (
            <div key={col.heading} className="site-footer__col">
              <h4 className="site-footer__heading">{col.heading}</h4>

              <ul className="site-footer__list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#!" className="site-footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="site-footer__more">
          This website is a frontend UI recreation created for educational
          and portfolio purposes.
        </p>

        <div className="site-footer__disclaimer">
          <strong>Apple UI Recreation — Educational Project</strong>
          <span>
            This project is an independent frontend recreation inspired by
            Apple product interface designs. It is not affiliated with,
            sponsored by, endorsed by, or officially connected with Apple Inc.
          </span>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Apple UI Recreation. Educational project only.</p>

          <div className="site-footer__bottom-links">
            <a href="#!">Project Info</a>
            <a href="#!">Privacy</a>
            <a href="#!">Terms</a>
            <a href="#!">Disclaimer</a>
            <a href="#!">Site Map</a>
          </div>

          <p>Educational Project</p>
        </div>
      </div>
    </footer>
  );
}

