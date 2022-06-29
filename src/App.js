import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/dashboard/DashBoard'
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route element={<RequireAuth/>}>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Route>
    </Routes>
  )
}

export default App
