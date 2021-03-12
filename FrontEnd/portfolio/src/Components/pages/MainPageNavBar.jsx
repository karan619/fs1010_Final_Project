import React from "react";
import "../css/MainPageNavBar.css";
import { Link } from "react-router-dom";

const MainPageNavBar = () => {
  return (
    <>
      <nav className="mainpage_nav-bar">
        <ul>
          <li>
            <a href="#Home-section">Home</a>
          </li>
          <li>
            <a href="#About-section">About Me</a>
          </li>
          <li>
            <a href="#service">What I Do</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projetcs</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <Link to="/submissions">Submission</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainPageNavBar;
