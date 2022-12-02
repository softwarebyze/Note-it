import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteNoteModal({
  currentNote,
  showDeleteNoteModal,
  setShowDeleteNoteModal,
  deleteNote,
}) {
  const handleClose = () => {
    setShowDeleteNoteModal(false);
  };
  const handleDeleteNote = () => {
    console.log(currentNote);
    deleteNote(currentNote.id);
    handleClose();
  };

  return (
    <Modal size="sm" show={showDeleteNoteModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>U sure?</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleDeleteNote} variant="danger" autoFocus>
          Yes, Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
