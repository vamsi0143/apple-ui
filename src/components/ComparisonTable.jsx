import React from "react";
import "./ComparisonTable.css";

const COLUMNS = ["iPhone 14 Pro", "iPhone 14", "iPhone 13", "iPhone SE"];

const ROWS = [
  {
    label: "Display",
    values: [
      ["6.7\" or 6.1\"", "Super Retina XDR display³", "ProMotion technology", "Always-On display"],
      ["6.7\" or 6.1\"", "Super Retina XDR display³"],
      ["6.1\" or 5.4\"", "Super Retina XDR display³"],
      ["4.7\"", "Retina HD display"],
    ],
  },
  {
    label: "Dynamic Island",
    values: [
      ["A new way to interact with iPhone"],
      [null],
      [null],
      [null],
    ],
  },
  {
    label: "Action mode",
    values: [
      ["Smooths out shaky handheld videos"],
      ["Smooths out shaky handheld videos"],
      [null],
      [null],
    ],
  },
  {
    label: "Battery",
    values: [
      ["Up to 29 hours video playback⁶"],
      ["Up to 26 hours video playback⁶"],
      ["Up to 19 hours video playback⁶"],
      ["Up to 15 hours video playback⁶"],
    ],
  },
  {
    label: "Chip",
    values: [
      ["A16 Bionic chip"],
      ["A15 Bionic chip", "with 5‑core GPU"],
      ["A15 Bionic chip", "with 4‑core GPU"],
      ["A15 Bionic chip", "with 4‑core GPU"],
    ],
  },
  {
    label: "Face ID / Touch ID",
    values: [["Face ID"], ["Face ID"], ["Face ID"], ["Touch ID"]],
  },
  {
    label: "Cellular",
    values: [
      ["Superfast 5G cellular⁷"],
      ["Superfast 5G cellular⁷"],
      ["Superfast 5G cellular⁷"],
      ["5G cellular⁷"],
    ],
  },
  {
    label: "Safety",
    values: [
      ["Emergency SOS via satellite⁴", "Emergency SOS", "Crash Detection⁵"],
      ["Emergency SOS via satellite⁴", "Emergency SOS", "Crash Detection⁵"],
      ["Emergency SOS"],
      ["Emergency SOS"],
    ],
  },
  {
    label: "Camera system",
    values: [
      ["Pro camera system", "48MP Main | Ultra Wide | Telephoto", "Photonic Engine for incredible detail and color", "Autofocus on TrueDepth front camera"],
      ["Advanced dual‑camera system", "12MP Main | Ultra Wide", "Photonic Engine for incredible detail and color", "Autofocus on TrueDepth front camera"],
      ["Dual‑camera system", "12MP Main | Ultra Wide", "TrueDepth front camera"],
      ["Advanced camera system", "12MP Main", "Front camera"],
    ],
  },
];

export default function ComparisonTable() {
  return (
    <section className="compare">
      <div className="section-inner compare__scroll">
        <table className="compare__table">
          <thead>
            <tr>
              <th className="compare__row-label" />
              {COLUMNS.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="compare__row-label">
                  {row.label}
                </th>
                {row.values.map((lines, i) => (
                  <td key={i}>
                    {lines[0] === null ? (
                      <span className="compare__dash">–</span>
                    ) : (
                      lines.map((line, j) => (
                        <p key={j} className={j === 0 ? "compare__lead" : "compare__sub"}>
                          {line}
                        </p>
                      ))
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="compare__links">
        <a href="#" className="link-arrow">
          Compare all iPhone models
        </a>
        <a href="#" className="link-arrow">
          Shop iPhone
        </a>
      </div>
    </section>
  );
}
