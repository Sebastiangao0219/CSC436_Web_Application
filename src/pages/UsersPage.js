import React, { useEffect, useContext } from "react";
import { StateContext } from "../components/hooks/Contexts";
import { useResource } from "react-request-hook";
import UsersList from "../components/users/UsersList";

function UsersPage() {
    const { state, dispatch } = useContext(StateContext);
    const [users, getUsers] = useResource(() => ({
        url: "/users",
        method: "get",
    }));
    useEffect(getUsers, []);
    useEffect(() => {
        console.log(users);
        if (users && users.data) {
            dispatch({ type: "FETCH_USERS", users: users.data })
        }
    }, [users]);
    const { isLoading } = users;
    return (
        <>
            {isLoading && "Users Loading..."} <UsersList />
        </>
    )
}
export default UsersPage;