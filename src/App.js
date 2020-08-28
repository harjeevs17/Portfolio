import React from "react";
import "./App.css";
import Main from "./screens/Main";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Particles from "react-particles-js";
function App() {
  return (
    <div className="App">
      <Particles />
      <Main />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
