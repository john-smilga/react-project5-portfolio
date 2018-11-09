import React from "react";

export default function Header({ title, url }) {
  return (
    <section
      className="header"
      style={{
        background: `url(${url})center/cover fixed no-repeat`
      }}
    >
      <div className="header-banner">
        <h1 className="header-title text-slanted">{title}</h1>
      </div>
    </section>
  );
}
