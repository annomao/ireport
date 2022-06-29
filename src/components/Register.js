import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Register() {
  const[name, setName] = useState("")
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[errors, setErrors] = useState("")
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://ireport-api.herokuapp.com/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password
      }),
    })
      .then((r) => {
        if(r.status === 409){
          setErrors("User already exists, try again or login to your account!")
          setName(""); setEmail(""); setUsername(""); setPassword("")
        }
        else{
          r.json()
          setName(""); setEmail(""); setUsername(""); setPassword("")
          navigate("/login")
        }
      })
  }

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center h-screen">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl">
        <h3 className="text-2xl font-bold text-base text-center">Register for an account</h3>
        <form onSubmit={handleFormSubmit}>
        <h3 className="font-bold text-lg text-red-600">{errors}</h3>
          <div className="mt-4">
            <label className="block text-base" htmlFor="name">Full Name</label>
            <input type="text" placeholder="Full name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
          <div className="mt-4">
            <label className="block text-base" htmlFor="username">UserName</label>
            <input type="text" placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
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
              <button className="px-6 py-2 mt-4 text-white bg-base/90 rounded-lg hover:bg-base">Register</button>
          </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Register