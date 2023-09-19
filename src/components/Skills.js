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
        showSideBar={true}
      />
      <div className="main-ctn2">
        <div className="skills-column">
          <div className="ctn-skill">
            <h2>Back End</h2>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>MongoDB</p>
          </div>
          <div className="img-skill">
            <img src={skillsImage} alt="Symbolise le développement"></img>
          </div>
          <div className="ctn-skill">
            <h2>Front End</h2>
            <p>HTML & CSS</p>
            <p>SCSS</p>
            <p>JavaScript Vanilla</p>
            <p>React</p>
            <p>Vercel</p>
            <p>Optimisation SEO</p>
            <p>Blender & ThreeJS</p>
          </div>
        </div>
        <div className="Citation">
          <p>
            Spécialisés dans la création de sites web hautement performants et
            responsive, conçus pour propulser votre entreprise vers de nouveaux
            sommets. Mes services sont conçus pour répondre aux besoins
            spécifiques de chaque client, garantissant ainsi une solution
            parfaitement adaptée.
          </p>
          <span>Nicolas Vivier.</span>
        </div>
      </div>
      <Footer title="Mes travaux" showArrow={true} />
    </div>
  );
}

export default Skills;
