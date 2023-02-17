import React from 'react'
import { Box } from "@mui/material";


function Page({children, color, id}) {
  return (
    <Box id={id}sx={{margin: "auto", paddingTop:"75px", paddingX:"10%", minHeight: "calc(100vh - 75px)", background:`${color}`}}>
        {children}
    </Box>
  )
}

export default Page