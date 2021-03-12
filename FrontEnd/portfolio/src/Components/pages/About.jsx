import React from "react";
import MainPageNavBar from "./MainPageNavBar";
import "../css/About.css";

const About = () => {
  return (
    <>
      <MainPageNavBar />
      <section id="About-section" className="about-page">
        <div className="section-wrapper">
          <div className="section-heading-wrapper">
            <h1 className="section-heading">Hey, I'm Karan.</h1>
            <h3 className="section-subheading">
              I'm a design-minded, detail oriented web developer passionate
              about combining beautiful code with beautiful design.
            </h3>

            <span className="divider"></span>

            <p className="about-text">
              I love learning new and better ways to create seamless user
              experiences with clean, efficient, and scalable code.
              <br /> I consider work an ongoing education, and I'm always
              looking for opportunities to work with those who are willing to
              share their knowledge.
              <br /> At the end of the day, my primary goal is to create
              something beautiful with people that bring out the best in me.
            </p>
          </div>

          <div className="portfolio-wrapper">
            <img
              className="portfolio"
              src="images/Mypicture.jpg"
              alt="Coming Soon"
              srcset=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
