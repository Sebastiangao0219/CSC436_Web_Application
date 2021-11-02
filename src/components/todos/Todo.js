import React, { useContext, useEffect } from "react";
import { ThemeContext, StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";

function Todo({ title, content, completedOn, complete, todoId }) {
  const { secondaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  const [deletedTodo, deleteTodo] = useResource((todoId) => ({
    url: `/todos/${todoId + 1}`,
    method: "delete"
  }));
  console.log(todoId);
  const [toggledTodo, toggleTodo] = useResource((todoId, completed) => ({
    url: `/todos/${todoId}`,
    method: "patch",
    data: {
      complete: completed,
      completedOn: Date.now()
    }
  }));

  useEffect(() => {
    if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
      dispatch({ type: 'DELETE_TODO', todoId: todoId });
    }
  }, [deletedTodo]);

  useEffect(() => {
    if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
      dispatch({ type: 'TOGGLE_TODO', complete:toggledTodo.data.complete, completedOn: toggledTodo.data.completeOn, todoId });
    }
  }, [toggledTodo]);

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <div>
        Created at: {new Date(Date.now(completedOn)).toLocaleString("en-us")}
      </div>
      {complete && <div>
        Completed on: {new Date(Date.now(completedOn)).toLocaleString("en-us")}
      </div>}
      <input type="checkbox" checked={complete} onClick={e => {toggleTodo(todoId, e.target.checked)}} />
      <button onClick={(e) => (deleteTodo(todoId))}>Delete Todo</button>
      
      <hr />
    </div>
  );
}

export default Todo;
