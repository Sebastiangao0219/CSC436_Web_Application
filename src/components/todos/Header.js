import React from "react";
import { Link } from "react-navi";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Header = ({ text }) => {
  const buttonStyle = {
    background: "#316cf4",
    marginTop: 3,
    marginLeft: 10,
    fontSize:'15px',
    color: '#ffffff'
  };

  return (
    <Button href="/users" className="userList" style={buttonStyle} >
      <Navbar.Brand>{text}</Navbar.Brand>
    </Button>
  );
};

export default Header;
