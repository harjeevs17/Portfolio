import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Fade from "react-reveal/Fade";
const Contact = () => {
  return (
    <Fade>
      <div className="contactContainer">
        <h1 class="section_title">Contact me</h1>
        <div className="socials">
          <div className="socialIcons">
            <a target="_blank" href="https://github.com/harjeevs17">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="socialIcons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/harjeev-singh-96a71013a/"
            >
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Contact;
