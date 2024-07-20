import Benefits from "../components/homepage/Benefits";
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
      <div className="Contact">Contact Us</div>
    </>
  );
};

export default Home;
