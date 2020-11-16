import React from "react";
import { Divider, Image } from "semantic-ui-react";

const Projects = () => (
  <div>
    <Divider hidden />
    <Image.Group size="medium">
      <h1>Trivia</h1>
      <Image src="/images/card.jpg" as="a" href="https://trivia.eric-santos.vercel.app/" />
    </Image.Group>
    <Image.Group size="medium">
      <h1>Coco Loko</h1>
      <Image src="/images/fishSm.jpg" as="a" href="https://cocolokoep.com" />
      <h1>Node Auth</h1>
      <Image
        src="/images/openSmall.jpg"
        as="a"
        href="https://github.com/eric-santos/node-auth1-project"
      />
      <h1>Intro to Python</h1>
      <Image
        src="/images/pythonSmall.jpg"
        as="a"
        href="https://github.com/eric-santos/Intro-Python-I/tree/eric-santos"
      />
    </Image.Group>
  </div>
);

export default Projects;
