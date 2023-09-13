import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function NotFound({ setIsNotFound }) {
  React.useEffect(() => {
    setIsNotFound(true);

    return () => {
      setIsNotFound(false);
    };
  }, [setIsNotFound]);
  return (
    <div>
      <Header
        title="Développeur fullstack freelance"
        subtitle="Créateur de site web sur mesure"
        showLogo={true}
      />
      <div className="NotFound-ctn">
        <div className="NotFound">
          <h1>404</h1>
          <p>La page que vous demandez n'esxiste pas.</p>
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
