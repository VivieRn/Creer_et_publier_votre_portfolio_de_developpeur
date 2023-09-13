import "font-awesome/css/font-awesome.min.css";
import "../styles/Footer.css";

function Footer({ title, showArrow }) {
  return (
    <div className="Footer">
      <h2>{title}</h2>
      {showArrow && <i className="fa fa-arrow-down"></i>}
    </div>
  );
}

export default Footer;
