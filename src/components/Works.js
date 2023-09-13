import "../styles/Works.css";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "../assets/SEO.webp";
import Kasa from "../assets/kasa-logo.svg";

function Works() {
  return (
    <div id="worksSection">
      <Header
        title="Mes Travaux"
        subtitle="Aperçu des projets que j'ai réalisé."
        showLogo={false}
      />
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
      <Footer title="Me contacter" showArrow={true} />
    </div>
  );
}

export default Works;
