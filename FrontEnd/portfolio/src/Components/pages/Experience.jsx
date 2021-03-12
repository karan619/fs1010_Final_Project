import React from "react";
import "../css/Experience.css";

function Experience() {
  return (
    <>
      <section id="experience" className="experience-page">
        <h1 className="experience-heading">EXPERIENCE</h1>
        <span className="experience-divider"></span>

        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="timeline-dots left">
              <div className="content">
                <h2>2020-Present</h2>
                <p>
                  Studying Full Stack Web Developer Course from York University.
                </p>
              </div>
            </div>
            <div className="timeline-dots right">
              <div className="content">
                <h2>2019-2018</h2>
                <p>
                  Wroked as an IT System Analyst for a Non Profit Organization
                  in Thornhill,Ontario.
                </p>
              </div>
            </div>
            <div className="timeline-dots left">
              <div className="content">
                <h2>2016-2018</h2>
                <p>
                  Completed my Post Graduate Diploma in Computer Networking from
                  Centennial College, Canada.
                </p>
              </div>
            </div>
            <div className="timeline-dots right">
              <div className="content">
                <h2>2011-2014</h2>
                <p>
                  Completed my Bachelors in Information Technology from India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
