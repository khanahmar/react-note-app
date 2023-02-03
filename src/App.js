import "./App.css"
import React from "react"
import Notes from "./Notes.js"

function App() {
  const [textValue, setTextValue] = React.useState("")
  const [noteArray, setNoteArray] = React.useState([])

  function takeText(event) {
    setTextValue(event.target.value)
  }

  function deleteItem(item) {
    setNoteArray(noteArray.filter((text) => text !== item))
  }

  function updateNote(item) {
    noteArray.forEach((text) => {
      if (text === item) {
        setTextValue(item)
      }
    })
  }

  function saveNote() {
    if (textValue !== "") {
      setTextValue("")
      setNoteArray((prevArray) => {
        return [...prevArray, textValue]
      })
    }
  }
  console.log(noteArray)
  console.log(textValue)

  return (
    <div className="App">
      <h1>Take Notes</h1>
      <div className="row-1">
        <textarea value={textValue} name="textarea" onChange={takeText} />
        <button onClick={saveNote} className="save">
          Save
        </button>
      </div>
      <div className="row-2">
        {noteArray.map((item, index) => {
          return (
            <Notes
              onDel={() => deleteItem(item)}
              key={index}
              onClick={saveNote}
              text={item}
              onUpdate={() => updateNote(item)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
