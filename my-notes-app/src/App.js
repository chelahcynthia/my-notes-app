import {useEffect, useState}  from 'react';

import NotesList from "./Components/Noteslist";
import React from "react";
import Search from './Components/Search';


const App = () => {
  const [notes, setNotes] = useState([]);

useEffect(() => {
  fetch("https://my-notes-server-app.herokuapp.com/notes")
.then((response) => response.json())
.then((data) => {
  setNotes(data)


})

},[])

const [searchText, setSearchText] = useState('');
const addNote = (text) => {
   const date = new Date();
   const newNote = {
    
    text: text,
    date: date.toDateString()

   }
   fetch("https://my-notes-server-app.herokuapp.com/notes",{
    method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newNote)
   })
   .then((res) => console.log(res))
setNotes([...notes, newNote])
};
const deleteNote = (id) => {
 const newNotes= notes.filter((note) => note.id !== id);
 setNotes(newNotes);
}


  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote= {deleteNote}
      />
    </div>
  )
}


export default App;