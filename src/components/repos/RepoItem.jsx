import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper
} from "@mui/material";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Paper elevation={15} sx={{ width: "100%"}}>
      <Card sx={{ background: "var(--dark-background-color)", color:"white" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }}  gutterBottom>
          {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" href={html_url} sx={{background: 'var(--primary-color)'}}>Repo</Button>
        </CardActions>
      </Card>
    </Paper>
    </Grid>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
