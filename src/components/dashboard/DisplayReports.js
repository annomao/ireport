import React from 'react'
import ReportCard from './ReportCard'

function DisplayReports({reports}) {
  const displayedReports = data.map((report) =>{
    return(
      <ReportCard key={report.id} report={report} />
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