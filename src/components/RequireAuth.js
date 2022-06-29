import React, { useContext } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider'

function RequireAuth() {
  const {auth} = useContext(AuthContext)
  const location = useLocation()

  return (
    auth ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
  )
}

export default RequireAuth