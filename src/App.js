import { useState } from "react";
import React from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

function App() {

  const [notes,setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note.',
      date: '23/08/2023'
    },
    {
      id: nanoid(),
      text: 'This is my second note.',
      date: '24/08/2023'
    },
    {
      id: nanoid(),
      text: 'This is my third note.',
      date: '26/08/2023'
    }
]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
