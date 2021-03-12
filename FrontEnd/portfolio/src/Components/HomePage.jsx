import React from "react";
import VideoPage from "./pages/VideoPage";
import About from "./pages/About";
import Service from "./pages/Service";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./shared/Footer";

const HomePage = () => {
  return (
    <>
      <VideoPage />
      <About />
      <Service />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
