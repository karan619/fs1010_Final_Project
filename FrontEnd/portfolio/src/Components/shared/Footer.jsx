import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-page">
        <div className="footer-wrapper">
          <p className="footer-subheading">FOLLOW ME AT</p>
          <div className="footer-media">
            <div className="icon">
              <i className="fab fa-twitter social-media"></i>
            </div>

            <div className="icon">
              <i className="fab fa-facebook-f social-media"></i>
            </div>

            <div className="icon">
              <i className="fab fa-instagram social-media"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
