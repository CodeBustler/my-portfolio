import { useState } from "react";
import HeroSection from "./components/HeroSection";
import PastWork from "./components/PastWork";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <HeroSection />
      <Projects />
      <PastWork />
    </>
  );
}

export default App;
