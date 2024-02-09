import { useState } from "react";
import HeroSection from "./components/HeroSection";
import PastWork from "./components/PastWork";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      {/*<Projects />*/}
      {/*<PastWork />*/}
      <Skills />
      <Testimonials />
      <HireMe />
    </>
  );
}

export default App;
