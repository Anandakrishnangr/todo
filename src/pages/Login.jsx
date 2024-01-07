import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import theme from '../config/Theme';

const LoginPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: theme.palette.primary.main, // Use the default background color from theme
            }}
        >
            <Box
                component="form"
                sx={{
                    width: '80%', // Adjusted width for better responsiveness
                    maxWidth: '400px', // Added max-width for larger screens
                    p: '24px', // Added padding for better spacing
                    borderRadius: '8px', // Added border radius for a nicer look
                    bgcolor: 'white', // Set background color to white
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added box shadow for a subtle lift
                }}
            >
                <Typography
                    variant="h5"
                    color={theme.palette.primary.main} // Use the primary color for the text
                    sx={{
                        fontWeight: '600',
                        mb: '16px', // Added margin bottom for spacing
                    }}
                >
                    Get Started !
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    sx={{ mb: '16px' }} // Added margin bottom for spacing
                />
                {/* <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    sx={{ mb: '24px' }} // Added margin bottom for spacing
                /> */}
                <Button variant="contained" color="primary" fullWidth>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
