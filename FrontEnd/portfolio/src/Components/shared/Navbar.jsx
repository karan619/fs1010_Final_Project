import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/submissions">Submission</Link>
          </li>
        </ul>
      </nav>
      .
    </>
  );
};

export default Navbar;
