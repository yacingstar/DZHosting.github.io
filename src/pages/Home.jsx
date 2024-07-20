import Footers from "../components/Footers";
import Benefits from "../components/homepage/Benefits";
import Contact from "../components/homepage/Contact";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      {/* Services */}
      <Services />
      {/* Portfolio */}
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footers />
    </>
  );
};

export default Home;
