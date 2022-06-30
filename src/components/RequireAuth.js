import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

function RequireAuth() {
  const { auth } = useContext(AuthContext)

  return (
    auth ? <Outlet/> : <Navigate to="/login" replace/>
  )
}

export default RequireAuth