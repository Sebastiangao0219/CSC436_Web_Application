import React, { useState, useEffect, useContext } from "react";
// import { useContext } from "react/cjs/react.development";
import { StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { Modal, Form, Button } from "react-bootstrap";

function Register({ show, handleClose }) {
  const { dispatch } = useContext(StateContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  const [status, setStatus] = useState("");
  const [user, register] = useResource((username, password) => ({
    url: "auth/register",
    method: "POST",
    data: { username, password, passwordConfirmation: password },
  }));

  useEffect(() => {
    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        console.log(user);
        setStatus("Registration failed, please try again later.");
        alert("fail");
      } else {
        console.log(user);
        setStatus("Registration successful. You may now login.");
        alert("success");
      } //dispatch({ type: 'REGISTER', username: user.data.username })
    }
  }, [user]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          register(formData.username, formData.password);
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="register-username">Username:</Form.Label>
          <Form.Control
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            name="register-username"
            id="register-username"
          />
          <Form.Label htmlFor="register-password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="register-password"
            id="register-password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Form.Label htmlFor="register-password-repeat">
            Repeat password:
          </Form.Label>
          <Form.Control
            type="password"
            name="register-password-repeat"
            id="register-password-repeat"
            value={formData.passwordRepeat}
            onChange={(e) =>
              setFormData({ ...formData, passwordRepeat: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={
              formData.username.length === 0 ||
              formData.password.length === 0 ||
              formData.password !== formData.passwordRepeat
            }
          >
            Register
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );

  // return (
  //   <form
  //     onSubmit={(e) => {
  //       e.preventDefault();
  //       register(formData.username, formData.password);
  //     }}
  //   >
  //     <label htmlFor="register-username">Username:</label>
  //     <input
  //       type="text"
  //       value={formData.username}
  //       onChange={(e) => setFormData({ ...formData, username: e.target.value })}
  //       name="register-username"
  //       id="register-username"
  //     />
  //     <label htmlFor="register-password">Password:</label>
  //     <input
  //       type="password"
  //       value={formData.password}
  //       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
  //       name="register-password"
  //       id="register-password"
  //     />
  //     <label htmlFor="register-password-repeat">Repeat password: </label>
  //     <input
  //       type="password"
  //       value={formData.passwordRepeat}
  //       onChange={(e) =>
  //         setFormData({ ...formData, passwordRepeat: e.target.value })
  //       }
  //       name="register-password-repeat"
  //       id="register-password-repeat"
  //     />
  //     <input
  //       type="submit"
  //       value="Register"
  //       disabled={
  //         formData.username.length === 0 ||
  //         formData.password.length === 0 ||
  //         formData.password !== formData.passwordRepeat
  //       }
  //     />
  //   </form>
  // );
}
export default Register;
