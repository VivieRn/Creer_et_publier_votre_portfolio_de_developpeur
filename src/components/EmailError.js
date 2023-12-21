import "../styles/email.css";

function EmailError() {
  return (
    <div className="email-ctn">
      <div className="email-card">
        <div className="email">
          <h1>Erreur lors de l’envoi du message.</h1>
          <p>
            Une erreur s'est produite, mais ce n'est pas la fin de l'aventure
            pour autant !
          </p>
          <a className="retry" href="/contact">
            Réessayer
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmailError;
