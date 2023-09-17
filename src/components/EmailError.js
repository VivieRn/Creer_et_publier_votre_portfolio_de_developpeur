import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function EmailError() {
  return (
    <div>
      <Header
        title="Développeur fullstack freelance"
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
      />
      <div className="NotFound-ctn">
        <div className="NotFound">
          <h1>Erreur lors de l’envoi du message.</h1>
          <a href="/">Retour à l'accueil</a>
        </div>
      </div>
      <Footer
        title="Design & developemment by Nicolas Vivier"
        showArrow={false}
      />
    </div>
  );
}

export default EmailError;
