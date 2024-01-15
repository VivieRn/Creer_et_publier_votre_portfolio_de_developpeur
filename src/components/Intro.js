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
            <h1>Rapide présentation</h1>
            <div className="ctn-cta">
              <div className="center">
                <p>
                  Passionné par la conception, le développement et le design
                  web, je recherche un contrat de professionnalisation en
                  alternance pour approfondir mes compétences de
                  concepteur-développeur et valider mon diplôme de Concepteur
                  Développeur Full-Stack via la 3W Academy.
                </p>
                <p>
                  Avant ma reconversion professionnelle, j'ai acquis une
                  expérience significative en gestion et en communication en
                  tant que chef de réception en hôtellerie. Cette expérience m'a
                  permis de développer d'excellentes compétences en matière de
                  service client et de travail d'équipe, tout en renforçant ma
                  capacité à gérer des projets sous pression.
                </p>
                <p>
                  Mon objectif est d'appliquer et d'approfondir mes compétences
                  dans un contexte réel, contribuant ainsi à des projets
                  concrets tout en poursuivant ma formation. Je suis
                  particulièrement attiré par la possibilité de travailler sur
                  des projets variés, ce qui me permettrait de développer une
                  compréhension holistique de la conception et du développement
                  en full-stack.
                  <br />
                  <br />
                  <strong>
                    Contrat de professionnalisation – Rythme : 3 semaines en
                    entreprise / 1 semaine en école.
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
              <Link
                to="https://calendly.com/equipe-3wa/prise-de-contact-entreprise-eleve?utm_content=Nicolas%20Vivier&utm_campaign=recpDBIXGCqyZrlco&utm_source=%2033620253505&month=2024-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver un entretien !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
