import React from "react";
import { useContext } from 'react/cjs/react.development';
import Todo from "./Todo";
import { StateContext } from "../hooks/Contexts";

function TodoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  console.log(todos);
  return (
    <div>
      {todos.length === 0 && <h2>No created todo task.</h2>}

      {todos.length > 0 && todos.map((t, i) => (
        <Todo
          {...t}
          short={true}
          title={t.title}
          author={t.author}
          content={t.content}
          key={"todo-" + i}
          todoId={t.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
