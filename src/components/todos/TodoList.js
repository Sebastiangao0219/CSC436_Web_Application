import React from 'react';
import Todo from "./Todo";

function TodoList({todos = [], dispatch}) {

    function handleDelete(e) {
        // e.preventDefault();
        dispatch({type: "DELETE_TODO"})
    }

    function handleToggle(e) {
        e.preventDefault();
        dispatch({type: "TOGGLE_TODO"})
    }
    return (
        <div>
            {todos.map((todo, i) =>
                <div>
                    <Todo {...todo} key={'todo-' + i}/>
                    <input type="checkbox" onClick={e => {handleToggle(e)}} />
                    <button onClick={e => handleDelete(e)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default TodoList;