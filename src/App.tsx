import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section id="portfolio" className="h-screen bg-red-300">
        <h2 className="text-center">Portfolio Section</h2>
      </section>
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
