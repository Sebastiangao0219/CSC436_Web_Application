import React, { useContext, useEffect } from "react";
import { Link } from "react-navi";
import { ThemeContext, StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { Card, Button } from "react-bootstrap";
function Todo({
  title,
  content,
  author,
  completedOn,
  complete,
  todoId,
  short = false,
}) {
  const { state, dispatch } = useContext(StateContext);

  console.log("Todo Rendered");
  const [deletedTodo, deleteTodo] = useResource((todoId) => ({
    url: `/todos/${todoId}`,
    method: "delete",
    headers: {"Authorization": `${state.user.access_token}`},
  }));
  console.log(todoId);

  const [toggledTodo, toggleTodo] = useResource((todoId, completed) => ({
    url: `/todos/${todoId}`,
    method: "patch",
    headers: {"Authorization": `${state.user.access_token}`},
    data: {
      complete: completed,
      completedOn: Date.now(),
    },
  }));

  useEffect(() => {
    if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
      dispatch({ type: "DELETE_TODO", todoId: deletedTodo.data._id });
    }
  }, [deletedTodo]);

  useEffect(() => {
    if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
      dispatch({
        type: "TOGGLE_TODO",
        complete: toggledTodo.data.complete,
        completedOn: toggledTodo.data.completeOn,
        todoId: toggledTodo.data._id
      });
    }
  }, [toggledTodo]);

  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link style={{ color: "#000000" }} href={`/todo/${todoId}`}>
            {title}
          </Link>
        </Card.Title>
        <Card.Subtitle>
          <i style={{ color: "#000000" }}>
            Created by <b>{author}</b>
          </i>
        </Card.Subtitle>
        <Card.Text>{processedContent}</Card.Text>
        <input
          type="checkbox"
          checked={complete}
          onChange={(e) => {
            toggleTodo(todoId, e.target.checked);
          }}
        />
        {short && (
          <Button
            variant="blank"
            href={`/todo/${todoId}`}
            style={{ backgroundColor: "#94b0ab" }}
          >
            View Full Content
          </Button>
        )}
        <Button
          variant="blank"
          onClick={() => {
            deleteTodo(todoId);
          }}
          style={{ backgroundColor: "#94b0f1" }}
        >
          Delete Todo
        </Button>
        {complete && (
          <i>
            Completed on: {new Date(completedOn).toLocaleDateString("en-us")}
          </i>
        )}
      </Card.Body>
    </Card>
  );
}

export default React.memo(Todo);
