import React from "react";
import { Link } from "react-router-dom";
import "../styles/Intro.css";
import mainImage from "../assets/nico-pro-contraste.webp";

function Intro() {
  return (
    <div className="About" id="aboutSection">
      <div className="main-ctn">
        <div className="main-card">
          <div className="Intro">
            <h1>Votre nouveau collaborateur</h1>
            <div className="ctn-cta">
              <div className="center">
                <p>
                  Passionné par la conception et le développement web, je suis à
                  la recherche d'une opportunité professionnelle enrichissante !
                </p>
                <p>
                  Après avoir obtenu un titre professionnel de
                  Développeur/Intégrateur Web et suivi une formation de
                  Concepteur Développeur Full-stack, j'ai acquis une solide
                  expertise en technologies front-end et back-end. Je maîtrise
                  notamment HTML, CSS, JavaScript, React, Angular, Java et SQL.
                  Mon parcours de formation m'a permis de réaliser plusieurs
                  projets, tels qu'une filmothèque en Java et une application de
                  gestion de cave à vin, renforçant ainsi mes compétences
                  techniques et méthodologiques.
                </p>
                <p>
                  Je suis motivé par l'idée de créer des solutions web
                  performantes, efficaces et centrées sur l'utilisateur. Mon
                  objectif est de contribuer activement à des projets innovants
                  et de continuer à apprendre dans ce domaine en constante
                  évolution.
                </p>
                <p>
                  <strong>
                    Prêt à relever de nouveaux défis, je suis convaincu de
                    pouvoir apporter une réelle valeur ajoutée à vos projets !
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="bd">
            <div className="img-ctn">
              <img
                src={mainImage}
                alt="Symbolise la puissance d'un bon site web"
              ></img>
            </div>
            <div className="cta">
              <Link to="/contact" rel="noopener noreferrer">
                Contactez-moi !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
