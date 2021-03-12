import React from "react";
import "../css/ProjectCard.css";

const ProjectCard = ({ id, image, title, link }) => {
  return (
    <>
      <div className="product">
        <a href={link}>
          <img className="product_img" src={image} alt="" />
          <h2 className="project-title">{title}</h2>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
