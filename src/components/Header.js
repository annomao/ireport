import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-base p-6 fixed w-full z-10 top-0">
		<div className="flex items-center flex-shrink-0 text-white mr-6">
			<NavLink to="/" className="text-white no-underline hover:text-white hover:no-underline">
				<span className="text-3xl pl-2"><i className="em em-grinning"></i>IReport</span>
			</NavLink>
		</div>

		<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul className="list-reset lg:flex justify-end flex-1 items-center">
				<li className="mr-3">
					<NavLink to="/login" className="inline-block py-2 px-4 text-white no-underline hover:text-gray-400">Log In</NavLink>
				</li>
				<li className="mr-3">
					<NavLink to="/register" className="inline-block no-underline text-white hover:text-gray-400 py-2 px-4">Sign Up</NavLink>
				</li>
			</ul>
		</div>
	</nav>
  )
}
