import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function EmailSuccess() {
  return (
    <div>
      <Header
        title="Développeur fullstack freelance"
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
      />
      <div className="NotFound-ctn">
        <div className="NotFound">
          <h1>Message envoyé avec succès !</h1>
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

export default EmailSuccess;
