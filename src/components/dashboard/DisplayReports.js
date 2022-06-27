import React from 'react'

function DisplayReports({data}) {
  // const reports = data.map((report) =>{
  //   return(
  //     <tr className="bg-white border-b-2 border-gray-200" key={report.id}>
  //         <td className="px-16 py-2 flex flex-row items-center">{report.id}</td>
  //         <td><span className="text-center ml-2 font-semibold">{report.title}</span></td>
  //         <td className="px-16 py-2"><span>{report.location}</span></td>
  //         <td className="px-16 py-2"><span>{report.comment}</span></td>
  //         {/* <td className="text-left py-3 px-4"></td> */}
  //     </tr>
  //   )
  // })
  return (
    <>
      <table className="max-w-5xl mx-auto table-auto">
        <thead className="justify-between">
          <tr className="bg-base">
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">ID</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Title</span>
            </th>
          
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Location</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Comment</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Setting</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {/* {reports} */}
        </tbody>
      </table>
    </>
  )
}

export default DisplayReports