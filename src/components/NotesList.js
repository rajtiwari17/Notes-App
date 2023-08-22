import Notes from "./Notes";
import React from "react";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note)=> <Notes id={notes.id} text={notes.text} date={notes.date} />)}
    </div>
  );
};

export default NotesList;
