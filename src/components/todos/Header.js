import React, { useContext } from "react";
import { ThemeContext } from "../hooks/Contexts";
import { Link } from "react-navi";
import { Navbar } from "react-bootstrap";

const Header = ({ text }) => {
  return (
    <Link href="/">
      <Navbar.Brand >{text}</Navbar.Brand>
    </Link>
  );
};

export default Header;
