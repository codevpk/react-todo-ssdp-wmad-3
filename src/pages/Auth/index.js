import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function index() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgot-password' element={<></>} />
            <Route path='reset-password' element={<></>} />
            <Route path='*' element={<>404 Page Not Found</>} />
        </Routes>
    )
}
