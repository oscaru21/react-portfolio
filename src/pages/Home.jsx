import React from "react";
import Blob from "../components/Blob/Blob";
import { Box, Paper, Grid, Typography } from "@mui/material";
function Home(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: "80vw", margin: "auto", paddingTop:"75px", minHeight: "calc(100vh - 75px)"}}>
        <Grid container spacing={8} sx={{ minHeight: "calc(100vh - 75px)" }}>
          <Grid
            item
            sm={12}
            md={6}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
            
          >
            <Typography align="center" color="white" variant="h3" component="h2">
              Hey there,
            </Typography>
            <Typography
            paddingX="1rem"
              align="center"
              color="white"
              variant="h2"
              component="h1"
              sx={{ fontWeight: "bold" }}
            >
              I'm Oscar Umana
            </Typography>
            <Typography
              align="center"
              color="white"
              variant="string"
              component="p"
              paddingX="1rem"
            >
              I'm a fullstack web developer currently studying Aritficial
              Intelligence in Centennial College.
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{width: "100%"}}
          >
            <Blob />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
