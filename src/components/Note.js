import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaSkullCrossbones } from "react-icons/fa";
import DeleteNoteModal from "./DeleteNoteModal";

export default function Note({
  note,
  deleteNote,
  setCurrentNote,
  setShowEditNoteModal,
}) {
  const { text, id, date, title } = note;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleNoteClick = () => {
    setCurrentNote(note);
    setShowEditNoteModal(true);
  };

  return (
    <Card className="Note" border="warning">
      <Card.Body role="button" onClick={handleNoteClick}>
        <Card.Title className="me-5">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Button
        onClick={() => setShowDeleteModal(true)}
        variant="danger"
        className="ms-auto m-2 pt-0 px-2 rounded-circle"
      >
        <FaSkullCrossbones />
      </Button>
      <DeleteNoteModal
        deleteNote={deleteNote}
        noteId={id}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <Card.Footer className="text-muted">{date}</Card.Footer>
    </Card>
  );
}
