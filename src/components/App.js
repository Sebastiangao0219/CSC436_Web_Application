import React, { useState, useEffect, useReducer } from "react";
import { mount, route } from "navi";
import appReducer from "./hooks/Reducers";
import { ThemeContext, StateContext } from "./hooks/Contexts";
import HeaderBar from "../pages/HeaderBar";
import HomePage from "../pages/HomePage";
import TodoPage from "../pages/TodoPage";
import CreateTodo from "./todos/CreateTodo";
import { Router, View } from "react-navi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import background from "../assets/bg1.jpg";

function App() {
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });
  const routes = mount({
    "/": route({ view: <HomePage /> }),
    "/todo/create": route({ view: <CreateTodo /> }),
    "/todo/:id": route((req) => {
      return { view: <TodoPage id={req.params.id} /> };
    }),
  });

  const [state, dispatch] = useReducer(appReducer, { user: "", todos: [] });
  const { user } = state;

  const backgroundImage = {
    backgroundImage: `url(${background})`
  }

  

  return (
    <div style={ backgroundImage }>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Router routes={routes}>
            <Container>
              <HeaderBar setTheme={setTheme} />
              <hr />
              <View />
            </Container>
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
