import "../styles/Contact.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { sendMessage } from "./sendMessage";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    if (!email || !subject || !message) {
      alert("Veuillez remplir tous les champs avant de soumettre.");
      return;
    }

    if (!executeRecaptcha) {
      console.log("Recaptcha has not been loaded yet.");
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");

      sendMessage(new FormData(event.target), token, navigate);
    } catch (error) {
      console.error("Recaptcha error:", error);
      alert("Erreur lors du traitement du formulaire. Veuillez réessayer.");
    }
  };

  return (
    <div id="contactSection">
      <Header
        title="Me contacter"
        subtitle="La transformation commence"
        showLogo={false}
      />

      <div className="contact">
        <form
          action="/send-email"
          method="post"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <h2>Passez à la vitesse supérieure dès aujourd'hui !</h2>
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
              placeholder="Optimisation de mon site ... | Je n'ai pas de site ... "
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
              placeholder="Décrivez qui vous êtes, votre besoin et vos idées."
            ></textarea>
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
      <Footer
        title="Design & developemment by Nicolas Vivier"
        showArrow={false}
      />
    </div>
  );
}

export default Contact;
