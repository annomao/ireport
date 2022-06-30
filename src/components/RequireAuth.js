import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

function RequireAuth({children}) {
  const { auth } = useContext(AuthContext)

  if (!auth) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default RequireAuth