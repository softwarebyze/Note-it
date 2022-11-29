import Modal from "react-bootstrap/Modal";

export default function EditNoteModal({
  noteId,
  showEditNoteModal,
  setShowEditNoteModal,
}) {
  const handleClose = () => setShowEditNoteModal(false);

  return (
    <>
      <Modal show={showEditNoteModal} onHide={handleClose} centered>

        <Modal.Body>This is the EditNoteModal</Modal.Body>

      </Modal>
    </>
  );
}
