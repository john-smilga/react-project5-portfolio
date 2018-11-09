import React from "react";

export default function Section({ name, color, children }) {
  return (
    <section className="global-section" style={{ background: `${color}` }}>
      <div className="section-title">
        <h1 className="title-name text-slanted">{name}</h1>
        <div className="title-underline" />
      </div>
      {children}
    </section>
  );
}
