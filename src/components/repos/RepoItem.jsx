import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  Badge,
} from "@mui/material";
import {Visibility, Star} from '@mui/icons-material';
function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Paper elevation={15} sx={{ width: "100%", height:"100%", margin:"10px" }}>
        <Card
          sx={{ background: "var(--dark-background-color)", color: "white", height:"100%", display:"flex", flexDirection:"column", justifyContent: "space-between" }}
        >
          <CardContent>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="string">{description}</Typography>
          </CardContent>
          <CardActions>
            
            <Button
              size="small"
              variant="contained"
              target="_blank"
              href={html_url}
              sx={{ background: "var(--primary-color)" }}
            >
              Repo
            </Button>
            <Box
              display="flex"
              direction="row"
              marginY="15px"
              justifyContent="end"
              width="100%"
            >
              <Badge color="secondary" badgeContent={watchers_count} showZero>
                <Visibility />
              </Badge>
              <Badge color="secondary" badgeContent={stargazers_count} showZero sx={{ marginX:"20px"}}>
                <Star />
              </Badge>
            </Box>
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
