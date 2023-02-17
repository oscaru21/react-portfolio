import React from "react";
import Page from "../components/Page";
import { Grid, Stack, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import Blob from "../components/Blob/Blob";
import memoji from "../assets/images/png/memoji.png";

function Contact() {
  return (
    <Page id="ContactSection" color="var(--light-background-color)">
      <Grid container spacing={0} sx={{ minHeight: "calc(100vh - 75px)" }}>
        <Grid
          item
          sm={12}
          md={6}
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          minHeight="30vh"
          marginTop="30px"
          width="100%"
        >
          <Stack direction="column" spacing={1}>
            <Typography variant="h3" color="secondary" sx={{fontWeight:"1000"}}>
              Get In Touch
            </Typography>
            <Typography variant="string" color="white">
              Reach me if you need any help with Software Development Solutions or just to have a chat.
            </Typography>
            <Typography variant="h5" color="secondary" sx={{fontWeight:"1000"}}>
              MAIL
            </Typography>
            <Typography variant="string" color="white">
              oscarumana1021@gmail.com
            </Typography>
          </Stack>
          <Blob image={memoji} y="55" />
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", marginY: "100px" }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Page>
  );
}

export default Contact;
