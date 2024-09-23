import React from "react"
import Note from "./Note"
import AddNote from "./AddNote"


const NotesList = ({ notes, handleAddNewNote, handleDeleteNote }) => {

    return (
        <div className="NotesList">
            {notes.map((note) => (
                <Note 
                    text={note.text} 
                    key={note.key} 
                    id={note.id} 
                    date={note.date} 
                    handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote 
                handleAddNewNote={handleAddNewNote} />
        </div>
    )
}

export default NotesList