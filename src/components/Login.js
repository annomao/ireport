import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
    <Header/>
    <div className="flex items-center justify-center h-screen">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl">
        <h3 className="text-2xl font-bold text-center text-base">Login to your account</h3>
        <form>
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