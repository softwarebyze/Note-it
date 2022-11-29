import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaSkullCrossbones } from "react-icons/fa";
import DeleteNoteModal from "./DeleteModal";

export default function Note({ text, id, date, title, deleteNote }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <Card>
      <Card.Body>
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
