import { useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'

function useUserStatus() {
  const { setAuth } = useContext (AuthContext)

  function getUser(){
    let user = JSON.parse(localStorage.getItem("user"));
    if (user){
      setAuth(user)
    }
    else {
      setAuth(null)
    }
  }
  
  useEffect(()=>{
    getUser()
  },[])
}

export default useUserStatus