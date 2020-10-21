import React from "react";

import "./styles/Home.css";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <h1 className="centered">
        Eric Santos
        <br />
        Full Stack Developer
      </h1>
      <Projects />
    </div>
  );
};

export default Home;
