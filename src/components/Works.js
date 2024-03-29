import { Link } from "react-router-dom";
import "../styles/Works.css";
import SEO from "../assets/works/SEO.webp";
import KASA from "../assets/works/kasa.webp";
import BACK from "../assets/works/back-end.webp";

function Works() {
  return (
    <div id="worksSection">
      <div className="grid-ctn">
        <div className="works-grid">
          <div className="work-card">
            <Link
              to="/projets/optimisation-seo"
              style={{ textDecoration: "none" }}
            >
              <h2>Optimisation SEO</h2>
              <img
                src={SEO}
                alt="Screen shot du site web optimisé de Nina Carducci."
                loading="lazy"
              ></img>
              <p>Site vitrine de photographe.</p>
              <div>
                <p>
                  <strong>Projet OpenClassrooms</strong>
                </p>
              </div>
              <div>
                <p>Amélioration technique du site :</p>
                <p>• Optimisation globale, performances et SEO.</p>
                <p>• Correction des fonctionnalités.</p>
                <p>• Référencement local via schema.org.</p>
                <p>• Ajout de balises méta.</p>
              </div>
              <div>
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>Amélioration significative des performances.</p>
                <p>Correction de toutes les erreurs de fonctionnalités.</p>
                <p>Meilleur référencement obtenu.</p>
              </div>
            </Link>
          </div>
          <div className="work-card">
            <Link
              to="/projets/kasa-react-app"
              style={{ textDecoration: "none" }}
            >
              <h2>Kasa React App</h2>
              <img src={KASA} alt="Logo de Kasa." loading="lazy"></img>
              <p>Site de locations immobilières.</p>
              <div>
                <p>
                  <strong>Projet OpenClassrooms</strong>
                </p>
              </div>
              <div>
                <p>Développement 'from scratch' :</p>
                <p>• Mise en place des routes de l'application.</p>
                <p>• Utilisation des données pour les routes des logements.</p>
                <p>• Mise en place d'une galerie photo.</p>
                <p>• Adaptation responsive.</p>
              </div>
              <div>
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>Bonne gestion des routes et des données.</p>
                <p>Fonctionnalités demandées correctement mises au point.</p>
                <p>Bon fonctionnement sur desktops, tablettes et mobiles.</p>
              </div>
            </Link>
          </div>
          <div className="work-card">
            <Link
              to="/projets/back-end-nodejs"
              style={{ textDecoration: "none" }}
            >
              <h2>Back-end NodeJS</h2>
              <img src={BACK} alt="Logo de Kasa." loading="lazy"></img>
              <p>Site communautaire littéraire.</p>
              <div>
                <p>
                  <strong>Projet OpenClassrooms</strong>
                </p>
              </div>
              <div>
                <p>Développement 'from scratch' du back-end :</p>
                <p>• Mise en place du serveur et routes du back-end.</p>
                <p>• Liaison et stockage des données via MongoDB.</p>
                <p>• Mise en place d'un système CRUD.</p>
                <p>• Mise en place de normes de sécurité.</p>
              </div>
              <div>
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>Le Back-end mis en place est fonctionnelle.</p>
                <p>Un utilisateur peu créer un compte et s'y connecter.</p>
                <p>Permet l'ajout de livres et de les noter.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
