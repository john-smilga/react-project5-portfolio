import React from "react";

export default function PortfolioBtn({ name, handleSort }) {
  return (
    <button name={name} className="portfolio-btn" onClick={handleSort}>
      {name}
    </button>
  );
}
