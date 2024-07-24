import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Web_Design from "./pages/Web_Design";
import DomaineEmail from "./pages/DomaineEmail";
const App = () => {
  return (
    <Router>
      <section className="bg-primary">
        <div className="content-wrapper">
          <Header />
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/web_design" element={<Web_Design />} />
        <Route path="/domain_email" element={<DomaineEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
