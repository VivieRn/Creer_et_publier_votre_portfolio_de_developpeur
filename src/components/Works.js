import "../styles/Works.css";

function Works() {
  return (
    <div id="worksSection">
      <div className="Header-ctn">
        <div className="Header3">
          <h1>Mes Travaux</h1>
          <p>Aperçu des projets que j'ai réalisé.</p>
        </div>
      </div>
      <div className="grid-ctn">
        <div className="works-grid">
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
        </div>
      </div>
      <div className="Footer3">
        <h2>Contact</h2>
        <i className="fa fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default Works;
