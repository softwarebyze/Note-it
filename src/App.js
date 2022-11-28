import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import NewNoteForm from "./components/NewNoteForm";
import NotesGrid from "./components/NotesGrid";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const options = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString("en-US", options)
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  return (
    <>
      <NewNoteForm
        setNotes={setNotes}
        handleAddNote={addNote}
        className="NewNoteForm mx-auto"
      />
      <NotesGrid notes={notes} />
    </>
  );
}

export default App;
