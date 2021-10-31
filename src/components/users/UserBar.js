import React from 'react';
import Logout from "./Logout";
import Register from "./Register";
import Login from './Login';
import {StateContext} from '../hooks/Contexts'
import {useContext} from 'react/cjs/react.development'

function UserBar() {
    const { state } = useContext(StateContext);
    if (state.user) {
        return <Logout />;
    } else {
        return (
            <div>
                <Login />
                <Register />
            </div>
        );
    }
}

export default UserBar;