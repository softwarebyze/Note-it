import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";

function App() {
  let data = JSON.parse(localStorage.getItem("notes")) ?? [];
  const [notes, setNotes] = useState(data);
  const [currentNote, setCurrentNote] = useState({
    id: null,
    text: "",
    title: "",
    date: null,
    updatedDate: null,
  });

  useEffect(() => localStorage.setItem("notes", JSON.stringify(notes)));

  const addNote = (text, title) => {
    const date = new Date();
    const options = {
      month: "short",
      day: "numeric",
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
              month: "short",
              day: "numeric",
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

  const getRandomFact = async () => {
    const res = await fetch(
      `https://uselessfacts.jsph.pl/random.json?language=en`
    );
    const data = await res.json();
    return { randText: data.text, randTitle: "" };
  };

  const getRandomQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    const randText = data.content;
    const randTitle = data.author;
    return { randText, randTitle };
  };

  const handleRandomNotesClick = async () => {
    const randomNoteGenerators = [getRandomFact, getRandomQuote];
    const { randText, randTitle } = await randomNoteGenerators[
      Math.floor(Math.random() * 2)
    ]();
    addNote(randText, randTitle);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="gradient">
        {/* <Navbar fixed="top" bg="dark" variant="dark" className="gradient"> */}
        <Container>
          <Navbar.Brand>Note it</Navbar.Brand>
          <Button variant="dark" onClick={handleRandomNotesClick}>
            Add Random Note
          </Button>
        </Container>
      </Navbar>
      <Container>
        <NoteForm
          currentNote={currentNote}
          addNote={addNote}
          className="mx-auto"
        />
      </Container>
      <NotesGrid
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        addNote={addNote}
        deleteNote={deleteNote}
        editNote={editNote}
        notes={notes}
      />
    </>
  );
}

export default App;
