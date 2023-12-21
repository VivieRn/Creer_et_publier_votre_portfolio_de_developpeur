import "../styles/Intro.css";
import "../styles/NotFound.css";

function EmailSuccess() {
  return (
    <div className="email-ctn">
      <div className="email-card">
        <div className="email">
          <h1>Message envoyé avec succès !</h1>
          <p>Vous serez recontacté dans les 48 heures, à très vite !</p>
        </div>
      </div>
    </div>
  );
}

export default EmailSuccess;
