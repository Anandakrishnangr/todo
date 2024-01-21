import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../config/Theme'

const Splash = () => {
    return (
        <Box sx={{
            position: "fixed",
            left: 0,
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            background: theme.palette.primary.main
        }}>
            <Typography
            className='splashtypoanimate'
            sx={{
                fontWeight: 900,
                fontSize: '48px',
                textDecoration: "none",
                color:"white"
            

            }}>TO DO LIST</Typography>
        </Box>
    )
}

export default Splash