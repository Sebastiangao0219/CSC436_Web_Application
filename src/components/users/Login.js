import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { Modal, Form, Button } from "react-bootstrap";

function Login({show, handleClose}) {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  const [user, login] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: "get",
  }));

  useEffect(() => {
    if (user && user.data) {
      if (user.data.length > 0) {
        setLoginFailed(false);
        dispatch({ type: "LOGIN", username: user.data[0].username });
      } else {
        setLoginFailed(true);
      }
    }
  }, [user]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="login-username">Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={handleUsername}
            name="login-username"
            id="login-username"
          />
          <Form.Label htmlFor="login-password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="login-password"
            value={password}
            onChange={handlePassword}
            id="login-password"
          />
          <input type="submit" value="Login" />
          {loginFailed && (
            <Form.Text style={{ color: "red" }}>
              Invalid username or password
            </Form.Text>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={username.length === 0}
            type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default Login;
