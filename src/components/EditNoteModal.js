import Modal from "react-bootstrap/Modal";
import NewNoteForm from "./NewNoteForm";

export default function EditNoteModal({
  currentNote,
  addNote,
  showEditNoteModal,
  setShowEditNoteModal,
}) {
  const handleClose = () => setShowEditNoteModal(false);

  return (
    <>
      <Modal size="sm" show={showEditNoteModal} onHide={handleClose} centered>
        {/* <Modal.Body>
          <Modal.Title>{title}</Modal.Title>
          {text}</Modal.Body> */}
          <NewNoteForm currentNote={currentNote} addNote={addNote}/>
      </Modal>
    </>
  );
}
