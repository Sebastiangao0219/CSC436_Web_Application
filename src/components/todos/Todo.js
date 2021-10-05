import React from 'react';

function Todo({ title, content, dateCreated, completed, dateCompleted, dispatch}) {

    function handleDelete(e) {
        e.preventDefault();
        dispatch({type: "DELETE_TODO", title})
    }

    function handleToggle() {
        // e.preventDefault();
        dispatch({type: "TOGGLE_TODO", title})
    }
    if (completed) {
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <div>Created at: {new Date(Date.now()).toLocaleString()}</div>
                <div>Completed at: {new Date(Date.now()).toLocaleString()}</div>
                <button onClick={e => handleDelete(e)}>Delete</button>
                <input type="checkbox" onClick={handleToggle} />
            </div>
        )
    } else {
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <div>Created at <b>{new Date(Date.now()).toLocaleString()}</b></div>
                <div>Completed: {completed ? 'Yes' : 'No'}</div>
                <button onClick={e => handleDelete(e)}>Delete</button>
                <input type="checkbox" onClick={handleToggle} />
            </div>
        );
    }
}

export default Todo;