import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import {useState , useEffect} from 'react'
import {User} from '../context/Auth'
import {useContext} from 'react'
const PrivateRouter = () => {
  const {user , setUser} = useContext(User)
//! bu bilgi global stateten geliyor.

  return (
    user ?   <Navigate to="/" />  :  <Outlet />      
  
   
  )
}

export default PrivateRouter