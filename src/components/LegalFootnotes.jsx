import React from "react";
import "./LegalFootnotes.css";

// Paraphrased, shortened placeholder disclaimers standing in for the dense
// legal fine print in the Figma file (carrier deals, Apple Card, trade-in,
// display size, battery, cellular, service terms, etc). Swap in the real
// copy from the design/legal team before shipping.
const FOOTNOTES = [
  "Carrier deal terms, monthly credit amounts, and eligibility vary by carrier, plan, and traded-in device. Financing requires credit approval and an eligible installment agreement; taxes and shipping are not included.",
  "Trade-in values depend on the condition, model, and configuration of the device submitted and may be applied as credit or an Apple Gift Card. Not all devices qualify.",
  "Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. through Apple Card; other financing options carry variable APRs based on creditworthiness.",
  "Display size is measured diagonally; actual viewable area is slightly smaller due to the rounded corners of the screen.",
  "Some safety features require a cellular or Wi-Fi calling connection and are not available in every region.",
  "Battery life varies by use and configuration; battery capacity naturally decreases with time and charge cycles.",
  "5G availability and speeds depend on carrier network coverage and vary by market.",
  "Free-trial and bundled-subscription offers (Apple TV+, Music, News+, Arcade, Fitness+, Apple One) are limited to one per Apple ID or family, require a new subscriber, and auto-renew unless cancelled.",
];

export default function LegalFootnotes() {
  return (
    <div className="legal-footnotes">
      {FOOTNOTES.map((text, i) => (
        <p key={i} className="legal-footnotes__item">
          <sup>{i + 1}</sup> {text}
        </p>
      ))}
    </div>
  );
}
