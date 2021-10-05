import React from 'react';
import Todo from "./Todo";

function TodoList({todos = [], dispatch}) {

    // function handleDelete(e) {
    //     // e.preventDefault();
    //     dispatch({type: "DELETE_TODO"})
    // }
    //
    // function handleToggle(e) {
    //     e.preventDefault();
    //     dispatch({type: "TOGGLE_TODO"})
    // }
    return (
        <div>
            {todos.map((todo, i) =>
                <div>
                    <Todo {...todo} dispatch={dispatch} title={todo.title} author={todo.author} content={todo.content} key={'todo-' + i}/>
                </div>
            )}
        </div>
    );
}

export default TodoList;