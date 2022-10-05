import { MdDeleteForever} from 'react-icons/md';


const Note = ({id, text, date}) => {
    return (
        <div className="note">
            <span>{text}</span>
            {/* footer div that'll hold the date and delete icon */}
            <div className="note_footer"></div>
            <small>{date}</small>
            <MdDeleteForever className="delete-icon"  size='1.3em'/>

        </div>
    )
};

export default Note;