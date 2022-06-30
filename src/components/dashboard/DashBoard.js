import React,{useState, useEffect, useContext} from 'react'
import DisplayReports from './DisplayReports'
import CreateReport from './CreateReport'
import { AuthContext } from '../../context/AuthProvider'
import UserProfile from './UserProfile'

function DashBoard() {
  const [reports, setReports] = useState([])
  const [isAddingReport, setIsAddingReport] = useState(false)

  const { auth } = useContext(AuthContext)

  useEffect(()=>{
    fetch(`https://ireport-api.herokuapp.com/user/reports/${auth.id}`)
    .then(r => r.json())
    .then(fetchedReports => setReports(fetchedReports))
  },[])

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

  function handleDeleteReport(deletedReportId){
    const updatedReports = reports.filter( report => report.id !== deletedReportId )
    setReports(updatedReports)
  }

  return (
    <>
    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2 ">

        <UserProfile user={auth}/>

        
        <div class="w-full md:w-9/12 mx-2 h-64">
        <div class="bg-white p-3 shadow-md shadow-cyan-500/50 rounded-sm">
          {isAddingReport ? <CreateReport onAddReport={handleAddReport} isAddingReport={isAddingReport} setIsAddingReport={setIsAddingReport}/> :
          <>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <button className="px-3 py-1 mt-4 text-white bg-base/90 rounded-lg hover:bg-base"
                onClick={()=> setIsAddingReport((isAddingReport) => !isAddingReport)}>Create Report</button>
            </div>
            <div className="text-gray-700">
              <DisplayReports reports={reports} onUpdateReport={handleUpdateReport} onDeleteReport={handleDeleteReport}/>
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