import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

function Header() {
  const titlesRef = useRef([
    "Développeur Web",
    "Designer Web",
    "Nicolas VIVIER",
  ]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentString = titlesRef.current[index];
    let displayTitle = "";

    const typingInterval = setInterval(() => {
      if (displayTitle.length < currentString.length) {
        displayTitle += currentString[displayTitle.length];
        setCurrentTitle(displayTitle);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % titlesRef.current.length);
        }, 4000); // Temps d'attente avant de passer au titre suivant
      }
    }, 100); // Vitesse de frappe

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div className="Header-ctn">
      <div className="Header">
        <h1 className="animated-title">{currentTitle}</h1>
        <p>Cherche contrat de professionnalisation</p>
      </div>
    </div>
  );
}

export default Header;
