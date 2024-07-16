import { Link } from "react-router-dom";
import "./styles/Header.scss";

const Header = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/">DZHosting</Link>
          <Link to="web_design">Web Design</Link>
          <Link to="/domain_email">Domaine & Email</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
