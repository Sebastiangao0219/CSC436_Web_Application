import React from 'react';

function Todo({ title, content, completedOn, complete, dateCompleted, dispatch, todoId}) {

    function handleDelete() {
        dispatch({type: 'DELETE_TODO', todoId: todoId})
    }

    function handleToggle() {
        dispatch({type: 'TOGGLE_TODO', title, complete, todoId: todoId})
    }
    if (complete) {
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <div>Created at: {new Date(Date.now(completedOn)).toLocaleString('en-us')}</div>
                <div>Completed on: {new Date(Date.now(completedOn)).toLocaleString('en-us')}</div>
                <button onClick={handleDelete}>Delete Todo</button>
                <input type="checkbox" onClick={handleToggle} />
                <hr/>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <div>Created at <b>{new Date(Date.now(completedOn)).toLocaleString('en-us')}</b></div>
                <div>Completed: {complete ? 'Yes' : 'No'}</div>
                <button onClick={handleDelete}>Delete Todo</button>
                <input type="checkbox" onClick={handleToggle} />
                <hr/>
            </div>
        );
    }
}

export default Todo;