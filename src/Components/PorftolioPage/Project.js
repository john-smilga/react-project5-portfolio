import React from "react";

export default function PorfolioItem({ project, openModal }) {
  const { img, id, title, technology, url, github } = project;

  return (
    <article className="project">
      <div className="project-img__container">
        <img src={img} className="project-img" alt="" />
        <span
          className="project-modal__icon"
          onClick={() => {
            openModal(id);
          }}
        >
          <i className="fas fa-search" />
        </span>
      </div>
      {/* footer */}
      <div className="project-footer">
        <div className="project-footer__info">
          <h1 className="text-slanted">{title}</h1>
          <h4 className="project-footer__tech">{technology}</h4>
        </div>
        <div className="project-footer__links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project__icon project__icon--github"
          >
            <i className="fab fa-github-square" />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project__icon"
          >
            <i className="fab fa-chrome" />
          </a>
        </div>
      </div>
    </article>
  );
}
