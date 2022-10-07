import { useEffect, useState } from "react";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import NotesList from "./Components/Noteslist";
import Header from "./Components/Header";
import Home from "./Home";
import NavBar from "./NavBar";
import AddNote from "./Components/AddNote";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://my-notes-server-app.herokuapp.com/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const fetchPost = (newNote) => {
    fetch("https://my-notes-server-app.herokuapp.com/notes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    }).then((res) => console.log(res));
  };

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toDateString(),
    };
    fetchPost(newNote);
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    fetch(`https://my-notes-server-app.herokuapp.com/notes/${id}`, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    // div to edit the toggledarkmode
    // if darkmode === tree then add add dark-mode (below statement)

    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <NavBar />
        <Header handleToggleDarkMode={setDarkMode} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addnote" element={<AddNote handleAddNote={addNote}/> }/>
          <Route 
            path="/noteslist" 
            element={
            <NotesList 
              notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
              note={notes.map(note => note)} 
              handleDeleteNote={deleteNote}
              handleSearchNote={setSearchText}
          />
            } 
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;