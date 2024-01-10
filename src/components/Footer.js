import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Linkedin from "../assets/logo-linkedin.png";
import Github from "../assets/logo-github.png";

function Footer() {
  return (
    <div className="Footer">
      <h2>Design et développement par Nicolas Vivier</h2>
      <p>Tous droits réservés © 2023</p>
      <div className="legal-btn">
        <Link className="legal" to="/mentions-legales">
          Mentions légales
        </Link>
      </div>
      <div className="logo-ctn">
        <Link to="https://www.linkedin.com/in/nicolas-vivier-web-dev/">
          <img className="logo" src={Linkedin} alt="Logo Linkedin"></img>
        </Link>
        <Link to="https://github.com/VivieRn">
          <img className="logo" src={Github} alt="Logo Github"></img>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
