import React from "react";
import "../css/Project.css";
import { ProjectData } from "../Data/ProjectData";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <>
      <section id="projects" className="project-page">
        <h1 className="project-heading">MY PROJECTS</h1>
        <span className="project-divider"></span>

        <div className="project-wrapper-row">
          <div className="projects-row">
            {/**Displaying ProjectData */}
            {ProjectData.map((data, key) => (
              <ProjectCard
                id={data.id}
                image={data.image}
                title={data.title}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
