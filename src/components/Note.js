
import React from "react";

const Note = (id,text,date) =>{
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>

                <span className='delete'>DELETE</span>

            </div>
        </div>
    )
}

export default Note;