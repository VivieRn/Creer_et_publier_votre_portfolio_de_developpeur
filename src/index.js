import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    if (navigator.serviceWorker.controller) {
      return;
    } else {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(function (registration) {
          console.log(
            "ServiceWorker registration successful with scope:",
            registration.scope
          );
        })
        .catch(function (err) {
          console.log("ServiceWorker registration failed:", err);
        });
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
