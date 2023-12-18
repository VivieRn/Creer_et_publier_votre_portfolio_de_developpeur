import React, { useState, useEffect } from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < percentage) {
          return prev + 1; // Incrémente de 1 chaque fois
        } else {
          clearInterval(timer); // Arrête l'intervalle une fois la valeur cible atteinte
          return prev;
        }
      });
    }, 30); // Vitesse de l'animation

    return () => clearInterval(timer); // Nettoyer l'intervalle à la désactivation du composant
  }, [percentage]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${currentPercentage}%` }}>
        <span className="progress-text">{currentPercentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
