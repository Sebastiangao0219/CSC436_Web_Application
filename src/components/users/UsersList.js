import React from "react";
import User from "./User";
import { StateContext } from "../hooks/Contexts";
import { useContext } from "react/cjs/react.development";
import appReducer from "../hooks/Reducers";

function UsersList() {
  const { state } = useContext(StateContext);
  const { users } = state;
  return (
    <div>
      Userslist
      {/*{users.map((u) => (*/}
      {/*  <User {...u} username={u.username} userId={u.id} />*/}
      {/*))}*/}
    </div>
  );
}

export default UsersList;
