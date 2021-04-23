import React from "react";
import "../css/Skills.css";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills-page">
        <h1 className="skills-heading">SKILLS</h1>
        <span className="skills-divider"></span>

        <div className="skills-wrapper">
          <div className="heading-wrapper">
            <h2 className="skills-sub-heading">DEVELOPMENT</h2>
            <ul>
              <li className="dev-item">JavaScript</li>
              <li className="dev-item">HTML5</li>
              <br />
              <li className="dev-item">CSS3</li>
              <li className="dev-item">React</li>
            </ul>
          </div>

          <div className="list-wrapper">
            <div className=" tools-wrapper">
              <h2 className="skills-sub-heading ">
                <span className="sprite tools"></span> <span>Tools</span>
              </h2>
              <ul className="list">
                <li className="list-item">Git + Github</li>
                <li className="list-item">Command Line</li>
                <li className="list-item">Chrome DevTools</li>
              </ul>
            </div>

            <div className=" knowledge-wrapper">
              <h2 className="skills-sub-heading">
                <span className="sprite knowledge"></span>
                <span>Knowledge</span>
              </h2>
              <ul className="list">
                <li className="list-item">CSS Detangling</li>
                <li className="list-item">ECMAScript 6</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-button-wrapper">
          <a
            className="resume-link"
            href="https://www.hiration.com/dieu/resume/karan19/pdf"
            rel="noreferrer"
            target="_blank"
          >
            <button className="resume-btn" variant="primary">
              Check Out My Resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Skills;
