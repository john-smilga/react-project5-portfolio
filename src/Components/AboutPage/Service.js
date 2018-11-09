import React from "react";

export default function Service({ icon, title }) {
  return (
    <div className="service">
      <span className="service-icon">
        <i className={icon} />
      </span>
      <h2 className="service-title">{title}</h2>
    </div>
  );
}
