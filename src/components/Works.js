import "../styles/Works.css";
import SEO from "../assets/SEO.webp";
import Kasa from "../assets/kasa-logo.svg";

function Works() {
  return (
    <div id="worksSection">
      <div className="Header-ctn">
        <div className="Header3">
          <h1>Mes Travaux</h1>
          <p>Aperçu des projets que j'ai réalisé.</p>
        </div>
      </div>
      <div className="grid-ctn">
        <div className="works-grid">
          <div className="work-card">
            <h2>Optimisation SEO</h2>
            <a
              href="https://viviern.github.io/Debugger_et_optimiser_un_site_de_photographe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SEO}
                alt="Screen shot du site web optimisé de Nina Carducci."
              ></img>
            </a>

            <p>Optimisation des photos et de leurs chargements.</p>
            <p>Gestion du cache sur mesure via Service Worker</p>
          </div>
          <div className="work-card">
            <h2>Création React</h2>
            <a
              href="https://viviern.github.io/Kasa_React/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="kasa" src={Kasa} alt="Logo de Kasa."></img>
            </a>

            <p>Création de composants modulable.</p>
            <p>Gestion efficace des routes</p>
          </div>
          <div className="work-card">
            <h2>Optimisation SEO</h2>
            <a
              href="https://viviern.github.io/Debugger_et_optimiser_un_site_de_photographe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SEO}
                alt="Screen shot du site web optimisé de Nina Carducci."
              ></img>
            </a>

            <p>Optimisation des photos et de leurs chargements.</p>
            <p>Gestion du cache sur mesure via Service Worker</p>
          </div>
        </div>
      </div>
      <div className="Footer3">
        <h2>Contact</h2>
        <i className="fa fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default Works;
