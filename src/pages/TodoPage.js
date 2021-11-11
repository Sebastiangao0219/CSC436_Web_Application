import React, {useEffect} from 'react';
import { Link } from 'react-navi';
import { useResource } from 'react-request-hook';
import Todo from '../components/todos/Todo';

function TodoPage ({ id }) {
    const [ todo, getTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'get'
    }))
    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} />
                : 'Loading...'
            }
            <div><Link href='/'>Go Back</Link></div>
        </div>
    )
}

export default TodoPage;