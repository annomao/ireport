import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'

function Home() {
  return (
    <>
    <Header/>
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-7xl text-base my-4">IReport</h1>
        <p className="my-4">Do you want to report corruption or tell us something that needs Government intervention?</p>
        <NavLink to="/login" className="inline-block text-sm px-8 py-4 leading-none border text-white bg-base hover:border-transparent mt-4 lg:mt-0">Tell Us</NavLink>
      </div>
    </div>
    </>
  )
}

export default Home