import "../styles/Contact.css";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div id="contactSection">
      <div className="Header-ctn">
        <div className="Header4">
          <h1>Me contacter</h1>
          <p>Vous avez des questions ? Un projet ? Demandez !</p>
        </div>
      </div>
      <div className="contact">
        <form
          action="/send-email"
          method="post"
          id="contactForm"
          onSubmit={handleSubmit}
        >
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
              placeholder="Entrez le sujet de votre message."
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
              placeholder="Rédigez votre message ici."
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
      <div className="Footer4">
        <h2>Design & développement par Nicolas VIVIER</h2>
      </div>
    </div>
  );
}

export default Contact;
