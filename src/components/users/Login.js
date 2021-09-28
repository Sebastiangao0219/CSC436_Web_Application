import React from 'react';

function Login() {
    return (
        <form obSubmit={e => e.preventDefault()}>
            <label htmlFor="lonin-username">Username:</label>
            <input type="text" name="lonin-username" id="lonin-username"/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password"/>
            <input type="submit" value="Login"/>
        </form>
    );
}

export default Login;