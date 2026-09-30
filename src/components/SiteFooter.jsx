import React from "react";
import LegalFootnotes from "./LegalFootnotes";
import "./SiteFooter.css";

const COLUMNS = [
  {
    heading: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    heading: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    heading: "Entertainment",
    links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
  },
  {
    heading: "Apple Wallet",
    links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    heading: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"],
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
    links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"],
  },
  {
    heading: "For Government",
    links: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    heading: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"],
  },
  {
    heading: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner">
        <LegalFootnotes />

        <div className="site-footer__breadcrumb">
          <span className="site-footer__apple-mark"> </span>
          <span className="site-footer__apple-mark"> </span>
          <span className="site-footer__apple-mark"> </span>
          <span className="site-footer__crumb">iPhone</span>
        </div>

        <div className="site-footer__grid">
          {COLUMNS.map((col) => (
            <div key={col.heading} className="site-footer__col">
              <h4 className="site-footer__heading">{col.heading}</h4>
              <ul className="site-footer__list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="site-footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="site-footer__more">
          More ways to shop:{" "}
          <a href="#" className="link-arrow">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="link-arrow">
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>

        <div className="site-footer__bottom">
          <p>Apple UI Recreation © 2026 — Educational Project
            Not affiliated with Apple Inc.</p>
          <div className="site-footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
}
