import React from "react";

export default function InfoDetail({ title, name }) {
  return (
    <div className="info-detail">
      <span className="info-detail-icon">
        <i className="fas fa-check-square" />
      </span>
      <h1>{title} :</h1>
      <h1>{name}</h1>
    </div>
  );
}
