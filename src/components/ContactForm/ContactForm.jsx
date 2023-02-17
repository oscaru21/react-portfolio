import { Paper, Grid, TextField, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {name, email, message}, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setEmail('');
          setName('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
      });

  };

  return (
    <Paper
      elevation={15}
      sx={{
        width: "100%",
        height: "100%",
        margin: "10px",
        background: "white",
        borderRadius: "5%",
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        paddingY="20px"
        height="100%"
      >
        <Grid item height="100%" width="100%" padding="5%">
            
          <form
            style={{height:"100%"}}
            id="contact-form"
            onSubmit={onSubmit}
          >
            <Typography variant="h5">
                Contact us!
            </Typography>
            <Box display="flex" flexDirection="column" justifyContent="space-around" height="100%">
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  type="email"
                  id="message"
                  label="Message"
                  name="message"
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  multiline
                  rows="6"
                />
              </Grid>
              <Grid
                container
                direction="row"
                spacing={2}
                style={{ marginTop: 20 }}
              >
                <Grid item width="100%">
                  <Button type="submit" variant="contained" color="primary" sx={{width:"100%"}}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ContactForm;
