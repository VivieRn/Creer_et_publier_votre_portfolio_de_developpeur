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
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
      />
      <div className="main-ctn">
        <div className="main-card">
          <div className="Intro">
            <h2>Vous avez besoin d'un site web professionnel ?</h2>
            <div className="ctn-cta">
              <div className="center">
                <p>
                  Vous cherchez à gagner en visibilité sur le web tout en
                  bénéficiant d'une conception personnalisé ? La solution n'est
                  qu'à un clique !
                </p>
                <div className="cta">
                  <ScrollLink to="contactSection" smooth={true} duration={500}>
                    Contact
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
          <div className="img-ctn">
            <img
              src={mainImage}
              alt="Image symbolisant la puissance d'un bon site web"
            ></img>
          </div>
        </div>
      </div>
      <Footer title="Mes compétences" showArrow={true} />
    </div>
  );
}

export default Intro;
