import React from "react";
import "../css/VideoPage.css";
const VideoPage = () => {
  return (
    <>
      <video
        className="mainpage-video"
        src="/videos/video-2.mp4"
        autoPlay
        loop
        muted
      ></video>

      <section className="intro-content-wrapper">
        <h1 className="intro-content-Heading">Karan Chauhan</h1>
        <p className="intro-content-para"> Front End Web Developer</p>

        <div className="down-arrow-wrapper">
          <a href="#About-section">
            <i className="fas fa-angle-double-down fa-2x down-arrow"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default VideoPage;
