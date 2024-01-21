import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../config/Theme';
import { Link } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';
import TodoList from './Todo';

const GetStarted = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: theme.palette.primary.main,
            }}
        >
            <Box
                sx={{
                    minWidth: '300px',
                    width: '60%', // Adjusted width for better responsiveness
                    height: '40vh',
                    bgcolor: theme.palette.primary.light,
                    borderRadius: '8px', // Added border radius for a nicer look
                    p: '24px', // Added padding for better spacing
                }}
            >
                <Typography
                    color="white"
                    sx={{
                        fontWeight: '600',
                        fontSize: '24px', // Adjusted font size for better readability
                    }}
                >
                    <WeatherCard/>
                    Get Started!
                </Typography>
            </Box>
        </Box>
    );
};

export default GetStarted;
