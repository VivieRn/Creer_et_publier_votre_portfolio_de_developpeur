import "../styles/Intro.css";
import "../styles/NotFound.css";
import React from "react";

function NotFound() {
  return (
    <div>
      <div className="NotFound-ctn">
        <div className="card">
          <div className="NotFound">
            <h1>404</h1>
            <p>La page que vous demandez n'existe pas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
