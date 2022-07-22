import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {
//! bu bilgi global stateten geliyor.
    const isOkay = true;
    const navigate = useNavigate();

  return (
    isOkay ? <Outlet /> : <Navigate to="/" />
  
   
  )
}

export default PrivateRouter