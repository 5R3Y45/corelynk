import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CoreValues } from "./components/CoreValues";
import { Services } from "./components/Services";
import { SelectedWorks } from "./components/SelectedWorks";
import { Team } from "./components/Team";
import { HowWeWork } from "./components/HowWeWork";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1d23] text-white relative fog-overlay">
      <div className="grain-texture" />

      <Header />

      <Hero />
      <About />
      <CoreValues />
      <Services />
      <SelectedWorks />
      <Team />
      <HowWeWork />
      <Contact />

      <Footer />
    </div>
  );
}
