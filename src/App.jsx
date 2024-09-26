import React from "react"
import { useState, useEffect } from "react"
import NotesList from "./Components/NotesList"
import Search from "./Components/Search"
import Header from "./Components/Header"
import { nanoid } from "nanoid"

const App = () => {


  //notes data array saved in local storage...
  const savedNotes = JSON.parse(localStorage.getItem('react-app-notes')) || []
  const [notes, setNotes] = useState(savedNotes)

  //storing filter text in state here in App
  const [searchText, setSearchText] = useState("")

  //darkmode state
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem('react-app-notes', JSON.stringify(notes))
  }, [notes])



  //passsing state value down through componenets...
  function addNote(text) {
    const date = new Date()
    const newNote = {
      key: crypto.randomUUID(),
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    //add new note to the beginning
    const newNotes = [newNote, ...notes]
    setNotes(newNotes)

  }

  function deleteNote(id) {
    const newArrayAfterDelete = notes.filter((note) => note.id !== id)
    setNotes(newArrayAfterDelete)
  }


  return (
    <div className={`${darkMode && "DarkMode"}`}>
      <div className="Container">
        <Header
          handleDarkMode={setDarkMode} />
        <Search
          handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          //notes={notes}
          handleAddNewNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>


  )
}


export default App;
