import React, { useContext, useState } from "react";
import Logout from "./Logout";
import Register from "./Register";
import Login from "./Login";
import { StateContext } from "../hooks/Contexts";
import { Button } from "react-bootstrap";

function UserBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const { state } = useContext(StateContext);
  if (state.user) {
    return <Logout />;
  } else {
    return (
      <div className="justify-content-end">
        <Button style={{marginRight: 6}} variant="primary" onClick={(e) => setShowLogin(true)}>
          Login
        </Button>
        <Login show={showLogin} handleClose={() => setShowLogin(false)} />
        <Button variant="primary" onClick={(e) => setShowRegister(true)}>
          Register
        </Button>
        <Register
          show={showRegister}
          handleClose={() => setShowRegister(false)}
        />
      </div>
    );
  }
}

export default UserBar;
