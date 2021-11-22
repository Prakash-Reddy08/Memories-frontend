import React from 'react'
import { Navigate } from 'react-router';


const ProtectedRoute = ({ children }) => {
    const myUser = true;
    return myUser ? children : <Navigate to="/login" />

}

export default ProtectedRoute
