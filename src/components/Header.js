import Logo3D from "./Logo3D.js";
import SideBar from "./SideBar";
import "../styles/Header.css";

function Header({ title, subtitle, showLogo, showSideBar }) {
  return (
    <div className="Header-ctn">
      <div className="Header">
        <div className="logo3D">
          {showLogo && <Logo3D />}
          <h1>{title}</h1>
        </div>
        <p>{subtitle}</p>
      </div>
      {showSideBar && <SideBar />}
    </div>
  );
}

export default Header;
