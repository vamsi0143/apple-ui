import React from "react";
import ProductCard from "./ProductCard";
import iphone14pro from "../assets/iphone14pro.png";
import iphone14 from "../assets/iphone14.png";
import iphone13 from "../assets/iphone13.png";
import iphoneSe from "../assets/iphoneSE.png";
import "./ProductPicker.css";

const PRODUCTS = [
  {
    image: iphone14pro,
    colors: ["#5b5148", "#8f8a81", "#3b3c3e", "#8d949e"],
    name: "iPhone 14 Pro",
    isNew: true,
    tagline: "The ultimate iPhone.",
    price: "From $999",
  },
  {
    image: iphone14,
    colors: ["#3b3c3e", "#e8dfc8", "#f0dee4", "#c8dae8", "#b91c2b"],
    name: "iPhone 14",
    isNew: true,
    tagline: "A total powerhouse.",
    price: "From $799*",
  },
  {
    image: iphone13,
    colors: ["#1c1c1e", "#3f5c6c", "#e8dfc8", "#b91c2b"],
    name: "iPhone 13",
    tagline: "As amazing as ever.",
    price: "From $599*",
  },
  {
    image: iphoneSe,
    colors: ["#1c1c1e", "#b91c2b"],
    name: "iPhone SE",
    badge: "SE",
    tagline: "Serious power. Serious value.",
    price: "From $429",
  },
];

export default function ProductPicker() {
  return (
    <section className="product-picker">
      <div className="section-inner">
        <h2 className="product-picker__title">Which iPhone is right for you?</h2>
        <div className="product-picker__grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
