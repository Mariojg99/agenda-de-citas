import { Navigate } from "react-router-dom"
import React from "react"

export const PublicRoutes = ({isAuthenticated,children}) => {
  
    return !isAuthenticated
    ? children
    : <Navigate to="/*"/>
}