import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Intro.css";
import mainImage from "../assets/image_1.webp";
import Header from "./Header";

import Footer from "./Footer";

function Intro() {
  return (
    <div className="About" id="aboutSection">
      <Header
        title="Développeur fullstack freelance"
        subtitle="Transformez votre présence en ligne"
        showLogo={true}
      />

      <div className="main-ctn">
        <div className="main-card">
          <div className="Intro">
            <h2>Vous avez besoin d'un site web performant ?</h2>
            <div className="ctn-cta">
              <div className="center">
                <p>
                  Vous avez besoin d'un site web performant ?Vous en avez assé
                  de votre site qui rame et n'est pas bien référencé ? Vous
                  souhaitez toucher plus de personnes et développer votre
                  activité ? La solution n'est qu'à un clique !
                </p>
                <div className="cta">
                  <ScrollLink to="contactSection" smooth={true} duration={500}>
                    Commençons l'aventure
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
          <div className="img-ctn">
            <img
              src={mainImage}
              alt="Symbolise la puissance d'un bon site web"
            ></img>
          </div>
        </div>
      </div>
      <Footer title="Mes compétences" showArrow={true} />
    </div>
  );
}

export default Intro;
