import "../src/styles/fonts.css";
import Navbar from "./App/sections/Navbar";
import Hero from "./App/sections/Hero";
import AboutMe from "./App/sections/AboutMe";
import Services from "./App/sections/Services";
import Portfolio from "./App/sections/Porfolio";
import Contact from "./App/sections/Contact";
import Footer from "./App/sections/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fff", color: "#1a1a2e", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
