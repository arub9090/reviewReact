import React from "react";
import Alert from "../layout/Alert";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <div>
      <Alert />
     <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
