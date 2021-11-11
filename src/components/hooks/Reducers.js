function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        id: action.id,
        title: action.title,
        content: action.content,
        author: action.author,
        complete: false,
        completedOn: undefined,
      };
      return [newTodo, ...state];
    case "TOGGLE_TODO":
      return state.map((t) => {
        if (t.id === action.todoId) {
          t.complete = action.complete;
          t.completeOn = Date.now();
        }
        return t;
      });

    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.todoId);
    case "FETCH_TODOS":
      return action.todos;
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
  };
}
