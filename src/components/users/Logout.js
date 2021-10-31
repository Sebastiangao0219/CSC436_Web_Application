import React from 'react';
import {useContext} from 'react/cjs/react.development'
import { StateContext } from '../hooks/Contexts'

function Logout() {
    const { state, dispatch } = useContext(StateContext);
    return (
        <form onSubmit={e => {e.preventDefault();dispatch({type: 'LOGOUT'});}}>
            Logged in as: <b>{state.user}</b>
            <input type="submit" value="Logout"/>
        </form>
    );
}

export default Logout;