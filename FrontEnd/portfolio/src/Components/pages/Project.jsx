import React, { useState } from "react";
import "../css/Project.css";
import { useEffect } from "react";
//import { ProjectData } from "../Data/ProjectData";

import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projetcs, setProject] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/projects");
      const data = await response.json();
      //console.log("this is data", data);
      setProject(data);
    };
    getData();
  }, []);
  return (
    <>
      {console.log("this is project data", projetcs)}
      <section id="projects" className="project-page">
        <h1 className="project-heading">MY PROJECTS</h1>
        <span className="project-divider"></span>

        <div className="project-wrapper-row">
          <div className="projects-row">
            {/**Displaying ProjectData */}
            {projetcs.map((data, key) => (
              <ProjectCard
                id={data.project_id}
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
