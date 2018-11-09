import React from "react";

export default function Modal({ modal, closeModal }) {
  const { img, title, technology, description, stack } = modal;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-body">
        <div className="modal-body__img-container">
          <img src={img} alt="" />
        </div>
        <div className="modal-body__info">
          <h1 className="modal-title text-slanted">name : {title}</h1>
          <h3 className="modal-subtitle">built with {technology}</h3>
          <h4 className="modal-reference"> description :</h4>
          <p className="modal-description">{description}</p>
          <h4 className="modal-reference">technologies used :</h4>
          <p className="modal-stack">
            {stack.map((item, index) => {
              return (
                <span key={index} className="modal-stack__item">
                  {item}
                </span>
              );
            })}
          </p>
          <button className="modal__close-btn" onClick={closeModal}>
            close modal
          </button>
        </div>
      </div>
    </div>
  );
}
