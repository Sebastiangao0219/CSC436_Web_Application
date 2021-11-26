import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { StateContext } from '../hooks/Contexts'
import { useNavigation } from "react-navi";

function Logout() {
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;
    const navigation = useNavigation();
    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGOUT'}); navigation.navigate(`/`);}}>
            Logged in as: <b>{user.username}</b>
            <input type="submit" value="Logout"/>
        </form>
    );
}

export default Logout;