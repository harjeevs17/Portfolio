import React from "react";
import "../css/Projects.css";
import "../css/common.css";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
const Projects = () => {
  const transition = {
    duration: 0.2,
    type: "tween",
    ease: "easeOut",
  };
  const hover = {
    y: -10,
    transition: { transition },
  };
  return (
    <Fade>
      <div className="project_container">
        <h1 class="section_title">Projects</h1>
        <div className="projects">
          <div className="showcase">
            <motion.div
              whileHover={hover}
              initial={{ x: 0 }}
              whileTap={{ scale: 0.9 }}
              className="content"
            >
              <p className="title">Covid Tracker</p>
              <p className="description">
                A Web app that displays the current covid stats from all around
                the world
              </p>
              <p className="tech">React Js</p>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/harjeevs17/covid-dashboard"
                >
                  Github
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://harjeevs17.github.io/covid-dashboard/"
                >
                  View Site
                </a>
              </button>
            </motion.div>
          </div>
          <div className="showcase">
            <motion.div
              whileHover={hover}
              initial={{ x: 0 }}
              whileTap={{ scale: 0.9 }}
              className="content"
            >
              <p className="title">Popcorn</p>
              <p className="description">
                A mobile app that keeps a track of all movies,books and Tv shows
                you have watched
              </p>
              <p className="tech">React Native &bull; Node Js &bull; Mongo</p>
              <button>
                <a target="_blank" href="https://github.com/harjeevs17/popcorn">
                  Github
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://appetize.io/app/qmvuj7dccka5t134zagtp115gw?device=nexus5&scale=75&orientation=portrait&osVersion=10.0"
                >
                  View App
                </a>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="projects">
          <div className="showcase">
            <div className="content">
              <p className="title">Instagram</p>
              <p className="description">
                A simple Instagram clone built using the MERN stack.
              </p>
              <p className="tech">React Js</p>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/harjeevs17/instagram-frontend"
                >
                  Github
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://harjeevs17.github.io/instagram-frontend/"
                >
                  View Site
                </a>
              </button>
            </div>
          </div>
          <div className="showcase">
            <motion.div
              whileHover={hover}
              initial={{ x: 0 }}
              whileTap={{ scale: 0.9 }}
              className="content"
            >
              <p className="title">Instagram Backend</p>
              <p className="description">
                The backend application for the Instagram clone
              </p>
              <p className="tech">Node Js &bull; MongoDB</p>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/harjeevs17/instagram"
                >
                  Github
                </a>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="projects">
          <div className="showcase">
            <motion.div
              whileHover={hover}
              initial={{ x: 0 }}
              whileTap={{ scale: 0.9 }}
              className="content"
            >
              <p className="title">Instagram message bot</p>
              <p className="description">
                A python bot that sends message to a desired user
              </p>
              <p className="tech">Python</p>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/harjeevs17/instagramMessageBot"
                >
                  Github
                </a>
              </button>
            </motion.div>
          </div>
          <div className="showcase">
            <motion.div
              whileHover={hover}
              initial={{ x: 0 }}
              whileTap={{ scale: 0.9 }}
              className="content"
            >
              <p className="title">Flipkart Scrapper</p>
              <p className="description">
                A website scrapper that fetches basic details from a flipkart's
                product page
              </p>
              <p className="tech">Python</p>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/harjeevs17/FlipkartScrapper"
                >
                  Github
                </a>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Projects;
