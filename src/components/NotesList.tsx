import * as React from 'react';
import { Note } from '../Models/NoteModel';
import Notes from './Notes';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }
    const renderNotes = (): JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete} />
        })
    }
    return (
        <>
            <h4 className="mt-5">Notes:</h4>
            <div>{renderNotes()}</div>
        </>
    );
};

export default NotesList;
