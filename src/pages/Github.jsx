import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { getUserAndRepos } from "../context/github/GithubActions";
import Spinner from "../components/layout/Spinner";
import RepoList from '../components/repos/RepoList'
import { Box, Paper, Grid, Typography } from "@mui/material";


function Github() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos("oscaru21");
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

  return (
    <Box
      id="GithubSection"
      sx={{ flexGrow: 1, maxWidth: "80vw", margin: "auto", padding: "75px 75px 0 75px", background:"var(--light-background-color)", minHeight: "calc(100vh - 75px - 3rem)" }}
    >
      <Grid
        container
        spacing={8}
        sx={{ minHeight: "calc(100vh - 75px)" }}
      >
        <RepoList repos={repos} />
      </Grid>
    </Box>
  );
}

export default Github;
