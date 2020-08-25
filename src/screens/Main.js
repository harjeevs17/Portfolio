import React from "react";
import "../css/common.css";
import "../css/Main.css";
import Scramble from "react-scramble";

const Main = () => {
  return (
    <div className="main">
      <h1 class="intro">Hi There!</h1>
      <h2 class="desc">
        My name is &nbsp;
        <Scramble
          style={{ backgroundColor: "transparent" }}
          autoStart
          text="Harjeev Singh"
          steps={[
            {
              roll: 10,
              action: "+",
              type: "all",
            },
            {
              action: "-",
              type: "forward",
            },
          ]}
        />{" "}
        , I'm a Full Stack Developer
      </h2>
    </div>
  );
};

export default Main;
