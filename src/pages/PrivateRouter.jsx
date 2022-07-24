import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import {useState , useEffect} from 'react'
import {User} from '../context/Auth'
// import {useContext} from 'react'
import {useConsumeUser} from '../context/Auth'


const PrivateRouter = () => {
  const {user , setUser} = useConsumeUser()
//! bu bilgi global stateten geliyor.

  return (
    user ?   <Navigate to="/" />  :  <Outlet />      
  
   
  )
}

export default PrivateRouter