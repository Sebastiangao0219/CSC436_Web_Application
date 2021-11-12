import React, { useContext } from "react";
import { ThemeContext } from "../hooks/Contexts";
import { Link } from "react-navi";
import { Navbar } from "react-bootstrap";

const Header = ({ text }) => {
  const theme = useContext(ThemeContext);
  return (
    <Link href="/">
      <Navbar.Brand style={{ color: theme.primaryColor }} >{text}</Navbar.Brand>
    </Link>
  );
};

export default Header;
