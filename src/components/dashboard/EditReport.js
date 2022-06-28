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
      <form onSubmit={handleFormSubmit}>
      <label className="block text-base">Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label className="block text-base">Comment</label>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
    </div>
  )
}

export default EditReport