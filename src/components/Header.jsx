import React from "react";
import "./styles/Header.scss";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <nav className="flex justify-between items-center p-4 w-full">
        <button
          onClick={() => scrollToSection("home")}
          className="font-abril text-secondary text-2xl"
        >
          DZHOSTING
        </button>
        <div className="flex space-x-10">
          <button
            onClick={() => scrollToSection("whyus")}
            className="font-roboto text-secondary text-lg"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="font-roboto text-secondary text-lg"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-roboto text-secondary text-lg"
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
