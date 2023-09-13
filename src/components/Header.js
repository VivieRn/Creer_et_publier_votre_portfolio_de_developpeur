import Logo3D from "./Logo3D.js";
import "../styles/Header.css";

function Header({ title, subtitle, showLogo }) {
  return (
    <div className="Header-ctn">
      <div className="Header">
        <div className="logo3D">
          {showLogo && <Logo3D />}
          <h1>{title}</h1>
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Header;
