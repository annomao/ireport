import React, {useState} from 'react'
import { MdDeleteOutline, MdOutlineEditNote } from "react-icons/md"
import EditReport from './EditReport'

function ReportCard({report,onUpdateReport,onDeleteReport}) {

  const [isEditing, setIsEditing] = useState(false)

  function handleDeleteReport(){
    fetch(`https://ireport-api.herokuapp.com/reports/${report.id}`,{
      method:"DELETE"
    })
    onDeleteReport(report.id)
  }

  return (
    <>
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{report.title}</div>
        <div className="font-bold text-xl mb-2">{report.type}</div>
        {
          isEditing ? <EditReport report={report} isEditing={isEditing} setIsEditing={setIsEditing} onUpdateReport={onUpdateReport}/> :
          <>
          <div className="font-semibold text-xl mb-2">{report.location}</div>
          <p className="text-gray-700 text-base">
            {report.comment}
          </p>
        </>
        }
        
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><MdOutlineEditNote/></span>
        </button>
        <button onClick={handleDeleteReport}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><MdDeleteOutline/></span>
        </button>
      </div>
    </div>
    </>
  )
}

export default ReportCard