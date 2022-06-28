import React, {useState} from 'react'

function CreateReport({onAddReport}) {

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [comment, setComment] = useState("")
  const [type, setType] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://ireport-api.herokuapp.com/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        location: location,
        comment: comment,
        type_id: type
      }),
    })
      .then((r) => r.json())
      .then((addedRecord) => onAddReport(addedRecord));
  }

  return (
    <>
    <div className="flex items-center justify-center h-screen">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl">
        <h3 className="text-2xl font-bold text-center text-base">Create Report</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <label className="block text-base" htmlFor="title">Title</label>
            <input type="text" placeholder="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
          <div className="mt-4">
            <label className="block text-base">Location</label>
            <input type="text" placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
          <div className="mt-4">
            <label className="block text-base">Comment</label>
            <input type="text" placeholder="Add a brief description..."
            value={comment}
            onChange={e =>setComment(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"/>
          </div>
          <div className="mt-4">
            <label className="block text-base">Type</label>
            <select value={type}
            onChange={e =>setType(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base">
              <option value={1}>Corruption</option>
              <option value={2}>Intervention</option>
            </select>
          </div>
          <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-base/90 rounded-lg hover:bg-base">Report</button>             
          </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default CreateReport