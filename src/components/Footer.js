import "../styles/Footer.css";
import Linkedin from "../assets/logo-linkedin.png";
import Github from "../assets/logo-github.png";

function Footer() {
  return (
    <div className="Footer">
      <h2>Développé par Nicolas Vivier</h2>
      <a className="legal" href="/mentions-légales">
        Mentions légales
      </a>
      <p>Tous droits réservés © 2023</p>
      <div className="logo-ctn">
        <a href="https://www.linkedin.com/in/nicolas-vivier-web-dev/">
          <img className="logo" src={Linkedin} alt="Logo Linkedin"></img>
        </a>
        <a href="https://github.com/VivieRn">
          <img className="logo" src={Github} alt="Logo Github"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
