import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <Menu secondary>
      <Menu.Item>
        <Link to="/">
          <h3 className="marg-left">Home</h3>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">
          <h3 className="marg-left">About</h3>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
