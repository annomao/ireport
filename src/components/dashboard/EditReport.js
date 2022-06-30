import React, {useState} from 'react'

function EditReport({report, onUpdateReport, isEditing,setIsEditing}) {
  const [location, setLocation] = useState(report.location);
  const [comment, setComment] = useState(report.comment);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://ireport-api.herokuapp.com/reports/${report.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: location,
        comment: comment
      }),
    })
      .then((r) => r.json())
      .then((updatedRecord) => onUpdateReport(updatedRecord));
      setIsEditing(() => isEditing = !isEditing)
  }

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <form onSubmit={handleFormSubmit} className="px-2">
      <label className="block text-base">Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
      />
      <label className="block text-base">Comment</label>
      <textarea
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
        rows={5}
      />
      <div className="flex items-baseline justify-between">
        <button className="px-6 py-2 mt-4 text-white bg-base/90 rounded-lg hover:bg-base">Edit</button>             
      </div>
    </form>
    </div>
  )
}

export default EditReport