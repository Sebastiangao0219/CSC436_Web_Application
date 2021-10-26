import React, { useState } from 'react';
import Logout from "./Logout";
import Register from "./Register";
import Login from './Login';

function UserBar({user, dispatchUser}) {
    if (user) {
        return <Logout user={user} dispatchUser={dispatchUser}/>;
    } else {
        return (
            <div>
                <Login dispatchUser={dispatchUser}/>
                <Register dispatchUser={dispatchUser}/>
            </div>
        );
    }
}

export default UserBar;