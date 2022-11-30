import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
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
    date: null,
    updatedDate: null,
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
      updatedDate: null,
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id, text, title) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            text: text,
            title: title,
            updatedDate: new Date().toLocaleString("en-US", {
              // month: "short",
              // day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
          };
        } else {
          return note;
        }
      })
    );
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="gradient">
        <Container>
          <Navbar.Brand>Note it</Navbar.Brand>
        </Container>
      </Navbar>
      <NoteForm
        currentNote={currentNote}
        addNote={addNote}
        className="mx-auto"
      />
      <NotesGrid
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        addNote={addNote}
        deleteNote={deleteNote}
        editNote={editNote}
        notes={notes}
      />
      <DeleteNoteModal />
    </>
  );
}

export default App;
