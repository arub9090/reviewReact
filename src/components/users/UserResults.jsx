import React from "react";
import {useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../contextAPI/gitHub/GithubContext";

function UserResults() {
  const { user, loading } = useContext(GithubContext);

  if (!loading) {
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {user.map((u) => (
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
