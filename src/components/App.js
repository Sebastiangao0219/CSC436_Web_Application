
import UserBar from "./users/UserBar";
import AddTodoTask from "./posts/AddTodoTask";
import TodoList from "./posts/TodoList";

function App() {
    const posts = [
        {
            title: "Todo-1.",
            description: "Some text",
            dateCreated: new Date(Date.now()).toLocaleString(),
            completed: true,
            dateCompleted: new Date(Date.now()).toLocaleString()
        },
        {
            title: "Todo-2.",
            description: "Some text text",
            dateCreated: new Date(Date.now()).toLocaleString(),
            completed: true,
            dateCompleted: new Date(Date.now()).toLocaleString()
        },{
            title: "Todo-3.",
            description: "Some text text text",
            dateCreated: new Date(Date.now()).toLocaleString(),
            completed: true,
            dateCompleted: new Date(Date.now()).toLocaleString()
        }
    ]
    return (
        <div>
            <UserBar/>
            {/*<Todo title="Hello World" content="My First Todo~!" author="Sebastian"/>*/}
            <AddTodoTask user="Sebastian"/>
            <TodoList posts={posts}/>
            {/*<MyName/>*/}
        </div>
    );
}

export default App;
