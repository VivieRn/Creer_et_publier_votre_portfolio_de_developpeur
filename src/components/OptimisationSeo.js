import { Link } from "react-router-dom";
import "../styles/optimisationSeo.css";
import SEO from "../assets/works/SEO.webp";

function OptimisationSeo() {
  return (
    <div className="seo-ctn">
      <div className="card-seo">
        <div className="title">
          <h1>Optimisation SEO</h1>
          <p>
            <strong>Projet réaliser pour OpenClassrooms.</strong>
          </p>
        </div>
        <img
          src={SEO}
          alt="Screen shot du site web optimisé de Nina Carducci."
          loading="lazy"
          className="seo-img"
        ></img>
        <div className="seo-link">
          <Link
            to="https://viviern.github.io/Debugger_et_optimiser_un_site_de_photographe/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            className="seo-btn"
          >
            Accéder au site web
          </Link>
          <Link
            to="https://github.com/VivieRn/Debugger_et_optimiser_un_site_de_photographe"
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
            <h2>Amélioration technique du site :</h2>
            <p>
              Site vitrine de photographe, permettant aux internautes de
              retrouver les différents projets photographiques, les informations
              sur le professionnel et les services proposés.
            </p>
            <p>
              Ce projet a nécessité une révision des scripts qui le composent.
              En effet, il m'a fallu restructurer le code HTML qui comportait
              des incohérences et des manquements quant aux normes W3C.
            </p>
            <p>
              Ensuite, les fonctionnalités ont été rétablies ; le sélecteur de
              catégorie affiche désormais celle sélectionnée et affichée, et la
              visualisation de photos peut désormais se faire via une lightbox.
            </p>
            <p>
              Toutes les photos présentes sur le site ont été converties dans un
              format moderne et compatible pour le web. Elles ont également été
              compressées, tout en veillant à conserver une qualité graphique
              optimale.
            </p>
            <p>
              Des balises méta ont été ajoutées au HTML afin d'obtenir un
              meilleur référencement local ainsi que d'être plus visible sur les
              réseaux sociaux.
            </p>
            <p>
              Et enfin, une gestion sur mesure du cache de la page a été mise en
              place via l'ajout d'un script 'Service Worker'.
            </p>
          </div>
          <div className="caps2">
            <h2>Résultat du projet :</h2>
            <p>Projet validé avec succès.</p>
            <p>
              Les fonctionnalités attendues sont opérationnelles : le sélecteur
              de catégories est fonctionnel, permettant de trier les photos par
              catégories et d'afficher ces dernières dans une lightbox. Le code
              HTML & CSS a été validé par les validateurs du W3C. Les photos
              utilisent un format web récent et leur chargement est optimisé
              pour améliorer le temps de chargement de la page web.
            </p>
            <p>
              La note d'audit effectuée via Lighthouse est passée de 60 à 98 sur
              100 points, témoignant d'une augmentation considérable des
              performances de la page et contribuant ainsi à un meilleur
              référencement sur les moteurs de recherche. Quant à l'audit via
              Wave, il n'indique plus d'erreurs dans le code ou de problèmes de
              contraste sur la page.
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
