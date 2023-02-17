import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { getUserAndRepos } from "../context/github/GithubActions";
import RepoList from '../components/repos/RepoList'
import {Grid} from "@mui/material";
import Page from "../components/Page";


function Github() {
  const { repos, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos("oscaru21");
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch]);

  return (
    <Page
      id="GithubSection"
      color="var(--light-background-color)"
    >
      <Grid
        container
        spacing={2}
        sx={{ minHeight: "calc(100vh - 75px)"}}
      >
        <RepoList repos={repos} />
      </Grid>
    </Page>
  );
}

export default Github;
