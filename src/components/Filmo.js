import { Link } from "react-router-dom";
import "../styles/optimisationSeo.css";
import FILMO from "../assets/works/filmo.webp";

function OptimisationSeo() {
  return (
    <div className="seo-ctn">
      <div className="card-seo">
        <div className="title">
          <h1>Filmothèque Java</h1>
          <p>
            <strong>Projet réalisé pour l'ENI.</strong>
          </p>
        </div>
        <img
          src={FILMO}
          alt="Capture d'écran du site de gestion de filmothèque."
          loading="lazy"
          className="seo-img"
        ></img>
        <div className="seo-link">
          <Link
            to="https://github.com/VivieRn/Filmotheque-JAVA"
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
            <h2>Développement 'from scratch' du back-end :</h2>
            <p>
              Site de gestion d'une filmothèque, permettant l'ajout de films, la
              visualisation des films, de les modifier et de les supprimer.
              Permet également l'ajout, la modification et la suppression de
              styles.
            </p>
            <p>
              Ce projet a nécessité la mise en place du back-end via Java,
              Spring Data, et Spring MVC en corrélation avec le front-end créé à
              l'avance via des JSP et en utilisant Bootstrap pour la mise en
              forme, ainsi que la mise en place d'une base de données via SQL.
            </p>
            <p>
              Pour commencer, les dépendances nécessaires au fonctionnement de
              l'application ont été ajoutées à Gradle, telles que Spring,
              Hibernate et SQL. Ensuite, les différentes couches composant le
              back-end ont été mises en place, commençant par la couche objet
              'Business Object (bo)' avec représentation sous forme d'objets des
              données, liées à des annotations permettant de gérer les tables de
              la base de données. Puis la couche 'Data Access Objects (DAO)' a
              été mise en place via des interfaces héritant des classes
              JpaRepository de Spring Data, en lien avec les objets de la couche
              'Business Object (bo)'.
            </p>
            <p>
              Ensuite, les méthodes de traitement de métier sont établies dans
              la couche 'Controller (controller)' permettant de lier les URL via
              des annotations à des méthodes utilisant Model And View, qui va
              créer un objet MAV renvoyant un couple clé-valeur pour la vue
              (donc les JSP).
            </p>
            <p>
              Enfin, l'internationalisation (i18n) a été mise en place dans la
              couche 'Controller (controller)' en utilisant le résolveur de
              session locale. Lorsqu'un utilisateur change la langue, le
              contrôleur met à jour la langue locale par défaut, ce qui permet
              de charger les ressources dans la langue choisie.
            </p>
          </div>
          <div className="caps2">
            <h2>Résultat du projet :</h2>
            <p>
              Les fonctionnalités attendues sont opérationnelles : le CRUD
              (Create, Read, Update et Delete) permet aux utilisateurs de créer
              les données des films et de les manipuler. Les fonctions de tri et
              de recherche permettent une meilleure expérience utilisateur.
            </p>
            <p>
              Le développement en couche a permis une séparation claire des
              responsabilités au sein de l'application, facilitant la
              maintenance et l'évolution du projet. L'utilisation de Spring Data
              a permis une gestion efficace des accès aux données, simplifiant
              les opérations de CRUD et optimisant les performances. De plus,
              l'intégration de Spring MVC a facilité la mise en place du modèle
              MVC, assurant une transmission fluide et sécurisée des
              informations entre le back-end et le front-end.
            </p>
            <p>
              L'internationalisation est pleinement opérationnelle, offrant aux
              utilisateurs la possibilité de naviguer sur le site en français et
              en anglais.
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
