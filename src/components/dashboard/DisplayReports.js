import React from 'react'
import ReportCard from './ReportCard'

function DisplayReports({reports,onUpdateReport,onDeleteReport}) {
  const displayedReports = reports.map((report) =>{
    return(
      <ReportCard key={report.id} report={report} onUpdateReport={onUpdateReport} onDeleteReport={onDeleteReport}/>
    )
  })
  return (
    <>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {displayedReports}
    </div>
    </>
  )
}

export default DisplayReports