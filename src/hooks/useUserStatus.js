import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'


function useUserStatus() {

  const { setAuth } = useContext (AuthContext)
  const navigate = useNavigate()

  function getUser(){
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user){
      setAuth(user)
      navigate("/dashboard")
    }
    else {
      setAuth(null)
      navigate("/")
    }
  }
  
  useEffect(()=>{
    getUser()
  },[])
}

export {useUserStatus}