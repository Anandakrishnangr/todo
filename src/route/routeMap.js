import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Splash from '../pages/splash'
import GetStarted from '../pages/getStarted'
import LoginPage from '../pages/Login'
import TodoList from '../pages/Todo'
import { useSelector } from 'react-redux'
import ToDo from '../layouts/toDO'
import NavBar from '../components/NavBar'
import { Box } from '@mui/material'

const RouteMap = () => {
    let userName = useSelector((state) => state?.user?.UserName)
    if (userName) {
        return (
            <Box>
                <NavBar/>
                <Routes>
                    {/* <Route element={<GetStarted />} path='/' /> */}
                    <Route element={<TodoList />} path='/todo'  ></Route>
                    <Route element={<ToDo />} path='/'  ></Route>

                </Routes>
            </Box>
        )
    } else {
        return (
            <Routes>
                <Route element={<LoginPage />} path='/' />
            </Routes>
        )
    }

}

export default RouteMap