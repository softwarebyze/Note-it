import Modal from "react-bootstrap/Modal";

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
        <Modal.Body>
          <Modal.Title>{title}</Modal.Title>
          {text}</Modal.Body>
      </Modal>
    </>
  );
}
