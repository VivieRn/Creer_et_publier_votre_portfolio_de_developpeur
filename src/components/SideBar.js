import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  return (
    <div className="ctn-header">
      <nav className="nav">
        <ul className="nav-links">
          <li className="links">
            <Link to="/">Accueil</Link>
          </li>
          <li className="links">
            <Link to="/competences">Compétences</Link>
          </li>
          <li className="links">
            <Link to="/travaux">Travaux</Link>
          </li>
          <li className="links">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
