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
                  Débordant d'enthousiasme pour la conception et le
                  développement web, je suis à la recherche d'une opportunité
                  stimulante !
                </p>
                <p>
                  Ma trajectoire professionnelle n'a pas toujours été liée au
                  web. En effet, avant de plonger dans cet univers fascinant,
                  j'ai évolué dans le monde de l'hôtellerie en tant que chef de
                  réception. Cette expérience unique m'a armé d'une solide
                  expérience en gestion et en communication, me dotant de
                  compétences exceptionnelles en service client et en travail
                  d'équipe. J'ai également appris à gérer des projets dans un
                  environnement dynamique et parfois sous pression.
                </p>
                <p>
                  Désormais titulaire d'un titre professionnel de Développeur /
                  Intégrateur web, mon ambition est claire : mettre en pratique
                  mes compétences dans un cadre professionnel, contribuant
                  activement à des projets innovants et concrets.
                </p>
                <p>
                  C'est donc dans ce but que je cherche un contrat de
                  professionnalisation en tant que Concepteur Développeur
                  Full-stack .L'univers de la conception et du développement web
                  full-stack est pour moi une véritable source d'inspiration, et
                  j'ai hâte de me plonger dans des projets diversifiés. Cela me
                  permettra non seulement de développer une compréhension
                  globale et approfondie du domaine, mais aussi de continuer à
                  apprendre et à me développer dans ce milieu que je chéris
                  tant.
                  <br />
                  <br />
                  <strong>
                    Je suis prêt à faire la différence. Ensemble, transformons
                    les idées en réalités !
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
