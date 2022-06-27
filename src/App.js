import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
