import React,{useState, useEffect, useContext} from 'react'
import DisplayReports from './DisplayReports'
import CreateReport from './CreateReport'
import { AuthContext } from '../../context/AuthProvider'
import UserProfile from './UserProfile'
import DashHeader from './DashHeader'

function DashBoard() {
  const [reports, setReports] = useState([])
  const [isAddingReport, setIsAddingReport] = useState(false)
  const [search, setSearch] = useState("")

  const { auth, setAuth } = useContext(AuthContext)

  useEffect(()=>{
    fetch(`https://ireport-api.herokuapp.com/user/reports/${auth.id}`)
    .then(r => r.json())
    .then(fetchedReports => setReports(fetchedReports))
  },[])

  const searchReports = reports.filter((report)=>{
    return report.title.toLowerCase().includes(search.toLowerCase())
  })

  function handleLogOut(){
    localStorage.removeItem("user")
    setAuth(null)
  }

  function handleAddReport(addedReport){
    setReports([...reports, addedReport])
  }

  function handleUpdateReport(updatedReport){
    const updatedReports = reports.map(report =>{
      if(report.id === updatedReport.id){
        return updatedReport
      }
      return report
    })
    setReports(updatedReports)
  }

  function handleDeleteReport(deletedReport){
    const updatedReports = reports.map(report =>{
      if(deletedReport.id === report.id){
        return deletedReport
      }
      return report
    })
    setReports(updatedReports)
  }

  return (
    <>
    <DashHeader logout={handleLogOut}/>
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">

        <UserProfile user={auth}/>

        
        <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-md shadow-cyan-500/50 rounded-sm">
          {isAddingReport ? <CreateReport onAddReport={handleAddReport} isAddingReport={isAddingReport} setIsAddingReport={setIsAddingReport}/> :
          <>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <button className="px-3 py-1 mt-4 mr-4 text-white bg-base/90 rounded-lg hover:bg-base"
                onClick={()=> setIsAddingReport((isAddingReport) => !isAddingReport)}>Create Report</button>
              <label className="block text-base">Search</label>
              <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
              />
            </div>
            <div className="text-gray-700">
              <DisplayReports reports={searchReports} onUpdateReport={handleUpdateReport} onDeleteReport={handleDeleteReport}/>
            </div>
          </>    
        } 
        </div>
        </div> 

      </div>
    </div>
    </>
    
  )
}

export default DashBoard