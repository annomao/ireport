import React,{useState, useEffect} from 'react'

function DashBoard() {
  const[reports, setReports] = useState([])

  useEffect(()=>{
    fetch('https://ireport-api.herokuapp.com/user/reports')
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
      
    </div>
  )
}

export default DashBoard