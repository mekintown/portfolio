import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <section id="skills" className="h-screen bg-blue-300">
        <h2 className="text-center">Skills Section</h2>
      </section>
      <section id="contact" className="h-screen bg-green-300">
        <h2 className="text-center">Contact Section</h2>
      </section>
    </div>
  );
};

export default App;
