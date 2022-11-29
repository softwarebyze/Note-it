import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function NewNoteForm({ addNote }) {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      addNote(noteText, noteTitle);
      setNoteText("");
      setNoteTitle("");
    }
  };

  return (
    <Form
      onSubmit={handleAddClick}
      className="NewNoteForm p-3 m-3 w-50 mx-auto border"
    >
      <Form.Control
        type="text"
        placeholder="Title"
        className="my-2"
        value={noteTitle}
        onChange={handleNoteTitleChange}
      />
      <Form.Control
        className="my-2"
        as="textarea"
        placeholder="Your note..."
        value={noteText}
        onChange={handleNoteTextChange}
        style={{ height: "150px" }}
        autoFocus
      />
      <div className="d-grid">
        <Button variant="primary" type="submit" className="my-2">
          Add
        </Button>
      </div>
    </Form>
  );
}
