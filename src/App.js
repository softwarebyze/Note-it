import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";

export default function App() {
  let data = JSON.parse(localStorage.getItem("notes")) ?? [];
  const [notes, setNotes] = useState(data);
  const defaultNote = {
    id: null,
    text: "",
    title: "",
    date: null,
    updatedDate: null,
  };
  const [currentNote, setCurrentNote] = useState(defaultNote);

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
    <Container className="mt-5 mx-auto">
      <Navbar fixed="top" bg="dark" variant="dark" className="gradient">
        <Container>
          <Navbar.Brand>Note it</Navbar.Brand>
          <Button variant="dark" onClick={handleRandomNotesClick}>
            Add Random Note
          </Button>
        </Container>
      </Navbar>
      <NoteForm currentNote={currentNote} addNote={addNote} />
      <NotesGrid
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        addNote={addNote}
        deleteNote={deleteNote}
        editNote={editNote}
        notes={notes}
      />
    </Container>
  );
}
