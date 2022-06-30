import React,{useState} from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import EditUser from './EditUser'

function UserProfile({user}) {
  const [isEditingUser, setIsEditingUser] = useState(false)
  return (
    <>
    <div className="w-full md:w-3/12 md:mx-2 shadow-sm shadow-cyan-500/50 ">
      <div className="bg-white p-3 border-t-2 border-b-2 md:border-b-0 border-cyan-500/50 text-center">
        <div className="text-8xl text-base/90 flex justify-center">
          <FaRegUserCircle/>
        </div>
        <h1 className="text-base/90 font-medium text-xl leading-8 my-2">
          <span className="text-gray-500 font-normal text-lg mr-2">Username:</span>
          {user.username}
        </h1>
        <h3 className="text-base/90 font-medium text-xl leading-8 my-2">
          <span className="text-gray-500 font-normal text-lg mr-2">Name:</span>
          {user.name}
          </h3>
        <h3 className="text-base/90 font-medium text-xl leading-8 my-2">
          <span className="text-gray-500 font-normal text-lg mr-2">Email:</span>
          {user.email}
        </h3>
      </div>
      <button onClick={() => setIsEditingUser((isEditingUser) => !isEditingUser)}
        className="block w-full text-base text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
        Edit Profile</button>
    <div className="mb-8"></div>
    {
      isEditingUser ? <EditUser user={user} isEditingUser={isEditingUser} setIsEditingUser={setIsEditingUser} /> :null
    }
    </div>
    </>
  )
}

export default UserProfile