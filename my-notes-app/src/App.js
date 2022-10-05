import {useState}  from 'react';
import { nanoid} from 'nanoid';
import NotesList from "./Components/Noteslist";
import React from "react";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "20/11/2022"
  },

  {
    id: nanoid(),
    text: "This is my second note!",
    date: "21/11/2022"
  },

  {
    id: nanoid(),
    text: "This is my third note!",
    date: "22/11/2022"
  },
]);
const addNote = (text) => {
   const date = new Date();
   const newNote = {
    id: nanoid(),
    text: text,
    date: date.toDateString()

   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
};
const deleteNote = (id) => {
 const newNotes= notes.filter((note) => note.id !== id);
 setNotes(newNotes);
}


  return (
    <div className="container">
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote= {deleteNote}
      />
    </div>
  )
}


export default App;