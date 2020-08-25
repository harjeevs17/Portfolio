import React from "react";
import "../css/common.css";
import "../css/Skill.css";
import { FaNode, FaReact, FaHtml5, FaPhp } from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript, SiLinux } from "react-icons/si";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";
const Skills = () => {
  const scaleSize = {
    scale: 0.9,
  };
  return (
    <div>
      <Slide bottom>
        <div className="main">
          <h1 class="section_title">Skills</h1>
          <div className="container">
            <motion.div whileHover={scaleSize} className="skill">
              <FaNode size={100} />
            </motion.div>
            <motion.div whileHover={scaleSize} className="skill">
              <FaReact size={100} />
            </motion.div>
            <motion.div whileHover={scaleSize} className="skill">
              <SiMongodb size={100} />
            </motion.div>
            <motion.div whileHover={scaleSize} className="skill">
              <FaHtml5 size={100} />
            </motion.div>
            <motion.div whileHover={scaleSize} className="skill">
              <FaPhp size={100} />
            </motion.div>
            <motion.div whileHover={scaleSize} className="skill">
              <SiMysql size={100} />
            </motion.div>
            <motion.div whileHover={scaleSize} className="skill">
              <SiJavascript size={100} />
            </motion.div>

            <motion.div whileHover={scaleSize} className="skill">
              <SiLinux size={100} />
            </motion.div>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Skills;
