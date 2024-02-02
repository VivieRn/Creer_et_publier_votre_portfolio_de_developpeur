import { Link } from "react-router-dom";
import "../styles/optimisationSeo.css";
import BACK from "../assets/works/back-end.webp";

function OptimisationSeo() {
  return (
    <div className="seo-ctn">
      <div className="card-seo">
        <div className="title">
          <h1>Back-end NodeJS</h1>
          <p>
            <strong>Projet réaliser pour OpenClassrooms.</strong>
          </p>
        </div>
        <img
          src={BACK}
          alt="Screen shot du site web optimisé de Nina Carducci."
          loading="lazy"
          className="seo-img"
        ></img>
        <div className="seo-link">
          <Link
            to="https://github.com/VivieRn/Developpez_le_back_end_d_un_site_de_notation_de_livres"
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
              Site communautaire littéraire permettant aux internautes d'ajouter
              leurs œuvres favorites et de noter les ouvrages présents.
            </p>
            <p>
              Ce projet a nécessité la mise en place du back-end via Node.js et
              Express.js, en corrélation avec le front-end créé à l'avance avec
              React, ainsi que la mise en place d'une base de données via
              MongoDB.
            </p>
            <p>
              Pour commencer, les modules principaux ont été créés, tels que le
              script serveur et le script d'application relié à la base de
              données, avec les routes correspondant au front-end. Ensuite, les
              modèles de données ont été mis en place pour les utilisateurs et
              les livres, ce qui a permis de créer les fonctions permettant de
              créer un compte, de se connecter, d'ajouter un livre et ses
              informations, de modifier les données d'un livre et de supprimer
              un livre.
            </p>
            <p>
              Des mesures de sécurité ont été mises en place, notamment la
              vérification qu'une adresse e-mail valide est utilisée, que le mot
              de passe choisi fasse au moins 12 caractères de long et qu'il ne
              soit jamais stocké, mais uniquement utilisé comme clé de hachage.
            </p>
            <p>
              Il y a également la génération et la gestion de JSON Web Token
              permettant de s'assurer de l'authenticité des requêtes pour
              l'ajout, la modification ou la suppression de livres. Il y a
              également un script permettant de vérifier les requêtes et de les
              bloquer en cas d'abus.
            </p>
            <p>
              Enfin, un logger a été mis en place pour suivre l'activité du site
              web. Il permet d'avoir accès à un journal de bord des événements
              avec diverses informations liées à un événement précis.
            </p>
          </div>
          <div className="caps2">
            <h2>Résultat du projet :</h2>
            <p>Projet validé avec succès.</p>
            <p>
              Les fonctionnalités attendues sont opérationnelles : le CRUD
              (Create, Read, Update et Delete) permet aux utilisateurs de créer
              les données de leurs comptes et des livres qu'ils ajoutent. Les
              normes de sécurité sont également présentes afin de protéger les
              données de l'utilisateur.
            </p>
            <p>
              Des fonctions de sécurité ont été ajoutées à des fins pédagogiques
              (non exigées pour la validation du projet). Ainsi, un logger a été
              mis en place pour suivre l'activité du site web en détail, ainsi
              que la vérification des requêtes et leur blocage si elles se
              révèlent anormalement élevées en provenance d'une même source.
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
