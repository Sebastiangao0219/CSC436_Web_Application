import React, { useState, useReducer } from "react";
import { mount, route } from "navi";
import appReducer from "./hooks/Reducers";
import { ThemeContext, StateContext } from "./hooks/Contexts";
import HeaderBar from "../pages/HeaderBar";
import HomePage from "../pages/HomePage";
import TodoPage from "../pages/TodoPage";
import UsersPage from "../pages/UsersPage";
import ProfilePage from "../pages/ProfilePage";
import CreateTodo from "./todos/CreateTodo";

import { Router, View } from "react-navi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

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
    "/users": route({ view: <UsersPage /> }),
    "/users/:id": route((req) => {
      return { view: <ProfilePage id={req.params.id} /> };
    }),
  });

  const [state, dispatch] = useReducer(appReducer, { user: {}, todos: [], users: [] });
  const { user } = state;

  return (
    <div > 
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Router routes={routes}>
            <Container>
              <HeaderBar setTheme={setTheme} />
              <br />
              <View />
            </Container>
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
