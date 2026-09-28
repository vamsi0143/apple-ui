
import React, { useState } from "react";
import "./Navbar.css";

// =========================
// IMPORT IMAGES
// =========================

import appleLogo from "../assets/apple-logo.png";
import searchIcon from "../assets/search.png";
import bagIcon from "../assets/bag.png";

import iphone14Pro from "../assets/iphone-14pro.png";
import iphone14 from "../assets/iphone-14.png";
import iphone13 from "../assets/iphone-13.png";
import iphoneSE from "../assets/iphone-se.png";
import iphone12 from "../assets/iphone-12.png";
import compare from "../assets/compare.png";
import airpods from "../assets/airpods.png";
import airtag from "../assets/airtag.png";
import accessories from "../assets/accessories.png";
import appleCard from "../assets/apple-card.png";
import ios16 from "../assets/ios16.png";
import shopIphone from "../assets/shop-iphone.png";

// =========================
// TOP APPLE NAVIGATION
// =========================

const TOP_NAV_ITEMS = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

// =========================
// IPHONE SECONDARY NAVIGATION
// =========================

const IPHONE_NAV_ITEMS = [
  {
    name: "iPhone 14 Pro",
    icon: iphone14Pro,
    badge: "New",
  },
  {
    name: "iPhone 14",
    icon: iphone14,
    badge: "New",
  },
  {
    name: "iPhone 13",
    icon: iphone13,
  },
  {
    name: "iPhone SE",
    icon: iphoneSE,
  },
  {
    name: "iPhone 12",
    icon: iphone12,
  },
  {
    name: "Compare",
    icon: compare,
  },
  {
    name: "AirPods",
    icon: airpods,
  },
  {
    name: "AirTag",
    icon: airtag,
  },
  {
    name: "Accessories",
    icon: accessories,
  },
  {
    name: "Apple Card",
    icon: appleCard,
  },
  {
    name: "iOS 16",
    icon: ios16,
  },
  {
    name: "Shop iPhone",
    icon: shopIphone,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      {/* =========================
          TOP APPLE NAVIGATION
      ========================== */}

      <div className="navbar__top">
        <div className="navbar__top-inner">

          {/* Apple Logo */}
          <a href="#" className="navbar__apple-logo">
            <img
              src={appleLogo}
              alt="Apple"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar__main-links">
            {TOP_NAV_ITEMS.map((item) => (
              <a
                href="#"
                key={item}
                className="navbar__main-link"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search */}
          <button
            className="navbar__icon-button"
            aria-label="Search"
          >
            <img
              src={searchIcon}
              alt=""
            />
          </button>

          {/* Bag */}
          <button
            className="navbar__icon-button"
            aria-label="Shopping Bag"
          >
            <img
              src={bagIcon}
              alt=""
            />
          </button>

          {/* Mobile Menu */}
          <button
            className={`navbar__toggle ${open ? "navbar__toggle--open" : ""
              } `}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* =========================
          MOBILE TOP MENU
      ========================== */}


      {/* =========================
          IPHONE SECONDARY NAV
      ========================== */}

      <div className="iphone-nav">
        <div className="iphone-nav__inner">

          {IPHONE_NAV_ITEMS.map((item) => (
            <a
              href="#"
              key={item.name}
              className="iphone-nav__item"
            >

              {/* Icon */}
              <div className="iphone-nav__icon">
                <img
                  src={item.icon}
                  alt={item.name}
                />
              </div>

              {/* Name */}
              <span className="iphone-nav__name">
                {item.name}
              </span>

              {/* New Badge */}
              {item.badge && (
                <span className="iphone-nav__badge">
                  {item.badge}
                </span>
              )}

            </a>
          ))}

        </div>
      </div>

    </header>
  );
}

