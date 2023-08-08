import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function index() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<></>} />
            <Route path='contact' element={<></>} />
            <Route path='*' element={<>404 Page Not Found</>} />
        </Routes>
    )
}
