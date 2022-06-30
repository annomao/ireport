import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DashHeader() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-base p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <NavLink to="/" className="font-bold text-5xl text-white">IReport</NavLink>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
        <div className="text-sm md:flex-grow">
        </div>
        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-base hover:bg-white mt-4 lg:mt-0">
          LogOut
          </button>
        </div>
      </div>
    </nav>
  )
}