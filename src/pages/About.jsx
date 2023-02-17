import { Typography } from '@mui/material'
import React from 'react'
import Page from '../components/Page'

function About() {
  return (
    <Page id="#AboutSection" color="var(--light-background-color)">
        <Typography variant='h1' color="white">
            About
        </Typography>
    </Page>
  )
}

export default About