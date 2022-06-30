import React,{useState, useEffect, useContext} from 'react'
import DisplayReports from './DisplayReports'
import CreateReport from './CreateReport'
import { AuthContext } from '../../context/AuthProvider'

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
    <div>
      {isAddingReport ? <CreateReport onAddReport={handleAddReport} isAddingReport={isAddingReport} setIsAddingReport={setIsAddingReport}/> :
      <>
      <button className="px-6 py-2 mt-4 text-white bg-base/90 rounded-lg hover:bg-base"
      onClick={()=> setIsAddingReport((isAddingReport) => !isAddingReport)}>Create Report</button>
      <DisplayReports reports={reports} onUpdateReport={handleUpdateReport} onDeleteReport={handleDeleteReport}/>
      </>
      
      }
      </div>
  )
}

export default DashBoard