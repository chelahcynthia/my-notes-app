import {useState} from 'react';
const AddNote  = () => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) => {
   setNoteText(event.target.value);
    };
    return(
        <div className="note_new">
            <textarea rows="8" cols="10" placeholder="Type to add a note.."
            value={noteText}
            onChange={handleChange}
            ></textarea>
            {/* footer  */}
            <div className="note_footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;