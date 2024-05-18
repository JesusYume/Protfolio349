// File 

import React from "react";
import Navbar from "./NavBar/navbar";
import Intro from "./Intro/intro";
import Skills from './Skills/skills';
import Projects from "./Projects/project";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
