import React, {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider';

function EditUser({user, isEditingUser, setIsEditingUser}) {
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const {setAuth} = useContext(AuthContext)

  function handleFormSubmit(e){
    e.preventDefault();

    fetch(`https://ireport-api.herokuapp.com/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username
      }),
    })
      .then((r) => r.json())
      .then((updatedUser) => {
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setAuth(updatedUser)
        setIsEditingUser(() => isEditingUser = !isEditingUser) 
      });
      
  }

  return (
    <>
      <div className="bg-white p-3 border-t-2 border-b-2 md:border-b-0 text-center mt-4">
        <form onSubmit={handleFormSubmit} className="px-2">
          <label className="block text-base">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
          />
          <label className="block text-base">UserName</label>
          <input
            type ="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
          />
          <div className="flex items-baseline justify-between">
            <button className="px-4 py-2 mt-4 mb-4 text-white bg-base/90 rounded-lg hover:bg-base">Edit</button>             
        </div>
        </form>
      </div>
    </>
  )
}

export default EditUser