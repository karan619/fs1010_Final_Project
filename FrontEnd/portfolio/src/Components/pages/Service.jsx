import React from "react";
import "../css/Service.css";
const Service = () => {
  return (
    <>
      <section id="service" className="service-page">
        <h1 className="service-heading">WHAT I DO</h1>
        <span className="service-divider"></span>

        <div className="service-wrapper">
          <div className="service-row row1">
            <div className="service-column">
              <div className="sprite webdev"></div>
              <h2 className="service-heading">Web Development</h2>
              <p className="service-text">
                Using HTML, CSS, and JavaScript with pre-processors and build
                tools such as Sass and Grunt, I have a passion for developing
                pixel-perfect websites and apps while maintaining a semantic,
                modular, and DRY code base.
              </p>
            </div>
            <div className="service-column column1">
              <h2 className="service-heading">Responsive UI Design</h2>
              <p className="service-text">
                <strong>
                  "A user interface is like a joke. If you have to explain it,
                  it's not that good."
                </strong>
                I strive to develop and implement responsive and aesthetically
                pleasing interfaces for websites and apps that adapt to any type
                of device, platform, or browser.
              </p>
            </div>
          </div>

          <div className="service-row">
            <div className="service-column">
              <h2 className="service-heading">Experience Design</h2>
              <p className="service-text">
                There have been far too many times where I've been trying to
                accomplish a simple task on a website, and ended up wanting to
                throw my computer out the window in frustration.
                <br /> Needless to say, user experience is an aspect of software
                I believe is vital to a successful product.
              </p>
            </div>
            <div className="service-column column1">
              <h2 className="service-heading">Diversity in Tech</h2>
              <p className="service-text">
                Beyond coding, I am a strong advocate for diversity in the tech
                industry, especially for women and LGBTQ community .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
