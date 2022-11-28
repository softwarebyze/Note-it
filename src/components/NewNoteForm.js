import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function NewNoteForm({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <Form onSubmit={handleAddClick} className="NewNoteForm p-3 m-3 w-50 mx-auto border">
      <Form.Control
        as="textarea"
        placeholder="Your note..."
        value={noteText}
        onChange={handleChange}
        style={{ height: "150px" }}
      />
      <Button type="submit" className="my-2">
        Add
      </Button>
    </Form>
  );
}
