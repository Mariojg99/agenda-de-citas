import { Navigate } from "react-router-dom"
import React from "react"


export const PrivateRoutes = ({isAuthenticated,children}) => {
    return isAuthenticated
    ? children
    : <Navigate to="/autentication" />
}