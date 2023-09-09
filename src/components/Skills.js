import "../styles/Skills.css";

function Skills() {
  return (
    <div id="skillsSection">
      <div className="Header2">
        <h1>Mes compétences</h1>
      </div>
      <div className="skills-column">
        <div className="ctn-skill">
          <h2>Back End</h2>
          <p>Node JS</p>
          <p>Express JS</p>
          <p>Brevo</p>
          <p>MonoDB</p>
          <p>Google reCaptcha</p>
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
          Votre travail va remplir une grande partie de votre vie, et la seule
          façon d'être vraiment satisfait est de faire ce que vous croyez être
          un grand travail. Et la seule façon de faire un grand travail est
          d'aimer ce que vous faites. Si vous n'avez pas encore trouvé ce que
          vous aimez, continuez à chercher. Ne vous arrêtez pas. Comme pour
          toutes les affaires du cœur, vous saurez quand vous le trouverez.
        </p>
        <span>Steve Jobs.</span>
      </div>
      <div className="Footer2">
        <h2>Mes travaux</h2>
        <i className="fa fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default Skills;
