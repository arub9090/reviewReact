import { createContext, useReducer } from "react";
import gitHubReducer from "../GitHubReducer/GitHubReducer";
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
    loading: false,
  };

  const setLoading= async ()=> dispatch({
      type: 'SET_LOADING',
  });

  const [state, dispatch] = useReducer(gitHubReducer, initialState);
  const searchUsers = async (text) => {
      const params= new URLSearchParams({
          q: text
      })
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await response.json();
    dispatch({
      type: "GET_USER",
      payload: items,
    });
  };



  const clearUsers= ()=>{
      dispatch({
          type:'CLEAR_USER',
      })
  }
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        searchUsers,
        setLoading,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
