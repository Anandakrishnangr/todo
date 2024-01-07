import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Splash from '../pages/splash'
import GetStarted from '../pages/getStarted'
import LoginPage from '../pages/Login'

const RouteMap = () => {
    return (
        <Routes>
            <Route element={<GetStarted />} path='/' />
            <Route element={<LoginPage />} path='/signin' />

        </Routes>
    )
}

export default RouteMap