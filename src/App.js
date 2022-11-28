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
      // month: "short",
      // day: "numeric",
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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Note it
          </Navbar.Brand>
        </Container>
      </Navbar>
      <NewNoteForm addNote={addNote} className="NewNoteForm mx-auto" />
      <NotesGrid deleteNote={deleteNote} notes={notes} />
    </>
  );
}

export default App;
