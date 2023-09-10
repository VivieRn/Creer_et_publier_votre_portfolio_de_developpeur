import "../styles/Works.css";
import SEO from "../assets/SEO.webp";

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
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
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
            <p>Révision des mots clefs</p>
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
