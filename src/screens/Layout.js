import React from "react";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Particles from "react-particles-js";
const Layout = () => {
  return (
    <>
      <Particles />
      <Main />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};
export default Layout;
