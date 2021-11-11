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
    <Card style={{backgroundColor: "#ffb5b5"}}>
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
        {short && (
          <Button variant="info" href={`/todo/${todoId}`}>
            View Full Content
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default React.memo(Todo);
