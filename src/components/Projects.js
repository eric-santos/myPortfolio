import React from "react";

import "./styles/Projects.css";
import { Card, Icon, Image } from "semantic-ui-react";

const Projects = () => {
  return (
    <Card.Group centered>
      <Card color="brown">
        <Image src="images/fishSm.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Coco Loko</Card.Header>
          <Card.Meta>October 2020</Card.Meta>
          <Card.Description>
            Created for a friend of mine who owns local El Paso Seafood Restaurant. Mainly to
            display the menu in case the local officials required it. Using React, Code Splitting,
            React Router.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://cocolokoep.com">
            <Icon name="address card" />
          </a>
        </Card.Content>
      </Card>

      <Card color="brown">
        <Image src="images/pixify.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Pixify</Card.Header>
          <Card.Meta>August 2020</Card.Meta>
          <Card.Description>
            Created to display beautiful Pexels pictures while I listened to music and cleaned.
            React, Axios, and React-Router.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/eric-santos/pixifys">
            <Icon name="github" />
          </a>
        </Card.Content>
      </Card>

      <Card color="brown">
        <Image src="images/openSmall.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Node Authentication</Card.Header>
          <Card.Meta>April 2020</Card.Meta>
          <Card.Description>
            Created to authenticate a user or admin using in Node.js, Express Middleware, Password
            Hashing, Sessions, or Cookies.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/eric-santos/node-auth1-project">
            <Icon name="github" />
          </a>
        </Card.Content>
      </Card>
      <Card color="brown">
        <Image src="images/pythonSmall.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Intro to Python</Card.Header>
          <Card.Meta>Sept. 2020</Card.Meta>
          <Card.Description>Exploring how to learn a new language</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/eric-santos/Intro-Python-I/tree/eric-santos">
            <Icon name="github" />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default Projects;
