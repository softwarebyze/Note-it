import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import NewNoteForm from "./components/NewNoteForm";
import NotesGrid from "./components/NotesGrid";
import { nanoid } from "nanoid";
import { Container, Navbar } from "react-bootstrap";
import DeleteNoteModal from "./components/DeleteNoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    id: null,
    text: "",
    title: "",
  });

  const addNote = (text, title) => {
    const date = new Date();
    const options = {
      // month: "short",
      // day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const newNote = {
      id: nanoid(),
      text: text,
      title: title,
      date: date.toLocaleString("en-US", options),
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
      <Navbar bg="dark" variant="dark" className="gradient">
        <Container>
          <Navbar.Brand>Note it</Navbar.Brand>
        </Container>
      </Navbar>
      <NewNoteForm
        currentNote={currentNote}
        addNote={addNote}
        className="mx-auto"
      />
      <NotesGrid
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        addNote={addNote}
        deleteNote={deleteNote}
        notes={notes}
      />
      <DeleteNoteModal />
    </>
  );
}

export default App;
