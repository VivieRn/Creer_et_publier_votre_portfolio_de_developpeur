import React from "react";
import "../styles/SideBar.css";
import { Link as ScrollLink } from "react-scroll";

function SideBar() {
  return (
    <div className="ctn-header">
      <nav className="nav">
        <ul className="nav-links">
          <li className="links">
            <ScrollLink to="aboutSection" smooth={true} duration={500}>
              Accueil
            </ScrollLink>
          </li>
          <li className="links">
            <ScrollLink to="skillsSection" smooth={true} duration={500}>
              Compétences
            </ScrollLink>
          </li>
          <li className="links">
            <ScrollLink to="worksSection" smooth={true} duration={500}>
              Travaux
            </ScrollLink>
          </li>
          <li className="links">
            <ScrollLink to="contactSection" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
