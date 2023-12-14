import "../styles/Skills.css";

function Skills() {
  return (
    <div id="skillsSection">
      <div className="main-ctn2">
        <div className="skills-column">
          <div className="ctn-skill">
            <h2>Back End</h2>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>MongoDB</p>
          </div>
          <div className="ctn-skill">
            <h2>Front End</h2>
            <p>HTML & CSS</p>
            <p>SCSS</p>
            <p>JavaScript Vanilla</p>
            <p>React</p>
            <p>Vercel</p>
            <p>Optimisation SEO</p>
          </div>
          <div className="ctn-skill">
            <h2>Design</h2>
            <p>Figma</p>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>Blender</p>
            <p>ThreeJS</p>
          </div>
        </div>
        <div className="Citation">
          <p>
            Récément diplomé d'un Titre professionnel de Développeur /
            Intégrateur Web, je cherche à augmenter mes compétences via une
            formation en alternance dans le webdesign / webmarketing via 3W
            Academy. La formation est d'une durée de 16 mois avec comme rythme
            d'alternance : 3 semaines entreprise / 1 semaine école.
          </p>
          <span>Nicolas Vivier.</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
