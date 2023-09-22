import "../styles/Works.css";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "../assets/works/SEO.webp";
import KASA from "../assets/works/kasa.webp";
import Github from "../assets/works/Github.webp";

function Works() {
  return (
    <div id="worksSection">
      <Header
        title="Mes Travaux"
        subtitle="Aperçu des projets que j'ai réalisé."
        showLogo={false}
        showSideBar={true}
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
                loading="lazy"
              ></img>
            </a>
            <p>
              <strong>Améliorations :</strong>
            </p>
            <p>Optimisation des photos et de leurs chargements.</p>
            <p>Gestion du cache sur mesure via Service Worker</p>
            <p>
              <strong>Problématique :</strong>
            </p>
            <p>Plugin buggé et obsoléte</p>
            <p>
              <strong>Solution :</strong>
            </p>
            <p>Création plugin javaScript sur mesure</p>
            <p>
              <strong>Compétences acquises :</strong>
            </p>
            <p>Utilisation outils d'audit</p>
            <p>Optimisation technique</p>
          </div>
          <div className="work-card">
            <h2>Création React</h2>
            <a
              href="https://viviern.github.io/Kasa_React/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={KASA} alt="Logo de Kasa." loading="lazy"></img>
            </a>
            <p>
              <strong>Améliorations :</strong>
            </p>
            <p>Création de composants modulable.</p>
            <p>Gestion efficace des routes</p>
            <p>
              <strong>Problématique :</strong>
            </p>
            <p>Gérer les collapsible boxes</p>
            <p>
              <strong>Solution :</strong>
            </p>
            <p>Utilisation des props react dans un module d'interface</p>
            <p>
              <strong>Compétences acquises :</strong>
            </p>
            <p>Utilisation React</p>
            <p>Gestion de la navigation</p>
          </div>
          <div className="work-card">
            <h2>Mon Github</h2>
            <a
              href="https://github.com/VivieRn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Github}
                alt="Screen shot de mon Github"
                loading="lazy"
              ></img>
            </a>

            <p>Retrouvez tous mes projets.</p>
          </div>
        </div>
      </div>
      <Footer title="Me contacter" showArrow={true} />
    </div>
  );
}

export default Works;
