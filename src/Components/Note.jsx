import React from "react"
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {

    return (
        <div className="Note">
            <span>{text}</span>
            <div className="Note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={()=> handleDeleteNote(id)} 
                    className="Delete-icon" 
                    size="1.3em" />
            </div>
        </div>
    )
}


export default Note;