import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Links } from "../Links/Links";

const DropDown = () => {
  return (
    <NavDropdown
      id="nav-dropdown-dark-example"
      title="Products"
      menuVariant="white"
      className="bg-text:"
    >
      {Links.map((link) => {
        return (
          <NavDropdown.Item key={link.title}>
            <Link to={link.path} className='no-underline'>
            {link.title} 
            </Link>
            </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default DropDown;
