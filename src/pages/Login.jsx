import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import theme from '../config/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/Todo/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    let dispatch = useDispatch()
    let [data, setData] = useState({
        userName: '',
        errorStatus: false,
        errorMessage: ''
    })
    let navigate = useNavigate()
    let userStates = useSelector((state) => state?.user?.UserName)
    console.log(userStates)


    const handle = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }else{
            return
        }
        if (data.userName.length) {
            dispatch(addUser(data.userName))
            // navigate('/')
        } else {

        }
    }

    return (
        <Box
            // component="form"
            // onSubmit={(e)=>handle(e)}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: theme.palette.primary.main,
            }}
        >
            <Box
                component="form"
                sx={{
                    width: '80%',
                    maxWidth: '400px',
                    p: '24px',
                    borderRadius: '8px',
                    bgcolor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography
                    variant="h5"
                    color={theme.palette.primary.main}
                    sx={{
                        fontWeight: '600',
                        mb: '16px',
                    }}
                >
                    Get Started !
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    sx={{ mb: '16px' }}
                    onChange={(e) => setData((prev) => ({
                        userName: e.target.value,
                        errorStatus: false,
                        errorMessage: ''
                    }))}
                    onKeyDown={handle}
                />


            </Box>
        </Box>
    );
};

export default LoginPage;
