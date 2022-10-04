import { mdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
        <div className="note">
            <span>Hello! This is our first note!</span>
            {/* footer div that'll hold the date and delete icon */}
            <div className="note_footer"></div>
            <small>19/11/2022</small>
            <mdDeleteForever className="delete-icon" />

        </div>
    )
};

export default Note;