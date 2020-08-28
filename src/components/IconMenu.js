import React from "react";
import { Icon } from "semantic-ui-react";

import "./styles/IconMenu.css";

const IconMenu = () => (
  <div className="abs-left">
    <a href="https://www.instagram.com/eric.codes/">
      <Icon name="instagram" size="large" className="icon" />
    </a>
    <br />
    <a href="https://github.com/eric-santos">
      <Icon name="github" size="large" className="icon" />
    </a>
    <br />
    <a href="https://twitter.com/ericsantos915">
      <Icon name="twitter" size="large" className="icon" />
    </a>
  </div>
);

export default IconMenu;
