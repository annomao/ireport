import React, {createContext, useState, useEffect } from 'react'

const AuthContext = React.createContext({});

function AuthProvider({children}) {
  const [auth, setAuth] = useState(null)

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"));
    setAuth(user)
  },[auth])

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
    {children}
    </AuthContext.Provider>
  )

}

export { AuthProvider, AuthContext} 