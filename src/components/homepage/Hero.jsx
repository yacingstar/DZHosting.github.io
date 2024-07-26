import "./style/Hero.scss";
import heroImage from "../../assets/hero_image.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content text-center">
          <h1 className="font-roboto-serif font-bold text-h1 text-secondary">
            Reussissez en ligne <br />
            avec un site web mouaaaad hello
          </h1>
          <p className="font-roboto-sans text-body text-secondary">
            La marque d’un professionel
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
