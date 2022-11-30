import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function NoteForm({
  currentNote,
  addNote,
  editNote,
  handleClose,
}) {
  const [noteText, setNoteText] = useState(currentNote.text);
  const [noteTitle, setNoteTitle] = useState(currentNote.title);
  // const [textAreaHeight, setTextAreaHeight] = useState();

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
    // setTextAreaHeight(e.target.scrollHeight);
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

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleClose();
      editNote(currentNote.id, noteText, noteTitle);
    }
  };

  return (
    <Form
      onSubmit={currentNote.id === null ? handleAddClick : handleSaveClick}
      className="p-3 m-3 w-50 mx-auto border"
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
        rows={5}
        style={{
          resize: "none",
          // overflow: "hidden",
          // height: `${textAreaHeight}px`,
        }}
        autoFocus
      />
      <div className="d-grid">
        <Button
          variant={currentNote.id === null ? "primary" : "secondary"}
          type="submit"
          className="my-2"
        >
          {currentNote.id === null ? "Add" : "Save"}
        </Button>
      </div>
    </Form>
  );
}
