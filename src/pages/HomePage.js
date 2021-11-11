import React, {useEffect, useContext} from 'react';
import { StateContext } from '../components/hooks/Contexts';
import {useResource } from 'react-request-hook';
import TodoList from '../components/todos/TodoList';

function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ todos, getTodos ] = useResource(() => ({
        url: '/todos',
        method: 'get'
    }))
    useEffect(getTodos, [])
    useEffect(() => {
    if (todos && todos.data) {
            dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
        }
    }, [todos])
    const { isLoading } = todos;
    return (
        <>
          {isLoading && 'Todos loading...'} <TodoList />
        </>
    )
} 

export default HomePage;