import "./App.css"
import React from "react"
import Notes from "./Notes.js"

function App() {
  const [textValue, setTextValue] = React.useState("")
  const [isActive, setIsActive] = React.useState(false)
  const [noteArray, setNoteArray] = React.useState(
    JSON.parse(localStorage.getItem("notes"))
  )

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteArray))
  }, [noteArray])

  function takeText(event) {
    setTextValue(event.target.value)
  }

  function deleteItem(item) {
    setNoteArray(noteArray.filter((text) => text !== item))
  }

  function updateNote(item) {
    setIsActive(!isActive)
    noteArray.forEach((text) => {
      if (text === item) {
        setTextValue(item)
      }
    })
  }

  function saveNote() {
    if (isActive) {
      setTextValue("")
      setNoteArray((prevArray) => {
        return [...prevArray.textValue]
      })
    } else {
      if (textValue !== "") {
        setTextValue("")
        setNoteArray((prevArray) => {
          return [...prevArray, textValue]
        })
      }
    }
  }
  console.log(noteArray)
  console.log(textValue)
  console.log(isActive)

  return (
    <div className="App">
      <h1>Take Notes</h1>
      <div className="row-1">
        <textarea placeholder="Enter Note" value={textValue} name="textarea" onChange={takeText} />
        <button onClick={saveNote} className="save">
          {isActive ? "Update" : "Save"}
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
