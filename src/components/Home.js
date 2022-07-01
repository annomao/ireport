import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import {useUserStatus} from '../hooks/useUserStatus'
import DisplayReports from './dashboard/DisplayReports'

function Home() {
  const [allReports, setAllReports] = useState([])

  useUserStatus()

  useEffect(()=>{
    fetch(`https://ireport-api.herokuapp.com/reports`)
    .then(r => r.json())
    .then(fetchedReports => setAllReports(fetchedReports))
  },[])

  return (
    <>
    <Header/>
    <div className="flex justify-center p-3">
      <div className="text-center">
        <h1 className="text-4xl text-base my-4">IReport</h1>
        <p className="my-4">Do you want to report corruption or tell us something that needs Government intervention?</p>
        <NavLink to="/login" className="inline-block text-sm px-8 py-4 leading-none border text-white bg-base hover:border-transparent mt-4 lg:mt-0">Tell Us</NavLink>
      </div>
    </div>
    <div className="my-6"></div>
    <div className="flex justify-center p-3">
      <h1 className="text-3xl text-base my-4">Current Reports</h1>
    </div>
    <DisplayReports reports={allReports}/>
    </>
  )
}

export default Home