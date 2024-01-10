import { Link } from "react-router-dom";
import "../styles/Works.css";
import SEO from "../assets/works/SEO.webp";
import KASA from "../assets/works/kasa.webp";

function Works() {
  return (
    <div id="worksSection">
      <div className="grid-ctn">
        <div className="works-grid">
          <div className="work-card">
            <Link
              to="https://viviern.github.io/Debugger_et_optimiser_un_site_de_photographe/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Optimisation SEO</h2>
              <img
                src={SEO}
                alt="Screen shot du site web optimisé de Nina Carducci."
                loading="lazy"
              ></img>
              <div className="caps1">
                <p>
                  <strong>Projet OpenClassrooms</strong>
                </p>
              </div>
              <div className="caps2">
                <p>Amélioration technique du site :</p>
                <p>• Révision du code HTML</p>
                <p>• Conversion des photos</p>
                <p>• Traduction du plugin de gestion des photos</p>
                <p>• Révision des mots clés</p>
              </div>
              <div className="caps3">
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>Projet validé avec succès.</p>
                <p>Note maximale via Lighthouse & Wave.</p>
                <p>Meilleur référencement obtenu.</p>
              </div>
            </Link>
          </div>
          <div className="work-card">
            <Link
              to="https://viviern.github.io/Kasa_React/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Kasa React App</h2>
              <img src={KASA} alt="Logo de Kasa." loading="lazy"></img>

              <div className="caps1">
                <p>
                  <strong>Projet OpenClassrooms</strong>
                </p>
              </div>
              <div className="caps2">
                <p>Développement 'from scratch':</p>
                <p>• Mise en place des routes de l'application</p>
                <p>• Création de galeries photos modulables</p>
                <p>• Mise en place de collapsible boxes</p>
                <p>• Adaptation responsive</p>
              </div>
              <div className="caps3">
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>Projet validé avec succès.</p>
                <p>Fonctionnalités demandées mises au point.</p>
                <p>Bon fonctionnement sur desktops, tablettes & mobiles.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
