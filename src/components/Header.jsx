import { Link } from "react-router-dom";
import "./styles/Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="flex justify-between items-center p-4 w-full">
          <Link to="/" className="font-abril text-secondary text-2xl">
            DZHOSTING
          </Link>
          <div className="flex space-x-10">
            <Link
              to="web_design"
              className="font-roboto text-secondary text-lg"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="font-roboto text-secondary text-lg"
            >
              Portfolio
            </Link>
            <Link to="/contact" className="font-roboto text-secondary text-lg">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
