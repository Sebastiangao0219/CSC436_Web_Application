import React, { useContext } from "react";
import { ThemeContext, StateContext } from "../hooks/Contexts";

function Todo({ title, content, completedOn, complete, todoId }) {
  const { secondaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);
  function handleDelete() {
    dispatch({ type: "DELETE_TODO", todoId: todoId });
  }

  function handleToggle() {
    dispatch({ type: "TOGGLE_TODO", complete: !complete, todoId: todoId });
  }
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
      <button onClick={handleDelete}>Delete Todo</button>
      <input type="checkbox" onClick={handleToggle} />
      <hr />
    </div>
  );
}

export default Todo;
