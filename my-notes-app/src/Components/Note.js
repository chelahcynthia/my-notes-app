import React from 'react';
import { MdDeleteForever} from 'react-icons/md';

const Note = ({
    id, 
    text, 
    date, 
    handleDeleteNote
    }) => {
    return (
        <>
          <div className="note">
            <span>{text}</span>
            {/* footer div that'll hold the date and delete icon */}
            <div className="note_footer">
              <small>{date}</small>
              <MdDeleteForever 
              onClick={() =>handleDeleteNote(id) } 
              className="delete-icon"  
              size='1.3em'/>
            </div>
          </div>
        </>
    )
};

export default Note;