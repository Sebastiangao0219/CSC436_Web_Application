
function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username;
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                title: action.title,
                content: action.content,
                author: action.author,
                completed: action.completed
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.title !== action.title) {
                    return todo;
                }
                return {...todo, completed: !todo.completed};
            })
        case 'DELETE_TODO':
            const updatedTodos = state.filter((todo) => todo.title !== action.title);
            return updatedTodos;
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }

}