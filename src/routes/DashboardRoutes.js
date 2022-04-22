import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import Citas from '../pages/Citas';
import Home from '../pages/Home';

const DashboardRoutes = () => {
  return (
    <div>
        <NavMenu />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/citas' element={<Citas />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default DashboardRoutes;