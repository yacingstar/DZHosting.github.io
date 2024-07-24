import Footers from "../components/Footers";
import Benefits from "../components/homepage/Benefits";
import Contact from "../components/homepage/Contact";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/Services";
import "./style/Home.scss";
import arrow from "../assets/arrow.svg";

const Home = () => {
  return (
    <>
      <section className="hero bg-primary pt-20 ">
        <div className="content-wrapper pb-8">
          <Hero />
          <center>
            <img className="pt-20" src={arrow} alt="Arrow pointing down" />
          </center>
        </div>
        <div class="custom-shape-divider-top-1721850041">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="benefits bg-secondary pt-56">
        <div className="content-wrapper">
          <Benefits />
        </div>
      </section>

      <div className="content-wrapper">
        <Services />
      </div>
      <div className="content-wrapper">
        <Contact />
      </div>
      <div className="content-wrapper">
        <Footers />
      </div>
    </>
  );
};

export default Home;
