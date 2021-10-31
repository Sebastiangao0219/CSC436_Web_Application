import React from "react";
import Todo from "./Todo";
import { StateContext } from "../hooks/Contexts";
import { useContext } from "react/cjs/react.development";

function TodoList() {
  const { state } = useContext(StateContext);
  const { todos } = state;
  return (
    <div>
      {todos.map((t, i) => (
        <Todo
          {...t}
          title={t.title}
          author={t.author}
          content={t.content}
          key={"todo-" + i}
          todoId={i}
        />
      ))}
    </div>
  );
}

export default TodoList;
