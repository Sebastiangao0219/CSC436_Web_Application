import UserBar from "./users/UserBar";
import AddTodoTask from "./todos/AddTodoTask";
import TodoList from "./todos/TodoList";
import React, { useEffect, useReducer } from "react";
import appReducer from "./hooks/Reducers";
import Header from "./todos/Header";
import { ThemeContext, StateContext } from "./hooks/Contexts";
import { useResource } from "react-request-hook";

function App() {
  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data });
    }
  }, [todos]);

  const [state, dispatch] = useReducer(appReducer, { user: "", todos: [] });
  const { user } = state;

  return (
    <div>
      <ThemeContext.Provider
        value={{ primaryColor: "red", secondaryColor: "green" }}
      >
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Header text="Sebastian Gao's Todo List." />
          {/* <UserBar user={user} dispatchUser={dispatch}/> */}
          <UserBar />
          {/* {user && <AddTodoTask user={user} dispatch={dispatch}/>} */}
          {user && <AddTodoTask />}
          {/* <TodoList todos={todos} dispatch={dispatch}/> */}
          <TodoList />
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
