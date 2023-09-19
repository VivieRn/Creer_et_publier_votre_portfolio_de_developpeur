import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function NotFound() {
  return (
    <div>
      <Header
        title="Développeur frontend freelance"
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
        showSideBar={false}
      />
      <div className="NotFound-ctn">
        <div className="NotFound">
          <h1>404</h1>
          <p>La page que vous demandez n'existe pas.</p>
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

export default NotFound;
