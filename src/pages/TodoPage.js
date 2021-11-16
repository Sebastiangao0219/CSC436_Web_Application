import React, { useEffect } from "react";
import { Link } from "react-navi";
import { Button } from "react-bootstrap";
import { useResource } from "react-request-hook";
import Todo from "../components/todos/Todo";

function TodoPage({ id }) {
  const [todo, getTodo] = useResource(() => ({
    url: `/todos/${id}`,
    method: "get",
  }));
  useEffect(getTodo, [id]);

  return (
    <div>
      {todo && todo.data ? <Todo {...todo.data} /> : "Loading..."}
      <div>
        <Button style={{ marginTop: 5, marginBottom: 5 }} href="/">
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default TodoPage;
