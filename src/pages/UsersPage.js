import React, { useEffect, useContext } from "react";
import { StateContext } from "../components/hooks/Contexts";
import { useResource } from "react-request-hook";
import UsersList from "../components/users/UsersList";

function UsersPage() {
    const { state, dispatch } = useContext(StateContext);
    const [users, getUsers] = useResource(() => ({
        url: "/users",
        method: "GET",
    }))
    useEffect(getUsers, []);
    useEffect(() => {
        if (users && users.data) {
            dispatch({ type: "FETCH_USERS", users: users.data.reverse() });
        }
    }, [users]);
    const { isLoading } = users;
    return (
        <>
            {isLoading && "Users loading..."} <UsersList />
        </>
    )
}

export default UsersPage;