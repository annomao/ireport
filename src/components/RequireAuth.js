import React, { useContext } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

function RequireAuth() {
  const {auth} = useContext(AuthContext)

  return (
    auth ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
  )
}

export default RequireAuth