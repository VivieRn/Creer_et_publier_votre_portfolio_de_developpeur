import "../styles/Contact.css";
import React, { useState } from "react";
import { SendMessage } from "./sendMessage";
import { useNavigate } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Activer l'animation

    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    const displayError = () => {
      const errorElement = document.querySelector(".formError");
      if (errorElement) {
        errorElement.style.display = "block";
      }
    };

    if (!email || !subject || !message) {
      displayError();
      return;
    }

    if (!executeRecaptcha) {
      displayError();
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");
      SendMessage(new FormData(event.target), token, navigate);
    } catch (error) {
      displayError();
      return;
    } finally {
      setIsLoading(false); // Désactiver l'animation
    }
  };

  return (
    <div id="contactSection">
      <div className="contact">
        <form
          action="/send-email"
          method="post"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <h2>Mon profil vous intéresse ? Contactez moi !</h2>
          <div className="form-group">
            <label htmlFor="email">E-mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="recruteur@entreprise.job"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet :</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Proposition d'alternance. "
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="60"
              required
              placeholder="Présentation de votre entreprise et de l'offre d'alternance."
            ></textarea>
          </div>

          <div className="formError">
            <p>
              Une erreur est survenue, veuillez remplir tous les champs avant
              l'envoie.
            </p>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Envoyer"
              id="submitBtn"
              name="submitBtn"
            />
          </div>
          {isLoading && (
            <div className="loading-animation">
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
