import Note from "./Note";
import Search from "./Search";

const NotesList = ({notes, handleDeleteNote, handleSearchNote }) => {
    
    const note = notes.map((note) =>( 
        <Note id={note.id} 
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
        />
        ))

    return (
        <>
          <Search handleSearchNote={handleSearchNote} />
          <div className="notes_list">
          {note}
          </div>
        </>
    )
};
export default NotesList