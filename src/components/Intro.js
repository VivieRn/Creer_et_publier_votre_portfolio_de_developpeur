import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Intro.css";

function Intro() {
  return (
    <div className="About" id="aboutSection">
      <div className="Header-ctn">
        <div className="Header">
          <h1>Developpeur fullstack freelance</h1>
          <p>Get your own customize business web site.</p>
        </div>
      </div>
      <div className="Intro">
        <h2>Vous avez besoin d'un site web professionnel ?</h2>
        <div className="ctn-cta">
          <div className="center">
            <p>
              Vous cherchez à gagner en visibilité sur le web tout en
              bénéficiant d'une conception personnalisé ? La solution n'est qu'à
              un clique !
            </p>
            <button className="cta">
              <ScrollLink to="contactSection" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </button>
          </div>
        </div>
      </div>
      <div className="Footer">
        <h2>Mes compétences</h2>
        <i className="fa fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default Intro;
