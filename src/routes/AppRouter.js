import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import DashboardRoutes  from './DashboardRoutes'
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                //console.log(user)
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }

        })
    }, [setIsLoggedIn])

    return (
        <Router>
            <Routes>
                <Route path="/login" element={
                    <PublicRoutes isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoutes>
                } />

                <Route path="/*" element={
                    <PrivateRoutes isAuthenticated={isLoggedIn}>
                        <DashboardRoutes />
                    </PrivateRoutes>
                } />
            </Routes>
        </Router>
    )
}

export default AppRouter;