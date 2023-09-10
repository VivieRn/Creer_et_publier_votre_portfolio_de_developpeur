import "../styles/Skills.css";
import skillsImage from "../assets/image_2.png";

function Skills() {
  return (
    <div id="skillsSection">
      <div className="Header-ctn">
        <div className="Header2">
          <h1>Mes compétences</h1>
          <p>Technologies maitrisé à votre disposition</p>
        </div>
      </div>
      <div className="main-ctn2">
        <div className="skills-column">
          <div className="ctn-skill">
            <h2>Back End</h2>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>Brevo</p>
            <p>MonoDB</p>
            <p>Google reCaptcha</p>
          </div>
          <div className="img-ctn">
            <img src={skillsImage} alt="Description"></img>
          </div>
          <div className="ctn-skill">
            <h2>Front End</h2>
            <p>HTML & CSS</p>
            <p>JavaScript Vanilla</p>
            <p>React</p>
            <p>Sass</p>
            <p>Optimisation SEO</p>
          </div>
        </div>
        <div className="Citation">
          <p>
            Bonjour ! <br />
            Moi c'est Nicolas, développeur web fullstack. Aupavant j'ai efféctué
            plusieurs années dans l'hôtellerie, où mes compétences et mon sens
            du relationnelle mon permis d'être chef de réception.
          </p>
          <p>
            Je met désormais mes connaissances et mon expertise du relationnel
            client allié à mes compétences technique de développeur fullstack au
            service du développement web, qui a toujours été un centre
            d'intérêt.
          </p>
          <span>Nicolas Vivier.</span>
        </div>
      </div>
      <div className="Footer2">
        <h2>Mes travaux</h2>
        <i className="fa fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default Skills;
