import { Link } from "react-router-dom";
import "../styles/optimisationSeo.css";
import CAVE from "../assets/works/cave.webp";

function OptimisationSeo() {
  return (
    <div className="seo-ctn">
      <div className="card-seo">
        <div className="title">
          <h1>Cave à vin Java</h1>
          <p>
            <strong>Projet réalisé pour l'ENI.</strong>
          </p>
        </div>
        <img
          src={CAVE}
          alt="Capture d'écran du site de gestion de cave à vin."
          loading="lazy"
          className="seo-img"
        ></img>
        <div className="seo-link">
          <Link
            to="https://github.com/VivieRn/Gestion-cave-a-vin-JAVA"
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
              Site de gestion de cave à vin, permettant l'ajout de bouteilles,
              la visualisation du stock de bouteilles, de trier les bouteilles
              en stock, de les modifier et de les supprimer.
            </p>
            <p>
              Ce projet a nécessité la mise en place du back-end via Java,
              Spring Data, et Spring Web en corrélation avec le front-end créé à
              l'avance via des JSP et en utilisant Bootstrap pour la mise en
              forme, ainsi que la mise en place d'une base de données via SQL.
            </p>
            <p>
              Pour commencer, les dépendances nécessaires au fonctionnement de
              l'application ont été ajoutées à Gradle, telles que Spring,
              Hibernate et SQL. Ensuite, les différentes couches composant le
              back-end ont été mises en place commençant par la couche objet
              'Bean (bean)' avec représentation sous forme d'objets des données,
              liées à des annotations permettant de gérer les tables de la base
              de données. Puis la couche 'Data Access Objects (DAO)' a été mise
              en place via des interfaces héritant des classes JpaRepository de
              Spring Data, en lien avec les objets de la couche 'Bean'.
            </p>
            <p>
              Ensuite, les méthodes de traitement de métier sont établies dans
              la couche 'Service' en injectant par annotation les interfaces de
              la couche 'Data Access Objects (DAO)', permettant donc la mise en
              place du CRUD ainsi que les fonctionnalités de tri et de
              recherche.
            </p>
            <p>
              Enfin, la couche permettant la transmission des informations du
              back-end vers le front-end est mise en place via la couche
              'Servlet (servlet)'. Cette couche permet, toujours via annotation,
              de gérer les URL et les éléments qui vont la composer.
            </p>
          </div>
          <div className="caps2">
            <h2>Résultat du projet :</h2>
            <p>
              Les fonctionnalités attendues sont opérationnelles : le CRUD
              (Create, Read, Update et Delete) permet aux utilisateurs de créer
              les données des bouteilles et de les manipuler. Et les fonctions
              de tri et de recherche permettent une meilleure expérience
              utilisateur.
            </p>
            <p>
              Le développement en couche a permis une séparation claire des
              responsabilités au sein de l'application, facilitant la
              maintenance et l'évolution du projet. L'utilisation de Spring Data
              a permis une gestion efficace des accès aux données, simplifiant
              les opérations de CRUD et optimisant les performances. De plus,
              l'intégration de Spring Web a facilité la création de servlets
              pour la communication entre le back-end et le front-end, assurant
              une transmission fluide et sécurisée des informations.
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
