import React from "react";
import "./TrustIcons.css";

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M6 14l14-7 14 7-14 7-14-7z" />
        <path d="M6 14v12l14 7 14-7V14" />
      </svg>
    ),
    title: "Fast, free delivery",
    copy: "Or pick up available items at an Apple Store.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="20" cy="20" r="15" />
        <path d="M20 12v16M16 16h6.5a2.5 2.5 0 010 5H17" />
      </svg>
    ),
    title: "Pay monthly at 0% APR",
    copy: "You can pay over time when you choose to check out with Apple Card Monthly Installments.**",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="14" cy="15" r="4.5" />
        <circle cx="26" cy="15" r="4.5" />
        <path d="M6 30c0-4.4 3.6-7 8-7s8 2.6 8 7M20 30c0-4.4 3.6-7 8-7s6 2.6 6 7" />
      </svg>
    ),
    title: "Get help buying",
    copy: "Have a question? Call a Specialist or chat online. Or call 1‑800‑MY‑APPLE.",
  },
];

export default function TrustIcons() {
  return (
    <div className="trust-icons">
      {ITEMS.map((item) => (
        <div key={item.title} className="trust-icons__item">
          <span className="trust-icons__icon">{item.icon}</span>
          <h4 className="trust-icons__title">{item.title}</h4>
          <p className="trust-icons__copy">{item.copy}</p>
          <a href="#" className="link-arrow">
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
}
