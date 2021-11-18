import React from "react";
import User from "./User";
import { StateContext } from "../hooks/Contexts";
import { useContext } from "react/cjs/react.development";

function UsersList() {
  const { state } = useContext(StateContext);
  const { users } = state;
  return (
    <div>
      {users.map((u, i) => (
        <User {...u} username={u.username} userId={u.id} key={"user-" + i} />
      ))}
    </div>
  );
}

export default UsersList;
