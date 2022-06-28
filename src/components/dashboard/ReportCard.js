import React from 'react'
import { MdDeleteOutline, MdOutlineEditNote } from "react-icons/md"

function ReportCard({report}) {
  return (
    <>
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">title</div>
        <div className="font-bold text-xl mb-2">type</div>
        <div className="font-semibold text-xl mb-2">location</div>
        <p className="text-gray-700 text-base">
          comment
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><MdOutlineEditNote/></span>
        </button>
        <button>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><MdDeleteOutline/></span>
        </button>
      </div>
    </div>
    </>
  )
}

export default ReportCard