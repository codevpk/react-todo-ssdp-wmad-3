import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from "./Dashboard"
import PrivateRoute from './PrivateRoute'
import { useAuthContext } from 'contexts/AuthContext'

export default function Index() {
    const { isAuth } = useAuthContext()
    return (
        <Routes>
            <Route path='/*' element={<Frontend />} />
            <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/" />} />
            <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
        </Routes>
    )
}
