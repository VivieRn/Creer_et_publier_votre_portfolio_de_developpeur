import "../styles/Skills.css";
import skillsImage from "../assets/image_2.webp";
import Header from "./Header";
import Footer from "./Footer";

function Skills() {
  return (
    <div id="skillsSection">
      <Header
        title="Mes compétences"
        subtitle="Technologies à votre disposition"
        showLogo={false}
      />
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
          <div className="img-skill">
            <img
              src={skillsImage}
              alt="Image symbolisant le développement"
            ></img>
          </div>
          <div className="ctn-skill">
            <h2>Front End</h2>
            <p>HTML & CSS</p>
            <p>JavaScript Vanilla</p>
            <p>React</p>
            <p>Blender</p>
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
          <span>Nicolas Vivier.</span>
        </div>
      </div>
      <Footer title="Mes travaux" showArrow={true} />
    </div>
  );
}

export default Skills;
