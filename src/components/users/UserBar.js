import React from 'react';
import Logout from "./Logout";
import Register from "./Register";
import Login from './Login';

function UserBar() {
    const user = '';
    if (user) {
        return <Logout user={user} />;
    } else {
        return (
            <div>
                <Register/>
                <Login/>
            </div>
        );
    }

}

export default UserBar;