import React, { useContext } from "react";
import UserBar from "../components/users/UserBar";
import Header from "../components/todos/Header";
import { ThemeContext, StateContext } from "../components/hooks/Contexts";
import { Link } from "react-navi";
import { Navbar, Nav, Container } from "react-bootstrap";
import ChangeTheme from "../components/ChangeTheme";
import logo from "../assets/logo.png";
import header from "../assets/header.png";

function HeaderBar({ setTheme }) {
  const theme = useContext(ThemeContext);
  const { state } = useContext(StateContext);
  const { user } = state;

  const headerBackgroundImage = {
    backgroundImage: `url(${header})`
  }
  
  return (
    <div>
      <Navbar bg="light" expand="lg" style={headerBackgroundImage}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="56"
              height="50"
              className="d-inline-block align-top"
              alt="Sebastian's Todo List"
            />
            {/* <Header text="Sebastian's Todo List" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user && (
                <Nav.Link>
                  <Link href="/todo/create">Create New Todo</Link>
                </Nav.Link>
              )}
              {/* <ChangeTheme theme={theme} setTheme={setTheme} /> */}
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
