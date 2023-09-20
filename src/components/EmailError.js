import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function EmailError() {
  return (
    <div>
      <Header
        title="Développeur frontend freelance"
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
        showSideBar={false}
      />
      <div className="NotFound-ctn">
        <div className="card">
          <div className="NotFound">
            <h1>Erreur lors de l’envoi du message.</h1>
            <p>
              Une erreur s'est produite, mais ce n'est pas la fin de l'aventure
              pour autant !
            </p>
            <a href="/">Retour à l'accueil</a>
          </div>
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
