import { useEffect, useState } from "react";

import NotesList from "./Components/Noteslist";
import React from "react";
import Search from "./Components/Search";

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
    method: "DELETE"
  })
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const searchNotes = (text) => {
    const newNotes = notes.filter((note) => note.text !== text);

  }

  return (
    <div className="container">
      <Search handleSearchNote={searchText} />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
