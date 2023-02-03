import React from "react"

export default function Notes(props) {
  return (
    <div key={props.index} className="note">
      <p>{props.text}</p>
      <div className="buttons">
        <button onClick={() => props.onDel()}>Delete</button>
        <button onClick={() => props.onUpdate()}>Update</button>
      </div>
    </div>
  )
}
