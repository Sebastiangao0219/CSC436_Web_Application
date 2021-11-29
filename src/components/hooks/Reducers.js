function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":

    case "REGISTER":
      return {
        'username': action.username,
        'access_token': action.access_token
      }
    case "LOGOUT":
      return { 
        'username': action.username,
        'access_token': undefined
      }
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
        complete: action.complete,
        completedOn: action.completeOn,
      };
      return [newTodo, ...state];
    case "TOGGLE_TODO":
      return state.map((t) => {
        if (t._id === action.todoId) {
          t.complete = action.complete;
          t.completeOn = action.completeOn;
        }
        return t;
      });

    case "DELETE_TODO":
      return state.filter((t) => t._id !== action.todoId);
    case "FETCH_TODOS":
      return action.todos;
    case "FETCH_TODOS_BY_USER":
      return state.filter((t) => t.author === action.author.username);
    default:
      return state;
  }
}

function usersReducer(state, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return action.users;
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
    users: usersReducer(state.users, action),
  };
}
