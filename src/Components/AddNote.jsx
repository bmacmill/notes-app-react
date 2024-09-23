import React from "react"
import { useState } from "react"

const AddNote = ({ handleAddNewNote }) => {

    const [noteText, setNoteText] = useState("")

    //no need for state value for character limit
    let charLimit = 200;

    function handleChange(e) {

        if (charLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    function handleSaveNote() {
        if (noteText.trim().length >= 0) {
            handleAddNewNote(noteText)
            //clear note text
            setNoteText("")
        }
    }

    return (

        <div className="Note New">
            <textarea
                rows="8"
                cols="10"
                placeholder="add a new note"
                onChange={handleChange}
                value={noteText}>
            </textarea>
            <div className="Note-footer">
                <small>{charLimit - noteText.length} characters remaining</small>
                <button 
                    className="SaveNote" 
                    onClick={handleSaveNote}>
                    Save note</button>
            </div>
        </div>)
}

export default AddNote;