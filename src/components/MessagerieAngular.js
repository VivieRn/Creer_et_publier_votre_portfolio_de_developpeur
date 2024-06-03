import { Link } from "react-router-dom";
import "../styles/optimisationSeo.css";
import ANG from "../assets/works/messagerie.webp";

function OptimisationSeo() {
  return (
    <div className="seo-ctn">
      <div className="card-seo">
        <div className="title">
          <h1>Messagerie Angular</h1>
          <p>
            <strong>Projet réaliser pour l'ENI.</strong>
          </p>
        </div>
        <img
          src={ANG}
          alt="Screen shot du site web créé via React, Kasa."
          loading="lazy"
          className="seo-img"
        ></img>
        <div className="seo-link">
          <Link
            to="https://viviern.github.io/Messagerie-Angular/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            className="seo-btn"
          >
            Accéder au site web
          </Link>
          <Link
            to="https://github.com/VivieRn/Messagerie-Angular"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            className="seo-btn"
          >
            Accéder au Github
          </Link>
        </div>
        <div className="ctn-tech">
          <div className="caps2">
            <h2>Développement 'from scratch' :</h2>
            <p>
              Site de messagerie instantanée, permettant aux internautes de
              communiquer par messages, consulter l'historique des messages
              envoyés et voir les derniers utilisateurs actifs.
            </p>
            <p>
              Ce projet a nécessité l'utilisation d'Angular et de Bootstrap pour
              obtenir une application front-end fonctionnelle et réactive aux
              actions de l'utilisateur.
            </p>
            <p>
              Pour commencer, la partie messagerie a été mise en place de
              manière à ce que les différents composants logent dans la même
              fenêtre. Ensuite, le modèle de données a été mis en place afin de
              s'en servir via un gestionnaire de service Angular pour la gestion
              des données et via RxJS (Reactive Extensions for JavaScript) pour
              la gestion des flux de données asynchrones, permettant ainsi
              l'affichage des messages et des utilisateurs.
            </p>
            <p>
              Ensuite, différentes directives Angular ont été mises en place.
              Par exemple, les messages d'erreurs du formulaire d'envoi de
              message sont gérés par des directives conditionnelles d'Angular
              liées à des fonctions permettant de vérifier la validité des
              champs.
            </p>
            <p>
              Enfin, la navigation a été mise en place avec une page d'accueil
              et un menu. Le routage mis en place permet une gestion des URL
              inexistantes redirigeant vers une page d'erreur (404). Et
              l'esthétique a été rapidement retravaillée avec Bootstrap et la
              mise en place d'un nuancier de couleurs.
            </p>
          </div>

          <div className="caps2">
            <h2>Résultat du projet :</h2>
            <p>
              Le projet est bien fonctionnel et permet un affichage géré selon
              les directives d'Angular. Les messages sont bien transmis à
              l'historique permettant leur affichage et ils sont bien classés du
              plus récent au plus ancien. L'affichage des utilisateurs est
              effectué en simultané en se servant du nom transmis avec le
              message pour l'afficher.
            </p>
            <p>
              La navigation au sein de l'application est bien gérée et ne permet
              pas de sortir des routes prévues. La gestion des erreurs et des
              validations de formulaire fonctionne correctement, offrant une
              bonne expérience utilisateur.
            </p>
            <p>
              Le code est modulaire et facilement maintenable, facilitant les
              futures évolutions de l'application.
            </p>
            <p>
              L'adaptation responsive n'est pas fonctionnelle car ce n'était pas
              le but de ce projet.
            </p>
          </div>
        </div>
        <div className="return-btn">
          <Link to="/projets">◄ Retour aux projets</Link>
        </div>
      </div>
    </div>
  );
}

export default OptimisationSeo;
