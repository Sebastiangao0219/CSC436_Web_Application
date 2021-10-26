import React from 'react';
import Todo from "./Todo";

function TodoList({todos = [], dispatch}) {
    return (
        <div>
            {todos.map((todo, i) =>
                <div>
                    <Todo {...todo}
                          dispatch={dispatch}
                          title={todo.title}
                          author={todo.author}
                          content={todo.content}
                          key={'todo-' + i}
                          todoId={i}/>
                </div>
            )}
        </div>
    );
}

export default TodoList;