import React, { useEffect, useContext } from "react";
import { Link } from "react-navi";
import { useResource } from "react-request-hook";
import { StateContext } from "../components/hooks/Contexts";
import Todo from "../components/todos/Todo";

function TodoPage({ id }) {
  const { state } = useContext(StateContext);
  const [todo, getTodo] = useResource(() => ({
    url: `/todo/${id}`,
    headers: { Authorization: `${state.user.access_token}` },
    method: "get",
  }));
  useEffect(getTodo, [id]);
  return (
    <div>
      {todo && todo.data ? <Todo {...todo.data} /> : "Loading..."}
      <div>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}

export default TodoPage;
