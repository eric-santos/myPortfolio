import React from "react";

import "./styles/Projects.css";
import { Card, Icon, Image } from "semantic-ui-react";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Card.Group centered>
        <Card color="brown">
          <Image src="images/pythonSmall.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>Python</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/eric-santos">
              <Icon name="github" />
            </a>
          </Card.Content>
        </Card>

        <Card color="brown" link>
          <Image src="images/reactSmall.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>React</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/eric-santos">
              <Icon name="github" />
            </a>
          </Card.Content>
        </Card>

        <Card color="brown" link>
          <Image src="images/openSmall.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>Node Authentication</Card.Header>
            <Card.Meta>April 2020</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/eric-santos/node-auth1-project">
              <Icon name="github" />
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Projects;
