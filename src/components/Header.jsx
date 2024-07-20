import { Link } from "react-router-dom";
import "./styles/Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <Link to="/">DZHosting</Link>
          <Link to="web_design">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
