import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function EmailSuccess() {
  return (
    <div>
      <Header
        title="Développeur frontend freelance"
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
        showSideBar={false}
      />
      <div className="email-ctn">
        <div className="email-card">
          <div className="email">
            <h1>Message envoyé avec succès !</h1>
            <p>Vous serez recontacté dans les 48 heures, à très vite !</p>
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

export default EmailSuccess;
