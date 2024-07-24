import Footers from "../components/Footers";
import Benefits from "../components/homepage/Benefits";
import Contact from "../components/homepage/Contact";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/Services";
import "./style/Home.scss";
import WaveDivider from "../assets/wave.svg";

const Home = () => {
  return (
    <>
      <div className="ssection">
        <Hero />
      </div>
      <div
        className="wave-divider w-screen h-[350px] bg-no-repeat bg-cover border border-green-500"
        style={{ backgroundImage: `url(${WaveDivider})` }}
      ></div>
      <div className="yessir">
        <div className="ssection2">
          {/* Benefits */}
          <Benefits />
          {/* Services */}
          <Services />
          {/* Portfolio */}
          {/* Contact */}
          <Contact />
          {/* Footer */}
          <Footers />
        </div>
      </div>
    </>
  );
};

export default Home;
