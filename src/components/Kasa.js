import { Link } from "react-router-dom";
import "../styles/optimisationSeo.css";
import KASA from "../assets/works/kasa.webp";

function OptimisationSeo() {
  return (
    <div className="seo-ctn">
      <div className="card-seo">
        <div className="title">
          <h1>Kasa React App</h1>
          <p>
            <strong>Projet réaliser pour OpenClassrooms.</strong>
          </p>
        </div>
        <img
          src={KASA}
          alt="Screen shot du site web créé via React, Kasa."
          loading="lazy"
          className="seo-img"
        ></img>
        <div className="seo-link">
          <Link
            to="https://viviern.github.io/Kasa_React/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            className="seo-btn"
          >
            Accéder au site web
          </Link>
          <Link
            to="https://github.com/VivieRn/Kasa_React"
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
              Ce projet a nécessité le développement de Kasa via React depuis
              zéro, en suivant la maquette Figma pour le design, et en
              manipulant les données fournies de 20 logements différents.
            </p>
            <p>
              Pour commencer, les modules principaux ont été créés, tels que le
              Header, le Footer, etc., auxquels nous lions les routes de
              l'application. Ainsi, chaque route utilise les modules qui lui
              sont nécessaires. Les ID des logements, disponibles dans les
              données, sont utilisés afin de générer dynamiquement les routes
              des logements.
            </p>
            <p>
              Les pages dédiées aux logements contiennent une galerie photo,
              permettant de naviguer entre les différentes photos du logement en
              affichant le numéro de la photo actuelle. Les informations
              relatives au logement sont accessibles via des boîtes
              collapsibles, qui s'ouvrent donc au clic.
            </p>
            <p>
              Enfin, l'application Kasa a été développée de manière à être
              responsive. Dans ce but, seules des unités responsives ont été
              utilisées, permettant à l'application de s'adapter parfaitement
              aux desktops, tablettes et mobiles.
            </p>
          </div>

          <div className="caps2">
            <h2>Résultat du projet :</h2>
            <p>Projet validé avec succès.</p>
            <p>
              La refonte de Kasa en utilisant React est réussie et permet
              facilement de mettre en place d'innombrables routes. La bonne
              manipulation des données a permis de mettre en place une galerie
              photos et de faire ressortir les informations nécessaires sur les
              pages des logements.
            </p>
            <p>
              L'adaptation responsive est également fonctionnelle. Nous pouvons
              accéder à Kasa depuis une tablette ou un smartphone sans problème
              de performance.
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
