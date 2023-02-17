import React from "react";
import Blob from "../components/Blob/Blob";
import { Box, Button, Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import pp from "../assets/images/png/pp.png"

function Home(props) {
  return (
    <>
      <Page id="HomeSection">
        <Grid container spacing={8} sx={{ minHeight: "calc(100vh - 75px)" }}>
          <Grid
            item
            sm={12}
            md={6}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="30vh"
            marginTop="5vh"
          >
            <Typography
              align="center"
              color="white"
              variant="string"
              component="h4"
            >
              Hey There!
            </Typography>
            <Typography
              align="center"
              color="white"
              variant="h3"
              component="h3"
              sx={{ fontWeight: "bold" }}
            >
              I'M OSCAR UMANA
            </Typography>
            <Typography
              align="center"
              color="white"
              variant="string"
              component="p"
            >
              I'm a fullstack web developer currently studying Aritficial
              Intelligence in Centennial College.
            </Typography>
            <Box display="flex" direction="row" marginY="15px" justifyContent="center" width="100%">
              <Button href="#AboutSection" variant="contained" size="large" sx={{marginRight: "20px"}}>About Me</Button>
              <Button href="#ContactSection" variant="outlined" size="large" color="secondary">Contact Me</Button>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Blob image={pp} y="20"/>
          </Grid>
        </Grid>
      </Page>
    </>
  );
}

export default Home;
