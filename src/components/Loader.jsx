import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loader = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#234234d1',
            zIndex: 1000,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%'
        }}>
            <CircularProgress color='success' />
        </Box>
    )
}
