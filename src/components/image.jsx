import React from "react";

export const Image = ({ title, descripcion, descripcionn, smallImage, onNavigate}) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href=" " onClick={() => onNavigate('dashboard')}>
          <div className="hover-text">
            <h4>{title}</h4>
            <p>{descripcion}</p>
            <p>{descripcionn}</p>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />
        </a>
      </div>
    </div>
  );
};
