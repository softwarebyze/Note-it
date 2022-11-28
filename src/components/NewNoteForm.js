import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function NewNoteForm({ addNote }) {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <Form
      onSubmit={handleAddClick}
      className="NewNoteForm p-3 m-3 w-75 mx-auto border"
    >
      <Form.Control
        as="textarea"
        placeholder="Your note..."
        value={noteText}
        onChange={handleChange}
        style={{ height: "150px" }}
        autoFocus
      />
      <Button type="submit" className="my-2">
        Add
      </Button>
    </Form>
  );
}
