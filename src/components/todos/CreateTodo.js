import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, createTodo] = useResource(({ title, content, author }) => ({
    url: "/todos",
    method: "post",
    data: { title, content, author },
  }));

  const navigation = useNavigation();

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  function handleTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleContent(evt) {
    setContent(evt.target.value);
  }
  function handleCreate() {
    createTodo({ title, content, author: user });
  }

  useEffect(() => {
    if (todo && todo.data) {
      dispatch({
        type: "CREATE_TODO",
        title: todo.data.title,
        content: todo.data.content,
        id: todo.data.id,
        author: user,
      });
      navigation.navigate(`/todo/${todo.data.id}`);
    }
  }, [todo]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}
export default CreateTodo;
