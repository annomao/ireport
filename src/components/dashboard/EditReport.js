import React, {useState} from 'react'

function EditReport({report, onUpdateMessage}) {
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
      .then((updatedRecord) => onUpdateMessage(updatedRecord));
  }

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
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