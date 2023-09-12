import Logo3D from "./Logo3D.js";
import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";

function NotFound({ setIsNotFound }) {
  React.useEffect(() => {
    setIsNotFound(true);

    return () => {
      setIsNotFound(false);
    };
  }, [setIsNotFound]);
  return (
    <div>
      <div className="Header-ctn">
        <div className="Header">
          <div className="logo3D">
            <Logo3D />
            <h1>Developpeur fullstack freelance</h1>
          </div>
          <p>Créateur de site web sur mesure</p>
        </div>
      </div>
      <div className="NotFound-ctn">
        <div className="NotFound">
          <h1>404</h1>
          <p>La page que vous demandez n'esxiste pas.</p>
          <a href="/">Retour à l'accueil</a>
        </div>
      </div>
      <div className="Footer">
        <h2>Design & développement par Nicolas Vivier.</h2>
      </div>
    </div>
  );
}

export default NotFound;
