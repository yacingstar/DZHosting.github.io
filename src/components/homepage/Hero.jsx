import "./style/Hero.scss";
import heroImage from "../../assets/hero_image.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="font-sans">Reussissez en ligne avec un site web</h1>
          <p>La marque d’un professionel</p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
