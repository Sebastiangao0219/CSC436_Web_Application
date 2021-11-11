import React, { useContext, useEffect } from "react";
import { Link } from "react-navi";
import { ThemeContext, StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { Card } from "react-bootstrap";
function Todo({
  title,
  content,
  author,
  completedOn,
  complete,
  todoId,
  short = false,
}) {
  const { secondaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }

  console.log("Todo Rendered");
  const [deletedTodo, deleteTodo] = useResource((todoId) => ({
    url: `/todos/${todoId}`,
    method: "delete",
  }));
  console.log(todoId);
  const [toggledTodo, toggleTodo] = useResource((todoId, completed) => ({
    url: `/todos/${todoId}`,
    method: "patch",
    data: {
      complete: completed,
      completedOn: Date.now(),
    },
  }));

  useEffect(() => {
    if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
      dispatch({ type: "DELETE_TODO", todoId: todoId });
    }
  }, [deletedTodo]);

  useEffect(() => {
    if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
      dispatch({
        type: "TOGGLE_TODO",
        complete: toggledTodo.data.complete,
        completedOn: toggledTodo.data.completeOn,
        todoId,
      });
    }
  }, [toggledTodo]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>
            {title}
          </Link>
        </Card.Title>
        <Card.Subtitle>
          <i>
            Created by <b>{author}</b>
          </i>
        </Card.Subtitle>
        <Card.Text>{processedContent}</Card.Text>
        {short && <Link href={`/todo/${todoId}`}>View Full Content</Link>}
      </Card.Body>
    </Card>

    // <div>
    //   <Link href={`/todo/${todoId}`}>
    //     <h3 style={{ color: secondaryColor }}>{title}</h3>
    //   </Link>
    //   <div>{processedContent}</div>
    //   <div>
    //     Created at: {new Date(Date.now(completedOn)).toLocaleString("en-us")}
    //   </div>
    //   <input
    //     type="checkbox"
    //     checked={complete}
    //     onClick={(e) => {
    //       toggleTodo(todoId, e.target.checked);
    //     }}
    //   />
    //   <button onClick={(e) => deleteTodo(todoId)}>Delete Todo</button>
    //   {complete && <><br /><i>Completed on:{new Date(Date.now(completedOn)).toLocaleString("en-us")}</i></>}
    //   {short && (
    //     <div>
    //       <br />
    //       <Link href={`/todo/${todoId}`}>View Full Todo</Link>
    //     </div>
    //   )}
    //   <hr />
    // </div>
  );
}

export default React.memo(Todo);
