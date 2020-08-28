import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <Menu secondary>
      <Menu.Item>
        <Link to="/">
          <h4 className="nav-text">Home</h4>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">
          <h4 className="nav-text">About</h4>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
