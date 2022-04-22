import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../../contextAPI/gitHub/GithubContext";
import { useParams } from "react-router-dom";
import Repos from "../repos/Repos";
import { getUserAndRepos } from "../../contextAPI/gitHub/gitHubActions";
import Spinner from "../layout/Spinner";

function Users() {
  const { singleUser, loading, userRepo, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getSingleUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };
    getSingleUserData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div>{singleUser.login}</div>
      <strong className="text-3xl">Top Repos of {singleUser.login}</strong>
      <Repos repo={userRepo} />
    </>
  );
}

export default Users;
