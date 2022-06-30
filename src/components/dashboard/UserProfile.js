import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

function UserProfile({user}) {
  return (
    <>
    <div className="w-full md:w-3/12 md:mx-2">
      <div className="bg-white p-3 border-t-4 border-green-400">
        <div className="image overflow-hidden">
          <FaRegUserCircle/>
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.username}</h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">{user.name}</h3>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">{user.email}</h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
      </div>
    </div>
    </>
  )
}

export default UserProfile