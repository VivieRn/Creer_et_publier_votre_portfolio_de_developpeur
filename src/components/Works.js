import { Link } from "react-router-dom";
import "../styles/Works.css";
import SEO from "../assets/works/SEO.webp";
import KASA from "../assets/works/kasa.webp";
import BACK from "../assets/works/back-end.webp";
import ANG from "../assets/works/messagerie.webp";
import CAVE from "../assets/works/cave.webp";
import FILMO from "../assets/works/filmo.webp";

function Works() {
  return (
    <div id="worksSection">
      <div className="grid-ctn">
        <div className="works-grid">
          <div className="work-card">
            <Link to="/projets/filmotheque" style={{ textDecoration: "none" }}>
              <h2>Filmothèque Java</h2>
              <img
                src={FILMO}
                alt="Capture d'écran du site web filmothèque."
                loading="lazy"
              ></img>
              <p>Site de gestion d'une filmothèque.</p>
              <div>
                <p>
                  <strong>Projet ENI</strong>
                </p>
              </div>
              <div>
                <p>Développement 'from scratch' du back-end :</p>
                <p>• Projet Gradle, Spring Data, Spring MVC et SQL.</p>
                <p>• Mise en place des classes objets.</p>
                <p>• Mise en place des Data Access Objects (DAO).</p>
                <p>• Mise en place du MVC (Model View Controller).</p>
                <p>• Mise en place de l'internationalisation.</p>
              </div>
              <div>
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>CRUD fonctionnel permettant de gérer la filmothèque.</p>
                <p>Développement en couche suivant l'architecture MVC.</p>
                <p>Internationalisation opérationnelle Français / Anglais.</p>
              </div>
            </Link>
          </div>
          <div className="work-card">
            <Link to="/projets/cave-a-vin" style={{ textDecoration: "none" }}>
              <h2>Cave à vin Java</h2>
              <img
                src={CAVE}
                alt="Capture d'écran du site web de gestion de cave à vin."
                loading="lazy"
              ></img>
              <p>Site de gestion d'une cave à vin.</p>
              <div>
                <p>
                  <strong>Projet ENI</strong>
                </p>
              </div>
              <div>
                <p>Développement 'from scratch' du back-end :</p>
                <p>• Projet Gradle Spring Data, Spring Web et SQL.</p>
                <p>• Mise en place des classes objets.</p>
                <p>• Mise en place des interfaces Data Access Object.</p>
                <p>• Mise en place de la couche service.</p>
                <p>• Ajout des servlets traitant les données.</p>
              </div>
              <div>
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>CRUD fonctionnel permettant de gérer la cave à vin.</p>
                <p>Fonctions de tri opérationnelles.</p>
                <p>Fonction de recherche par mots opérationnelle.</p>
              </div>
            </Link>
          </div>
          <div className="work-card">
            <Link
              to="/projets/messagerie-angular"
              style={{ textDecoration: "none" }}
            >
              <h2>Messagerie Angular</h2>
              <img
                src={ANG}
                alt="Screen shot du site web de messagerie instantanée."
                loading="lazy"
              ></img>
              <p>Site de Messagerie instantanée.</p>
              <div>
                <p>
                  <strong>Projet ENI</strong>
                </p>
              </div>
              <div>
                <p>Développement 'from scratch' :</p>
                <p>• Mise en place des composants de la messagerie.</p>
                <p>• Mise en place d'un modèle 'UserMessage'.</p>
                <p>• Mise en place du service de traitement des messages.</p>
                <p>• Utilisation de Bootstrap pour la mise en forme.</p>
                <p>• Gestion des routes de l'application.</p>
              </div>
              <div>
                <p>
                  <strong>Résultat du projet :</strong>
                </p>
                <p>L'envoi et l'affichage des messages sont fonctionnels.</p>
                <p>Gestion réactive du formulaire via Angular.</p>
                <p>Routage de l'application fonctionnel.</p>
              </div>
            </Link>
          </div>
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
            <Link to="/projets/kasa-react" style={{ textDecoration: "none" }}>
              <h2>Kasa location React</h2>
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
              to="/projets/mon-vieux-grimoire-nodejs"
              style={{ textDecoration: "none" }}
            >
              <h2>Mon Vieux Grimoire NodeJS</h2>
              <img
                src={BACK}
                alt="Capture d'écran du site web de bibliothèque Mon Vieux Grimoire."
                loading="lazy"
              ></img>
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
