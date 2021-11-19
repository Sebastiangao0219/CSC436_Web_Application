import React, { useContext, useEffect } from "react";
import { Link } from "react-navi";
import { Button } from "react-bootstrap";
import { useResource } from "react-request-hook";
import User from "../components/users/User";
import { StateContext } from "../components/hooks/Contexts";
import TodoList from "../components/todos/TodoList";

function ProfilePage({ id }) {
  const { dispatch } = useContext(StateContext);
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
  const { isLoading } = todos;

  const [user, getUser] = useResource(() => ({
    url: `/users/${id}`,
    method: "get",
  }));

  useEffect(getUser, [id]);
  useEffect(() => {
    if (user && user.data) {
      dispatch({ type: "FETCH_TODOS_BY_USER", author: user.username });
    }
  }, [todos]);
  console.log("Checking for");
  console.log(user);
  return (
    <div>
      <Button style={{ marginTop: 5, marginBottom: 5 }} href="/users">
        Back to User List
      </Button>
      {user && user.data ? <User {...user.data} /> : "Loading"}
      <TodoList />
    </div>
  );
}

export default ProfilePage;
