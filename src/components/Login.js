import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import {useUserStatus} from '../hooks/useUserStatus'
import Header from './Header'

function Login() {
  
  useUserStatus()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()
  const {setAuth} = useContext(AuthContext)

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://ireport-api.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then((r) => {
        if(r.status === 403){
          setErrors("Incorrect email and/or password")
        }
        else{
          return r.json()
        }
      })
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data))
        setAuth(data)
        setEmail("")
        setPassword("")
        navigate("/dashboard")
      })
  }

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center h-screen">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl">
        <h3 className="text-2xl font-bold text-center text-base">Login to your account</h3>
        <form onSubmit={handleFormSubmit}>
        <h3 className="font-bold text-lg text-red-600">{errors}</h3>
          <div className="mt-4">
            <label className="block text-base" htmlFor="email">Email</label>
            <input type="text" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
          <div className="mt-4">
            <label className="block text-base">Password</label>
            <input type="password" placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
          <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-base/90 rounded-lg hover:bg-base">Login</button>             
          </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login