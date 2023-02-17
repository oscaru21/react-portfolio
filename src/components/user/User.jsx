import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import { Group, PeopleOutline, LocationOn, Apartment } from "@mui/icons-material";

function User({ user }) {
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    login,
    followers,
    following,
    hireable,
  } = user;
  console.log(hireable);
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
      <Paper
        elevation={15}
        sx={{ width: "100%", height: "100%", margin: "10px" }}
      >
        <Card
          sx={{
            background: "var(--dark-background-color)",
            color: "white",
            height: "100%",
          }}
        >
          <CardContent
            sx={{
            height:"90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="column" height="100%" spacing={1} justifyContent="space-around">
            <Box display="flex">
              <Avatar
                alt="Github avatar"
                src={avatar_url}
                sx={{ width: 56, height: 56 }}
              />
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: "0px 10px",
                }}
              >
                <Typography variant="h5">{name}</Typography>
                <Typography variant="string" color="secondary">
                  @{login}
                </Typography>
              </Box>
            </Box>
            <Typography variant="string" align="left">
              {bio}
            </Typography>
            <Stack direction="row" spacing={5}>
              <Stack direction="row" spacing={1}>
                <Group color="secondary" />
                <Typography variant="string">{followers}</Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <PeopleOutline color="secondary" />
                <Typography variant="string">{following}</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Apartment color="secondary" />
              <Typography variant="string">{company}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <LocationOn color="secondary" />
              <Typography variant="string">{location}</Typography>
            </Stack>
            <Chip label="hireable" color="success" />
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
}

export default User;
