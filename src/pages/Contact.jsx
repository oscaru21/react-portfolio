import React from "react";
import Page from "../components/Page";
import { Grid } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";

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
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", marginY:"100px" }}
        >
          <ContactForm/>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Contact;
