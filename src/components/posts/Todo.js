import React from 'react';

function Todo({title, description, dateCreated, completed, dateCompleted}) {
    if (completed) {
        return (
            <div>
                <h3>{title}</h3>
                <div>{description}</div>
                <div>Created at: {new Date(Date.now()).toLocaleString()}</div>
                <div>Completed at: {new Date(Date.now()).toLocaleString()}</div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{title}</h3>
                <div>{description}</div>
                <div>Created at <b>{new Date(Date.now()).toLocaleString()}</b></div>
            </div>
        );
    }
}

export default Todo;