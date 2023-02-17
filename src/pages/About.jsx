import {
  Card,
  Paper,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Page from "../components/Page";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import aboutImg from "../assets/images/png/aboutPurple.jpg";
import CircleIcon from "@mui/icons-material/Circle";

function About() {
  const theme = useTheme();
  return (
    <Page id="AboutSection" color="var(--dark-background-color)">
      <Grid container spacing={0} sx={{ minHeight: "calc(100vh - 75px)" }}>
        <Grid
          item
          sm={12}
          md={4}
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          minHeight="30vh"
          width="100%"
        >
         <Typography variant="h5" sx={{color:"white"}}>
        About Me
      </Typography>
          <Card sx={{ display: "flex" }} className="blob">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                sx={{ width: "100%"}}
                image={aboutImg}
                alt="about me picture"
              />
              <CardContent
                sx={{ flex: "1 0 auto", background: "#181823", color: "white" }}
              >
                <Typography component="div" variant="h5">
                  Software Developer
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Oscar Umana
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  background: "#181823",
                  color: "white",
                }}
              >
                <IconButton aria-label="previous" sx={{ color: "white" }}>
                  {theme.direction === "rtl" ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause" sx={{ color: "white" }}>
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next" sx={{ color: "white" }}>
                  {theme.direction === "rtl" ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          sm={12}
          md={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", marginY: "100px" }}
        >
          <Paper
            elevation={15}
            sx={{
              width: "100%",
              height: "100%",
              margin: "10px",
              background: "#181823",
            }}
          >
            <Stack direction="column">
              <Stack direction="row" spacing={0} padding="5px">
                <CircleIcon sx={{ color: "#FF605C", height: "1rem" }} />
                <CircleIcon sx={{ color: "#FFBD44", height: "1rem" }} />
                <CircleIcon sx={{ color: "#00CA4E", height: "1rem" }} />
              </Stack>
              <Stack direction="column" spacing={2} padding="20px">
                <Typography variant="string" color="secondary">
                Let me introduce myself! I am a software developer who is passionate about the field of artificial intelligence, and I am currently pursuing studies in this exciting area at Centennial College. Originally from El Salvador, I bring a diverse and multicultural perspective to my work, and I am always seeking to expand my horizons and learn new things.
                </Typography>
                <Typography variant="string" color="secondary">
                When I am not busy coding or studying, I enjoy spending my free time exploring the great outdoors on a hike, getting lost in the rhythms of my favorite music, or diving into a gripping Netflix Series. These hobbies allow me to recharge my batteries and maintain a healthy work-life balance, which is important to me.
                </Typography>
                <Typography variant="string" color="secondary">
                As a software developer, I am a creative problem-solver who is always looking for innovative solutions to complex challenges. I am excited to be a part of the cutting-edge field of artificial intelligence and am eager to see where this technology will take us in the future.
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
}

export default About;
