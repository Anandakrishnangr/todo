import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <Box sx={{margin:20}} ><Typography sx={{ fontWeight: 700, fontSize: 42 }} > About</Typography>
            <Box sx={{fontSize:'18px'}} >
           At ToDo , our commitment is to streamline your task management experience. We pride ourselves on meticulous planning, 
           precise execution, and a relentless pursuit of improvement. Join us on this journey of simplifying task organization 
           and boosting your productivity effortlessly."
            </Box>
        </Box>
    )
}

export default About 