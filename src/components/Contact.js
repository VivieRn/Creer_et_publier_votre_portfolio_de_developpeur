import "../styles/Contact.css";
import React from "react";
import { sendMessage } from "./sendMessage";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    if (!email || !subject || !message) {
      const errorElement = document.querySelector(".formError");
      if (errorElement) {
        errorElement.style.display = "block";
      }
      return;
    }

    try {
      sendMessage(new FormData(event.target), navigate);
    } catch (error) {
      const errorElement = document.querySelector(".formError");
      if (errorElement) {
        errorElement.style.display = "block";
      }
      return;
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
              placeholder="Entrez votre e-mail."
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet :</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Mission Frontend ... "
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
              placeholder="Décrivez qui vous êtes, vos problématiques et vos besoins."
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
        </form>
      </div>
    </div>
  );
}

export default Contact;
