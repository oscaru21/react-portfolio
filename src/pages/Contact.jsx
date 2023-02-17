import React from "react";
import Page from "../components/Page";
import { Grid } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import Blob from "../components/Blob/Blob";
import memoji from "../assets/images/png/memoji.png";

function Contact() {
  return (
    <Page id="ContactSection">
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
